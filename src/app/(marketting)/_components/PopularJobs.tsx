import { Button } from "@/components/ui/button";
import {
	Card,
	CardHeader,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import { ROUTES } from "@/constants/routes";
import { getLatestJobs } from "@/data/job";
import { LocateIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function PopularJobs() {
	const jobs = await getLatestJobs();
	return (
		<section className="w-full py-12 md:py-24 lg:py-32">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							Featured Job Postings
						</h2>
						<p className="mx-auto max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
							Explore the latest job opportunities from top companies.
						</p>
					</div>
					<div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
						{jobs?.map((job) => (
							<Card key={job.id}>
								<CardHeader>
									<div className="flex items-center gap-2">
										<Image
											alt="Company Logo"
											className="rounded-md overflow-hidden"
											height="40"
											src={job.company?.imgURL as string}
											style={{
												aspectRatio: "40/40",
												objectFit: "cover",
											}}
											width="40"
										/>
										<div className="max-w-fit overflow-hidden">
											<h3 className="text-base font-semibold truncate">
												{job.title}
											</h3>
											<p className="text-sm text-left text-gray-500 dark:text-gray-400">
												{job?.company?.name}
											</p>
										</div>
									</div>
								</CardHeader>
								<CardContent>
									<p className="text-sm text-gray-500 dark:text-gray-400 text-justify">
										{job.requirements}
									</p>
								</CardContent>
								<CardFooter>
									<div className="flex items-center justify-between h-full">
										<div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
											<LocateIcon className="h-4 w-4" />
											<span>{job.location}</span>
										</div>
										<Button variant="link" asChild>
											<Link href={`${ROUTES.APPLY_JOBS}/${job.id}`}>
												Apply Now
											</Link>
										</Button>
									</div>
								</CardFooter>
							</Card>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
