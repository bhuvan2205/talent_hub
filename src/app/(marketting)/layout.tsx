import { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<Navbar />
			{children}
			<Toaster />
		</>
	);
}
