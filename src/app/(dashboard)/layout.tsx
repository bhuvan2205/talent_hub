import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";

export default async function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<div className="flex w-full items-center">
				<Navbar />
				<Profile />
			</div>
			{children}
		</>
	);
}
