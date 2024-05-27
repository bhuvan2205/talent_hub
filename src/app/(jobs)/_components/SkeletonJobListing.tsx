import { Skeleton } from "@/components/ui/skeleton";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationPrevious,
	PaginationLink,
	PaginationNext,
} from "@/components/ui/pagination";

export default function SkeletonJobListing() {
	return (
		<>
			<div className="grid gap-6">
				{[...Array(3)].map((_, index) => (
					<div
						className="flex flex-col space-y-3 bg-white dark:bg-gray-900 p-4"
						key={`job-${index}`}>
						<div className="flex justify-between">
							<Skeleton className="h-12 w-[250px] rounded-lg" />
							<Skeleton className="h-12 w-[120px] rounded-lg" />
						</div>
						<div className="space-y-2">
							<Skeleton className="h-20 w-full rounded-lg" />
						</div>
					</div>
				))}
			</div>
			<div className="flex justify-center mt-8">
				<Pagination>
					<PaginationContent>
						<PaginationItem>
							<PaginationPrevious href="#" />
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href="#">1</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href="#" isActive>
								2
							</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href="#">3</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationNext href="#" />
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			</div>
		</>
	);
}
