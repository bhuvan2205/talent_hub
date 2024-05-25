import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import isLoggedIn from "@/lib/auth";

export default async function Page({
	params: { jobId },
}: {
	params: { jobId: string };
}) {
	await isLoggedIn();

	return (
		<section className="w-full py-12 md:py-16 lg:py-20">
			<div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-[1fr_400px] lg:gap-16 xl:gap-24">
				<div>
					<div className="space-y-4">
						<div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
							Job Posting
						</div>
						<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							Senior Frontend Engineer
						</h1>
						<p className="max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
							We are looking for an experienced frontend engineer to join our
							growing team and help us build innovative web applications. You
							will be working on a variety of projects, from complex data
							visualizations to responsive user interfaces.
						</p>
					</div>
					<div className="mt-8 space-y-4">
						<div>
							<Label htmlFor="name">Name</Label>
							<Input id="name" placeholder="Enter your name" />
						</div>
						<div>
							<Label htmlFor="email">Email</Label>
							<Input id="email" placeholder="Enter your email" type="email" />
						</div>
						<div>
							<Label htmlFor="resume">Resume</Label>
							<Input id="resume" type="file" />
						</div>
						<div>
							<Label htmlFor="cover-letter">Cover Letter</Label>
							<Textarea
								className="min-h-[150px]"
								id="cover-letter"
								placeholder="Write your cover letter"
							/>
						</div>
						<Button className="w-full" type="submit">
							Apply Now
						</Button>
					</div>
				</div>
				<div className="space-y-6 lg:sticky lg:top-6">
					<Card>
						<CardHeader>
							<CardTitle>Job Details</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="grid gap-1">
								<p className="text-sm font-medium">Job Requirements</p>
								<ul className="list-disc space-y-1 pl-4 text-sm text-gray-500 dark:text-gray-400">
									<li>5+ years of experience in frontend development</li>
									<li>Proficient in HTML, CSS, and JavaScript</li>
									<li>
										Experience with modern frontend frameworks like React or Vue
									</li>
									<li>Strong problem-solving and critical thinking skills</li>
									<li>Ability to work collaboratively in a team</li>
								</ul>
							</div>
							<div className="grid gap-1">
								<p className="text-sm font-medium">Benefits</p>
								<ul className="list-disc space-y-1 pl-4 text-sm text-gray-500 dark:text-gray-400">
									<li>Competitive salary and equity</li>
									<li>Comprehensive health, dental, and vision insurance</li>
									<li>401(k) retirement plan with employer matching</li>
									<li>Generous paid time off and holidays</li>
									<li>Professional development opportunities</li>
								</ul>
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>About the Company</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<p className="text-sm text-gray-500 dark:text-gray-400">
								Acme Inc. is a leading technology company that specializes in
								building innovative web applications. We have been in business
								for over 10 years and have a strong track record of delivering
								high-quality solutions to our clients.
							</p>
							<p className="text-sm text-gray-500 dark:text-gray-400">
								Our team is composed of talented engineers, designers, and
								product managers who are passionate about their work. We value
								collaboration, creativity, and continuous learning, and we
								strive to create a positive and inclusive work environment.
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
