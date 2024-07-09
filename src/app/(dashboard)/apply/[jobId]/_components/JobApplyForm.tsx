"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import {
  createJobApplicationSchema,
  createJobApplicationType,
} from "@/schema/jobs";
import { useAction } from "next-safe-action/hooks";
import { postSafeJobApplication } from "@/actions/jobs";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import ActionResponse from "@/components/ActionResponse/ActionResponse";

type JobApplyFormProps = {
  jobId: string;
};

export default function JobApplyForm({ jobId }: JobApplyFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createJobApplicationType>({
    resolver: zodResolver(createJobApplicationSchema),
  });
  const { toast } = useToast();

  const { executeAsync, isExecuting, result } = useAction(
    postSafeJobApplication,
    {
      onSuccess: () => {
        toast({
          variant: "default",
          title: "Success! 🎉",
          description: "Job application has been Posted!",
        });
      },
      onError: () => {
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
      <ActionResponse result={result} />
      <form className="mt-8 space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="Enter your name"
            {...register("name")}
          />
          {errors?.name && (
            <small className="text-red-500">{errors?.name?.message}</small>
          )}
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            placeholder="Enter your phone"
            {...register("phone")}
          />
          {errors?.phone && (
            <small className="text-red-500">{errors?.phone?.message}</small>
          )}
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="Enter your email"
            type="email"
            {...register("email")}
          />
          {errors?.email && (
            <small className="text-red-500">{errors?.email?.message}</small>
          )}
        </div>
        <div>
          <Label htmlFor="resume">Resume</Label>
          <Textarea
            className="min-h-[150px]"
            id="resume"
            placeholder="Write your resume"
            {...register("resume")}
          />
          {errors?.resume && (
            <small className="text-red-500">{errors?.resume?.message}</small>
          )}
        </div>

        <Button className="w-full" type="submit" disabled={isExecuting}>
          {isExecuting ? "..." : "Apply Now"}
        </Button>
      </form>
    </>
  );
}
