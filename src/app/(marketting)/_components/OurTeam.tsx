import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function OurTeam() {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
							Meet the Team
						</div>
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
							The Minds Behind the App
						</h2>
						<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
							Our dedicated team of experts is passionate about connecting
							talent with opportunity. Get to know the people who are driving
							the innovation behind our job listing app.
						</p>
					</div>
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
						<div className="flex flex-col items-center space-y-2">
							<Avatar>
								<AvatarImage src="/avatar_1.jpg" />
								<AvatarFallback>JD</AvatarFallback>
							</Avatar>
							<div className="space-y-1 text-center">
								<h4 className="text-lg font-semibold">John Doe</h4>
								<p className="text-gray-500 dark:text-gray-400">
									Co-Founder, CEO
								</p>
								<p className="text-sm text-gray-500 dark:text-gray-400">
									John is a seasoned entrepreneur with a passion for connecting
									people with their dream jobs.
								</p>
							</div>
						</div>
						<div className="flex flex-col items-center space-y-2">
							<Avatar>
								<AvatarImage src="/avatar_2.jpg" />
								<AvatarFallback>JL</AvatarFallback>
							</Avatar>
							<div className="space-y-1 text-center">
								<h4 className="text-lg font-semibold">Jane Lim</h4>
								<p className="text-gray-500 dark:text-gray-400">
									Co-Founder, CTO
								</p>
								<p className="text-sm text-gray-500 dark:text-gray-400">
									Jane is a tech visionary who leads the development of our
									cutting-edge job search platform.
								</p>
							</div>
						</div>
						<div className="flex flex-col items-center space-y-2">
							<Avatar>
								<AvatarImage src="/avatar_3.jpg" />
								<AvatarFallback>SM</AvatarFallback>
							</Avatar>
							<div className="space-y-1 text-center">
								<h4 className="text-lg font-semibold">Sarah Mayer</h4>
								<p className="text-gray-500 dark:text-gray-400">
									Head of Product
								</p>
								<p className="text-sm text-gray-500 dark:text-gray-400">
									Sarah is a product expert who ensures our app delivers an
									exceptional user experience.
								</p>
							</div>
						</div>
						<div className="flex flex-col items-center space-y-2">
							<Avatar>
								<AvatarImage src="/avatar_4.jpg" />
								<AvatarFallback>MR</AvatarFallback>
							</Avatar>
							<div className="space-y-1 text-center">
								<h4 className="text-lg font-semibold">Michael Roth</h4>
								<p className="text-gray-500 dark:text-gray-400">
									Head of Engineering
								</p>
								<p className="text-sm text-gray-500 dark:text-gray-400">
									Michael leads our talented engineering team, ensuring our
									technology is cutting-edge and scalable.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
