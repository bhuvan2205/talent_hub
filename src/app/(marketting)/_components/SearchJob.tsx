"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const searchJobSchema = z.object({
  search: z.string().min(3, {
    message: "Please enter a search query",
  }),
});

type searchJobSchemaType = z.infer<typeof searchJobSchema>;

export default function SearchJob() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<searchJobSchemaType>({ resolver: zodResolver(searchJobSchema) });
  const router = useRouter();

  const onSubmit = async (data: searchJobSchemaType) => {
    const { search } = data || {};
    router.push(`/jobs?search=${search}`);
  };

  return (
    <form className="flex space-x-2 justify-center" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full">
        <Input
          className="flex-1 rounded-lg"
          placeholder="Search for jobs..."
          type="search"
          {...register("search")}
        />
        {errors?.search && (
          <p className="text-red-500 text-sm text-left">
            {errors?.search?.message}
          </p>
        )}
      </div>
      <Button type="submit">Search</Button>
    </form>
  );
}
