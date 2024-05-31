"use server";

import prisma from "@/config/db";
import { ROUTES } from "@/constants/routes";
import isLoggedIn from "@/lib/auth";
import { createJobSchema } from "@/schema/jobs";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidateTag } from "next/cache";
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
