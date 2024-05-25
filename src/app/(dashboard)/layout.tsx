import { ReactNode, Suspense } from "react";
import Profile from "../_components/Profile";
import Navbar from "@/components/Navbar";

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
