"use server";

import prisma from "@/config/db";
import { actionClient } from "@/config/safe-action";
import { ROUTES } from "@/constants/routes";
import isLoggedIn from "@/lib/auth";
import { createJobSchema, extendedJobApplicationSchema } from "@/schema/jobs";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const postJob = async (formData: unknown) => {
  await isLoggedIn();
  const { getUser, getPermission } = getKindeServerSession();
  const hasPermission = await getPermission("post:job");

  if (!hasPermission?.isGranted) {
    return { message: "User has no access!" };
  }

  const user = await getUser();
  const { success, data } = createJobSchema.safeParse(formData);

  if (!success) {
    return {
      message: "Invalid form data.",
    };
  }
  await prisma.job.create({
    data: {
      ...data,
      authorId: user?.id!,
    },
  });

  revalidateTag("jobs");
  redirect(ROUTES.JOBS);
};

export const postSafeJobApplication = actionClient
  .schema(extendedJobApplicationSchema)
  .action(async ({ parsedInput }) => {
    const { getUser, getPermission } = getKindeServerSession();
    const hasPermission = await getPermission("apply:job");

    if (!hasPermission?.isGranted) {
      throw Error("User has no access!");
    }

    const user = await getUser();
    await prisma.jobApplication.create({
      data: {
        ...parsedInput,
        userId: user?.id!,
      },
    });
    revalidatePath(ROUTES.DASHBOARD);

    return {
      message: "Job application submitted!",
    };
  });
