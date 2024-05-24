import { Button } from "@/components/ui/button";
import {
	Card,
	CardHeader,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import { LocateIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function PopularJobs() {
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
						<Card>
							<CardHeader>
								<div className="flex items-center gap-2">
									<Image
										alt="Company Logo"
										className="rounded-md"
										height="40"
										src="/placeholder.svg"
										style={{
											aspectRatio: "40/40",
											objectFit: "cover",
										}}
										width="40"
									/>
									<div>
										<h3 className="text-base font-semibold">
											Software Engineer
										</h3>
										<p className="text-sm text-gray-500 dark:text-gray-400">
											Acme Inc
										</p>
									</div>
								</div>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-gray-500 dark:text-gray-400">
									Seeking a skilled software engineer to join our growing team.
									Experience with React and Node.js required.
								</p>
							</CardContent>
							<CardFooter>
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
										<LocateIcon className="h-4 w-4" />
										<span>San Francisco, CA</span>
									</div>
									<Button variant="link">Apply Now</Button>
								</div>
							</CardFooter>
						</Card>
						<Card>
							<CardHeader>
								<div className="flex items-center gap-2">
									<Image
										alt="Company Logo"
										className="rounded-md"
										height="40"
										src="/placeholder.svg"
										style={{
											aspectRatio: "40/40",
											objectFit: "cover",
										}}
										width="40"
									/>
									<div>
										<h3 className="text-base font-semibold">
											Marketing Manager
										</h3>
										<p className="text-sm text-gray-500 dark:text-gray-400">
											Globex Corporation
										</p>
									</div>
								</div>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-gray-500 dark:text-gray-400">
									We are looking for an experienced marketing manager to lead
									our digital marketing efforts. Strong analytical skills
									required.
								</p>
							</CardContent>
							<CardFooter>
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
										<LocateIcon className="h-4 w-4" />
										<span>Remote</span>
									</div>
									<Button variant="link">Apply Now</Button>
								</div>
							</CardFooter>
						</Card>
						<Card>
							<CardHeader>
								<div className="flex items-center gap-2">
									<Image
										alt="Company Logo"
										className="rounded-md"
										height="40"
										src="/placeholder.svg"
										style={{
											aspectRatio: "40/40",
											objectFit: "cover",
										}}
										width="40"
									/>
									<div>
										<h3 className="text-base font-semibold">
											Product Designer
										</h3>
										<p className="text-sm text-gray-500 dark:text-gray-400">
											Stark Industries
										</p>
									</div>
								</div>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-gray-500 dark:text-gray-400">
									We are seeking a talented product designer to join our
									innovative team. Experience with Figma and user research
									required.
								</p>
							</CardContent>
							<CardFooter>
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
										<LocateIcon className="h-4 w-4" />
										<span>New York, NY</span>
									</div>
									<Button variant="link">Apply Now</Button>
								</div>
							</CardFooter>
						</Card>
						<Card>
							<CardHeader>
								<div className="flex items-center gap-2">
									<Image
										alt="Company Logo"
										className="rounded-md"
										height="40"
										src="/placeholder.svg"
										style={{
											aspectRatio: "40/40",
											objectFit: "cover",
										}}
										width="40"
									/>
									<div>
										<h3 className="text-base font-semibold">Data Analyst</h3>
										<p className="text-sm text-gray-500 dark:text-gray-400">
											Stark Industries
										</p>
									</div>
								</div>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-gray-500 dark:text-gray-400">
									We are looking for a data analyst to join our growing
									analytics team. Experience with SQL and data visualization
									tools required.
								</p>
							</CardContent>
							<CardFooter>
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
										<LocateIcon className="h-4 w-4" />
										<span>Remote</span>
									</div>
									<Button variant="link">Apply Now</Button>
								</div>
							</CardFooter>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}
