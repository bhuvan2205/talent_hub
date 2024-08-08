"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  createJobApplicationSchema,
  createJobApplicationType,
} from "@/schema/jobs";
import { useAction } from "next-safe-action/hooks";
import { postSafeJobApplication } from "@/actions/jobs";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants/routes";
import "@uploadthing/react/styles.css";
import { UploadButton } from "@/lib/uploadthing";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

type JobApplyFormProps = {
  jobId: string;
  user: KindeUser | null;
  isAlreadyApplied: boolean;
};

export default function JobApplyForm({
  jobId,
  user,
  isAlreadyApplied,
}: JobApplyFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    getValues,
    formState: { errors },
  } = useForm<createJobApplicationType>({
    resolver: zodResolver(createJobApplicationSchema),
    defaultValues: {
      name: user?.given_name ?? "",
      email: user?.email ?? "",
    },
  });
  const { resumeUrl } = getValues();
  const { toast } = useToast();
  const router = useRouter();

  const { executeAsync, isExecuting } = useAction(
    postSafeJobApplication,
    {
      onSuccess: () => {
        toast({
          variant: "default",
          title: "Success! 🎉",
          description: "Job application has been Posted!",
        });
        router.push(ROUTES.DASHBOARD);
      },
      onError: ({ error }) => {
        console.log("🚀 ~ JobApplyForm ~ error:", error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Something went wrong!",
        });
      },
    }
  );

  const onSubmit = async (data: createJobApplicationType) => {
    await executeAsync({ ...data, jobId });
  };

  return (
    <>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="Enter your name"
            {...register("name")}
            disabled={!!user?.given_name}
          />
          {errors?.name && (
            <small className="text-red-500">{errors?.name?.message}</small>
          )}
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="Enter your email"
            type="email"
            {...register("email")}
            disabled={!!user?.email}
          />
          {errors?.email && (
            <small className="text-red-500">{errors?.email?.message}</small>
          )}
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            placeholder="Enter your phone"
            {...register("phone")}
            disabled={isAlreadyApplied}
          />
          {errors?.phone && (
            <small className="text-red-500">{errors?.phone?.message}</small>
          )}
        </div>
        <div className="flex flex-col">
          <div className="flex gap-4">
            <UploadButton
              endpoint="pdfUploader"
              disabled={isAlreadyApplied}
              onClientUploadComplete={(res) => {
                setValue("resumeUrl", res?.at(0)?.url as string);
                toast({
                  variant: "default",
                  title: "Success! 🎉",
                  description: "File upload successfully!",
                });
              }}
              onUploadError={(error: Error) => {
                setError("resumeUrl", { message: error?.message });
              }}
            />
            {resumeUrl && (
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="underline text-violet-600 font-bold mt-4"
              >
                View Resume
              </a>
            )}
          </div>
          <p>
            {errors?.resumeUrl && (
              <small className="text-red-500">
                {errors?.resumeUrl?.message}
              </small>
            )}
          </p>
        </div>
        {isAlreadyApplied ? (
          <Button
            className="w-full"
            type="submit"
            disabled
          >
            Already applied
          </Button>
        ) : (
          <Button
            className="w-full"
            type="submit"
            disabled={isExecuting || isAlreadyApplied}
          >
            {isExecuting ? "..." : "Apply Now"}
          </Button>
        )}
      </form>
    </>
  );
}
