import { SearchIcon } from "lucide-react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationPrevious,
	PaginationLink,
	PaginationNext,
} from "@/components/ui/pagination";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import isLoggedIn from "@/lib/auth";
import { Suspense } from "react";
import JobListing from "../_components/JobListing";
import SkeletonJobListing from "../_components/SkeletonJobListing";

export default async function Page({
	searchParams: { page },
}: {
	searchParams: { page: number };
}) {
	await isLoggedIn();
	return (
		<section className="bg-gray-100 py-8 px-6 md:px-10 dark:bg-gray-800 rounded-lg">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				<div className="col-span-1 md:col-span-1">
					<h2 className="text-2xl font-bold mb-4">Filters</h2>
					<Accordion collapsible type="single">
						<AccordionItem value="job-title">
							<AccordionTrigger className="text-lg font-medium">
								Job Title
							</AccordionTrigger>
							<AccordionContent>
								<div className="grid gap-2">
									<Label className="flex items-center gap-2 font-normal">
										<Checkbox id="job-title-software-engineer" />
										Software Engineer
									</Label>
									<Label className="flex items-center gap-2 font-normal">
										<Checkbox id="job-title-product-manager" />
										Product Manager{"\n                                  "}
									</Label>
									<Label className="flex items-center gap-2 font-normal">
										<Checkbox id="job-title-designer" />
										Designer{"\n                                  "}
									</Label>
								</div>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="location">
							<AccordionTrigger className="text-lg font-medium">
								Location
							</AccordionTrigger>
							<AccordionContent>
								<div className="grid gap-2">
									<Label className="flex items-center gap-2 font-normal">
										<Checkbox id="location-san-francisco" />
										San Francisco{"\n                                  "}
									</Label>
									<Label className="flex items-center gap-2 font-normal">
										<Checkbox id="location-new-york" />
										New York{"\n                                  "}
									</Label>
									<Label className="flex items-center gap-2 font-normal">
										<Checkbox id="location-remote" />
										Remote{"\n                                  "}
									</Label>
								</div>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="job-type">
							<AccordionTrigger className="text-lg font-medium">
								Job Type
							</AccordionTrigger>
							<AccordionContent>
								<div className="grid gap-2">
									<Label className="flex items-center gap-2 font-normal">
										<Checkbox id="job-type-full-time" />
										Full-Time{"\n                                  "}
									</Label>
									<Label className="flex items-center gap-2 font-normal">
										<Checkbox id="job-type-part-time" />
										Part-Time{"\n                                  "}
									</Label>
									<Label className="flex items-center gap-2 font-normal">
										<Checkbox id="job-type-contract" />
										Contract{"\n                                  "}
									</Label>
								</div>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="salary-range">
							<AccordionTrigger className="text-lg font-medium">
								Salary Range
							</AccordionTrigger>
							<AccordionContent>
								<div className="grid gap-2">
									<Label className="flex items-center gap-2 font-normal">
										<Checkbox id="salary-range-0-50k" />
										$0 - $50,000{"\n                                  "}
									</Label>
									<Label className="flex items-center gap-2 font-normal">
										<Checkbox id="salary-range-50k-100k" />
										$50,000 - $100,000{"\n                                  "}
									</Label>
									<Label className="flex items-center gap-2 font-normal">
										<Checkbox id="salary-range-100k-plus" />
										$100,000+{"\n                                  "}
									</Label>
								</div>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
					<div className="flex justify-between mt-4">
						<Button variant="outline">Clear Filters</Button>
						<Button>Apply Filters</Button>
					</div>
				</div>
				<div className="col-span-2 md:col-span-2">
					<div className="flex items-center justify-between mb-4">
						<h2 className="text-2xl font-bold">Job Listings</h2>
					</div>
					<Suspense fallback={<SkeletonJobListing />}>
						<JobListing page={page} />
					</Suspense>
				</div>
			</div>
		</section>
	);
}
