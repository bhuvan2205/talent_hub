import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import { BriefcaseIcon } from "lucide-react";
import ThemeSwitch from "../ThemeSwitch";

export default function Navbar() {
	return (
		<header className="px-4 lg:px-6 h-16 flex items-center w-full">
			<Link className="flex items-center justify-center" href={ROUTES.HOME}>
				<BriefcaseIcon className="h-6 w-6" />
				<span className="sr-only">Job Finder</span>
			</Link>
			<nav className="ml-auto flex gap-4 sm:gap-6 items-center">
				<Link
					className="text-sm font-medium hover:underline underline-offset-4"
					href={ROUTES.JOBS}>
					Find Jobs
				</Link>
				<Link
					className="text-sm font-medium hover:underline underline-offset-4"
					href={ROUTES.POST_JOBS}>
					Post a Job
				</Link>
				<Link
					className="text-sm font-medium hover:underline underline-offset-4"
					href={ROUTES.ABOUT}>
					About
				</Link>
				<ThemeSwitch />
			</nav>
		</header>
	);
}
