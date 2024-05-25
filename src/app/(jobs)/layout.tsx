import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			
			{children}
		</>
	);
}
