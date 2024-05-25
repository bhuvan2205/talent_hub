import Image from "next/image";

export default function AboutUs() {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32">
			<div className="container px-4 md:px-6">
				<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
					<div className="flex flex-col justify-center space-y-4">
						<div className="space-y-2">
							<div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
								About Us
							</div>
							<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
								Connecting Talent with Opportunity
							</h1>
							<p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
								Our job listing app is designed to help job seekers find their
								dream roles and employers connect with top talent. With powerful
								search and application tools, we are revolutionizing the way
								people find and land their next great opportunity.
							</p>
						</div>
					</div>
					<div className="flex items-center justify-center">
						<Image
							alt="Company Logo"
							className="mx-auto aspect-square overflow-hidden object-cover rounded-full border-4 bg-gray-100 dark:bg-gray-800"
							height="200"
							src="/about_us.jpg"
							width="200"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
