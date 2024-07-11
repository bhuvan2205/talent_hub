import { z } from "zod";

export const jobIdSchema = z.string();

export const createJobSchema = z
  .object({
    title: z.string().min(4, "Enter valid Title"),
    type: z.string({
      required_error: "Job Type is required",
      invalid_type_error: "Job Type must be a string",
    }),
    companyId: z.string({
      required_error: "Company is required",
    }),
    location: z.string().min(4, "Enter valid location"),
    roles: z
      .string()
      .min(250, "Minimum 250 characters is required")
      .max(1000, "Cannot exceed 750 characters"),
    requirements: z
      .string()
      .min(250, "Minimum 250 characters is required")
      .max(1250, "Cannot exceed 1250 characters"),
    minSalary: z.coerce
      .number({
        required_error: "Minimum salary is required",
        invalid_type_error: "Minimum salary must be a number",
      })
      .int()
      .positive()
      .min(1000, { message: "Minimum salary should be 1000" }),
    maxSalary: z.coerce
      .number({
        required_error: "Maximum salary is required",
        invalid_type_error: "Maximum salary must be a number",
      })
      .int()
      .positive()
      .min(1000, { message: "Maximum salary should be 1000" }),
    benefits: z
      .string()
      .min(250, "Minimum 250 characters is required")
      .max(1250, "Cannot exceed 1250 characters"),
  })
  .refine((data) => data.maxSalary > data.minSalary, {
    message: "Maximum salary must be greater than minimum salary",
    path: ["maxSalary"],
  });

export type createJobSchemaType = z.infer<typeof createJobSchema>;

export const createJobApplicationSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(3, { message: "Name must be at least 3 characters" }),
  phone: z
    .string({ required_error: "Phone is required" })
    .min(10, { message: "Phone number must be at least 10 digits" })
    .regex(/^\d+$/, { message: "Phone number must contain only digits" }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email address" }),
  resumeUrl: z.string({
    required_error: "Resume is required",
    invalid_type_error: "Please upload PDF only",
  }),
});

export const extendedJobApplicationSchema = createJobApplicationSchema.extend({
  jobId: z.string().uuid({ message: "Invalid job ID format" }),
});

export type createJobApplicationType = z.infer<
  typeof createJobApplicationSchema
>;
