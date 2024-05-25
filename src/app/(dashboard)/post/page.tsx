import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import isLoggedIn from "@/lib/auth";

export default async function Page() {
	await isLoggedIn();

	return (
		<div className="col-span-2 md:col-span-2">
			<div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
				<h1 className="text-2xl font-bold mb-4">Create Job</h1>
				<form>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
						<div>
							<Label htmlFor="name">Job Title</Label>
							<Input id="name" placeholder="Enter your title" />
						</div>
						<div>
							<Label htmlFor="email">Job Type</Label>
							<Select>
								<SelectTrigger>
									<SelectValue placeholder="Job type" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Job Type</SelectLabel>
										<SelectItem value="full-time">Full Time</SelectItem>
										<SelectItem value="part-time">Part Time</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
						<div>
							<Label htmlFor="name">Company Name</Label>
							<Input id="name" placeholder="Enter your company name" />
						</div>
						<div>
							<Label htmlFor="name">Location</Label>
							<Input id="name" placeholder="Job Location" />
						</div>
					</div>
					<div className="my-4">
						<Label htmlFor="cover-letter">Requirements</Label>
						<Textarea
							className="min-h-[120px]"
							id="cover-letter"
							placeholder="Enter your job requirements"
						/>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
						<div>
							<Label htmlFor="name">Min Salary</Label>
							<Input id="name" placeholder="Minimum Salary" />
						</div>
						<div>
							<Label htmlFor="name">Max Salary</Label>
							<Input id="name" placeholder="Maximum Salary" />
						</div>
					</div>
					<div className="my-4">
						<Label htmlFor="cover-letter">Benefits</Label>
						<Textarea
							className="min-h-[100px]"
							id="cover-letter"
							placeholder="Enter benefits"
						/>
					</div>
					<Button className="w-full" type="submit">
						Create job
					</Button>
				</form>
			</div>
		</div>
	);
}
