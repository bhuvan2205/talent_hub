import { BriefcaseIcon, ClipboardIcon, CodeIcon, LaptopIcon, TypeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Categories() {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 rounded-lg">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
							Popular Job Categories
						</h2>
						<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
							Explore the most in-demand job categories and find your perfect
							fit.
						</p>
					</div>
					<div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
						<Link
							className="group flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-4 text-center transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
							href="#">
							<CodeIcon className="h-8 w-8 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
							<span className="text-sm font-medium text-gray-900 dark:text-gray-50">
								Software Engineering
							</span>
						</Link>
						<Link
							className="group flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-4 text-center transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
							href="#">
							<BriefcaseIcon className="h-8 w-8 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
							<span className="text-sm font-medium text-gray-900 dark:text-gray-50">
								Business & Management
							</span>
						</Link>
						<Link
							className="group flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-4 text-center transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
							href="#">
							<TypeIcon className="h-8 w-8 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
							<span className="text-sm font-medium text-gray-900 dark:text-gray-50">
								Design & Creative
							</span>
						</Link>
						<Link
							className="group flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-4 text-center transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
							href="#">
							<LaptopIcon className="h-8 w-8 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
							<span className="text-sm font-medium text-gray-900 dark:text-gray-50">
								IT & Technology
							</span>
						</Link>
						<Link
							className="group flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-4 text-center transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
							href="#">
							<ClipboardIcon className="h-8 w-8 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
							<span className="text-sm font-medium text-gray-900 dark:text-gray-50">
								Administrative
							</span>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
