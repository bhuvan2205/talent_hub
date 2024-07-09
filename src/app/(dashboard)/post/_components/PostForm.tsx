"use client";

import { Company } from "@prisma/client";
import { postJob } from "@/actions/jobs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { createJobSchema, createJobSchemaType } from "@/schema/jobs";
import { zodResolver } from "@hookform/resolvers/zod";
import PostFormBtn from "./PostFormBtn";
import FroalaEditor from "react-froala-wysiwyg";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";

export default function PostForm({ companies }: { companies: Company[] }) {
  const {
    trigger,
    register,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<createJobSchemaType>({ resolver: zodResolver(createJobSchema) });
  return (
    <form
      action={async () => {
        const res = await trigger();
        if (!res) return;
        const job = getValues();
        postJob(job);
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <Label htmlFor="name">Job Title</Label>
          <Input
            id="name"
            placeholder="Enter your title"
            {...register("title")}
          />
          {errors?.title && (
            <small className="text-red-500">{errors?.title?.message}</small>
          )}
        </div>
        <div>
          <Label htmlFor="Job type">Job Type</Label>
          <Select
            {...register("type")}
            onValueChange={(value) => setValue("type", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Job type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Job Type</SelectLabel>
                <SelectItem value="full-time">Full Time</SelectItem>
                <SelectItem value="part-time">Part Time</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {errors?.type && (
            <small className="text-red-500">{errors?.type?.message}</small>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div>
          <Label htmlFor="companyName">Company Name</Label>
          <Select
            {...register("companyId")}
            onValueChange={(value) => setValue("companyId", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Company" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Company Name</SelectLabel>
                {(companies ?? [])?.map((company) => (
                  <SelectItem key={company?.id} value={company.id}>
                    {company.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          {errors?.companyId && (
            <small className="text-red-500">{errors?.companyId?.message}</small>
          )}
        </div>
        <div>
          <Label htmlFor="name">Location</Label>
          <Input
            id="name"
            placeholder="Job Location"
            {...register("location")}
          />
          {errors?.location && (
            <small className="text-red-500">{errors?.location?.message}</small>
          )}
        </div>
      </div>
      <div className="my-4">
        <Label htmlFor="roles">Roles</Label>
        <FroalaEditor
          tag="textarea"
          onModelChange={(value: string) => setValue("roles", value)}
          config={{
            placeholderText: "Enter job roles...",
            charCounterMax: 1000,
            charCounterCount: true,
          }}
        />
        {errors?.roles && (
          <small className="text-red-500">{errors?.roles?.message}</small>
        )}
      </div>
      <div className="my-4">
        <Label htmlFor="cover-letter">Requirements</Label>
        <FroalaEditor
          onModelChange={(value: string) => setValue("requirements", value)}
          tag="textarea"
          config={{
            placeholderText: "Enter job requirements...",
            charCounterMax: 1250,
            charCounterCount: true,
          }}
        />
        {errors?.requirements && (
          <small className="text-red-500">
            {errors?.requirements?.message}
          </small>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div>
          <Label htmlFor="name">Min Salary</Label>
          <Input
            id="name"
            type="number"
            placeholder="Minimum Salary"
            {...register("minSalary")}
          />
          {errors?.minSalary && (
            <small className="text-red-500">{errors?.minSalary?.message}</small>
          )}
        </div>
        <div>
          <Label htmlFor="name">Max Salary</Label>
          <Input
            type="number"
            id="name"
            placeholder="Maximum Salary"
            {...register("maxSalary")}
          />
          {errors?.maxSalary && (
            <small className="text-red-500">{errors?.maxSalary?.message}</small>
          )}
        </div>
      </div>
      <div className="my-4">
        <Label htmlFor="benefits">Benefits</Label>
        <FroalaEditor
          tag="textarea"
          config={{
            placeholderText: "Enter job benefits...",
            charCounterMax: 1250,
            charCounterCount: true,
          }}
          onModelChange={(value: string) => {
            setValue("benefits", value);
          }}
        />
        {errors?.benefits && (
          <small className="text-red-500">{errors?.benefits?.message}</small>
        )}
      </div>
      <PostFormBtn />
    </form>
  );
}
