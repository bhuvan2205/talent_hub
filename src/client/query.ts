import prisma from "@/config/db";
import { JOB_PER_PAGE } from "@/constants/jobs";

export const queryAllJobs = async (page = 1, pageSize = JOB_PER_PAGE) => {
	const skip = (page - 1) * pageSize;

	const jobs = await prisma.job.findMany({
		where: { active: true },
		skip,
		take: pageSize,
		include: {
			company: true,
		},
	});

	const totalJobs = await prisma.job.count({
		where: { active: true },
	});

	return { jobs, totalJobs, page, pageSize };
};

export const queryLatestJobs = async () => {
	const jobs = await prisma.job.findMany({
		where: { active: true },
		take: 4,
		include: {
			company: true,
		},
		orderBy: {
			createdAt: "desc",
		},
	});

	return jobs;
};
