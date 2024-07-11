import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

const { getUser, getPermission } = getKindeServerSession();

export const ourFileRouter = {
  pdfUploader: f({ pdf: { maxFileSize: "4MB" } }).onUploadComplete(
    async ({ file }) => {
      console.log("file url", file.url);
      return { message: `Pdf Upload Complete` };
    }
  ),
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .middleware(async ({ req }) => {
      const hasPermission = await getPermission("post:job");
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
