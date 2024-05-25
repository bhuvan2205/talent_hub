import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import Footer from "@/components/Footer/Footer";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/context/theme-provider";
import Header from "@/components/Header";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "Talent Hub | Job Finder",
	description:
		"Talent Hub is a modern job posting app designed to connect employers with top talent and job seekers with their dream careers. This repository contains the source code for the JobFinder application, providing a seamless, user-friendly experience with advanced search features, personalized job recommendations.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					<div className="container mx-auto">
						<Header />
						{children}
						<Footer />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
