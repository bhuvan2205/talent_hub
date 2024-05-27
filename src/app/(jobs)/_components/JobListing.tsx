import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { getAllJobs } from "@/data/job";
import { Button } from "@/components/ui/button";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationPrevious,
	PaginationLink,
	PaginationNext,
} from "@/components/ui/pagination";

export default async function JobListing({ page = 1 }: { page: number }) {
	const { jobs, totalJobs } = await getAllJobs(page);
	const length = Math.ceil(totalJobs / 3);

	return (
		<>
			<div className="grid gap-6">
				{jobs?.map((job) => (
					<Card key={job.id}>
						<CardHeader>
							<div className="flex justify-between w-full">
								<div>
									<CardTitle>{job.title}</CardTitle>
									<CardDescription>
										{job.company} - {job.location}
									</CardDescription>
								</div>
								<Button asChild>
									<Link href={`${ROUTES.APPLY_JOBS}/121`}>Apply Now</Link>
								</Button>
							</div>
						</CardHeader>
						<CardContent>
							<p>{job.requirements}</p>
						</CardContent>
					</Card>
				))}
			</div>
			<div className="flex justify-center mt-8">
				<Pagination>
					<PaginationContent>
						<PaginationItem>
							<PaginationPrevious
								href={`/jobs?page=${
									Number(page) - 1 > 1 ? Number(page) - 1 : 1
								}`}
							/>
						</PaginationItem>
						{Array.from({ length })?.map((_, index) => {
							return (
								<PaginationItem key={`page-${index}`}>
									<PaginationLink
										href={`/jobs?page=${Number(index) + 1}`}
										isActive={page === index + 1}>
										{index + 1}
									</PaginationLink>
								</PaginationItem>
							);
						})}
						<PaginationItem>
							<PaginationNext
								href={`/jobs?page=${
									Number(page) + 1 < length ? Number(page) + 1 : length
								}`}
							/>
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			</div>
		</>
	);
}
