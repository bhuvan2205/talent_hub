import Image from "next/image";

export default function KeyFeatures() {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 rounded-lg">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
							Key Features
						</div>
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
							Streamline Your Job Search
						</h2>
						<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
							Our app offers a range of powerful features to help you find and
							apply for jobs with ease. From advanced search tools to seamless
							application tracking, we are here to support you every step of the
							way.
						</p>
					</div>
				</div>
				<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
					<div className="flex flex-col justify-center space-y-4">
						<ul className="grid gap-6">
							<li>
								<div className="grid gap-1">
									<h3 className="text-xl font-bold">Job Search</h3>
									<p className="text-gray-500 dark:text-gray-400">
										Easily search and filter through thousands of job listings
										to find the perfect fit.
									</p>
								</div>
							</li>
							<li>
								<div className="grid gap-1">
									<h3 className="text-xl font-bold">Application Tracking</h3>
									<p className="text-gray-500 dark:text-gray-400">
										Keep track of your job applications and stay organized
										throughout the process.
									</p>
								</div>
							</li>
							<li>
								<div className="grid gap-1">
									<h3 className="text-xl font-bold">Employer Profiles</h3>
									<p className="text-gray-500 dark:text-gray-400">
										Explore detailed profiles of companies and their open
										positions.
									</p>
								</div>
							</li>
						</ul>
					</div>
					<Image
						alt="Features"
						className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center mix-blend-multiply sm:w-full lg:order-last"
						height="310"
						src="/feature.jpg"
						width="550"
					/>
				</div>
			</div>
		</section>
	);
}
