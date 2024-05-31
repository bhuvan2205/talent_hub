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
		requirements: z
			.string()
			.min(20, "Minimum 20 characters is required")
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
			.min(20, "Minimum 20 characters is required")
			.max(1000, "Cannot exceed 1200 characters"),
	})
	.refine((data) => data.maxSalary > data.minSalary, {
		message: "Maximum salary must be greater than minimum salary",
		path: ["maxSalary"], // path of error
	});

export type createJobSchemaType = z.infer<typeof createJobSchema>;
