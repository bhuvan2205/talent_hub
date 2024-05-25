import { Button } from "@/components/ui/button";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import isLoggedIn from "@/lib/auth";
import {
	BriefcaseIcon,
	StarIcon,
	BookmarkIcon,
	CalendarIcon,
} from "lucide-react";
import Link from "next/link";

export default async function Page() {
	await isLoggedIn();
	return (
		<section className="bg-gray-100 py-8 px-6 md:px-10 dark:bg-gray-800 rounded-lg">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				<div className="col-span-1 md:col-span-1">
					<div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-900">
						<h2 className="text-2xl font-bold mb-4">Dashboard</h2>
						<div className="grid grid-cols-2 gap-4">
							<div className="bg-blue-500 text-white rounded-lg p-4 flex flex-col items-center justify-center">
								<BriefcaseIcon className="h-8 w-8 mb-2" />
								<span className="text-lg font-bold">12</span>
								<span className="text-sm">Applied Jobs</span>
							</div>
							<div className="bg-green-500 text-white rounded-lg p-4 flex flex-col items-center justify-center">
								<StarIcon className="h-8 w-8 mb-2" />
								<span className="text-lg font-bold">5</span>
								<span className="text-sm">Saved Jobs</span>
							</div>
							<div className="bg-yellow-500 text-white rounded-lg p-4 flex flex-col items-center justify-center">
								<BookmarkIcon className="h-8 w-8 mb-2" />
								<span className="text-lg font-bold">3</span>
								<span className="text-sm">Interviews</span>
							</div>
							<div className="bg-red-500 text-white rounded-lg p-4 flex flex-col items-center justify-center">
								<BriefcaseIcon className="h-8 w-8 mb-2" />
								<span className="text-lg font-bold">1</span>
								<span className="text-sm">Offers</span>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-2 md:col-span-2">
					<div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-900">
						<div className="flex items-center justify-between mb-4">
							<h2 className="text-2xl font-bold">Recent Job Applications</h2>
							<Button asChild>
								<Link href="#">
									View All
								</Link>
							</Button>
						</div>
						<div className="grid gap-6">
							<Card>
								<CardHeader>
									<CardTitle>Software Engineer</CardTitle>
									<CardDescription>
										Acme Inc - San Francisco, CA
									</CardDescription>
								</CardHeader>
								<CardContent>
									<p>
										We are seeking an experienced Software Engineer to join our
										growing team. You will be responsible for developing and
										maintaining our web application, as well as collaborating
										with cross-functional teams to deliver high-quality software
										solutions.
									</p>
								</CardContent>
								<CardFooter>
									<div className="flex items-center justify-between gap-2 h-full">
										<div className="flex items-center gap-2">
											<CalendarIcon className="h-5 w-5 text-gray-500" />
											<span className="text-gray-500">Applied 2 days ago</span>
										</div>
										<div className="flex items-center gap-2">
											<span className="text-gray-500">Full-Time</span>
										</div>
									</div>
								</CardFooter>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle>Product Manager</CardTitle>
									<CardDescription>Acme Inc - Remote</CardDescription>
								</CardHeader>
								<CardContent>
									<p>
										Our growing company is looking for a talented Product
										Manager to lead the development of our flagship product. You
										will work closely with the engineering and design teams to
										define product requirements, prioritize features, and ensure
										successful product launches.
									</p>
								</CardContent>
								<CardFooter>
									<div className="flex items-center justify-between gap-2">
										<div className="flex items-center gap-2">
											<CalendarIcon className="h-5 w-5 text-gray-500" />
											<span className="text-gray-500">Applied 1 week ago</span>
										</div>
										<div className="flex items-center gap-2">
											<span className="text-gray-500">Full-Time</span>
										</div>
									</div>
								</CardFooter>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle>UI/UX Designer</CardTitle>
									<CardDescription>Acme Inc - New York, NY</CardDescription>
								</CardHeader>
								<CardContent>
									<p>
										We are seeking a skilled UI/UX Designer to join our creative
										team. You will be responsible for designing intuitive and
										visually appealing user interfaces for our web and mobile
										applications, as well as conducting user research and
										usability testing.
									</p>
								</CardContent>
								<CardFooter>
									<div className="flex items-center justify-between gap-2">
										<div className="flex items-center gap-2">
											<CalendarIcon className="h-5 w-5 text-gray-500" />
											<span className="text-gray-500">Applied 3 days ago</span>
										</div>
										<div className="flex items-center gap-2">
											<span className="text-gray-500">Full-Time</span>
										</div>
									</div>
								</CardFooter>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
