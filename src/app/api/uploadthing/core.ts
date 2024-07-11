import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const uploader = createUploadthing();

const { getUser, getPermission } = getKindeServerSession();

export const ourFileRouter = {
  pdfUploader: uploader({ pdf: { maxFileSize: "4MB" } }).onUploadComplete(async () => {
    return { message: `Pdf Upload Complete` };
  }),
  imageUploader: uploader({ image: { maxFileSize: "4MB" } })
    .middleware(async () => {
      const hasPermission = await getPermission("apply:job");
      const user = await getUser();

      if (!hasPermission?.isGranted || !user) {
        return { message: "User has no access!" };
      }

      return { userId: user?.id };
    })
    .onUploadComplete(async ({ metadata }) => {
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
