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
} from "@/components/ui/pagination";
import { JOB_PER_PAGE } from "@/constants/jobs";

export default async function JobListing({ page = 1 }: { page: number }) {
	const { jobs, totalJobs } = await getAllJobs(page);
	const totalPages = Math.ceil(totalJobs / JOB_PER_PAGE);

	const getPaginationLinks = () => {
		const pageLinks = [];
		const maxLinks = JOB_PER_PAGE;
		let startPage = Math.max(1, page - Math.floor(maxLinks / 2));
		let endPage = Math.min(totalPages, startPage + maxLinks - 1);

		if (endPage - startPage < maxLinks - 1) {
			startPage = Math.max(1, endPage - maxLinks + 1);
		}

		for (let i = startPage; i <= endPage; i++) {
			pageLinks.push(
				<PaginationItem key={i} className="mx-1">
					<Button asChild variant="outline">
						<Link href={`/jobs?page=${i}`}>
							<span className={i === page ? "active" : ""}>{i}</span>
						</Link>
					</Button>
				</PaginationItem>
			);
		}
		return pageLinks;
	};

	if (!jobs?.length) {
		return (
			<div className="grid gap-6">
				<Card>
					<CardHeader>No Jobs Found!</CardHeader>
					<CardContent>
						<Button asChild>
							<Link href={`/`}>Go Home</Link>
						</Button>
					</CardContent>
				</Card>
			</div>
		);
	}

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
										{job.company?.name} - {job.location}
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
						<PaginationItem className="me-4">
							{page > 1 && (
								<Button asChild>
									<Link href={`/jobs?page=${Number(page) - 1}`}>
										<span>Prev</span>
									</Link>
								</Button>
							)}
						</PaginationItem>

						{getPaginationLinks()}

						<PaginationItem className="ms-4">
							{page < totalPages && (
								<Button asChild>
									<Link href={`/jobs?page=${Number(page) + 1}`}>
										<span>Next</span>
									</Link>
								</Button>
							)}
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			</div>
		</>
	);
}
