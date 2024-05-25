import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Hero() {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center space-y-4 text-center">
					<div className="space-y-2">
						<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
							Find Your Dream Job
						</h1>
						<p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
							Search through thousands of job listings and find the perfect
							opportunity for you.
						</p>
					</div>
					<div className="w-full max-w-md">
						<form className="flex space-x-2">
							<Input
								className="flex-1 rounded-lg"
								placeholder="Search for jobs..."
								type="search"
							/>
							<Button type="submit">Search</Button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
