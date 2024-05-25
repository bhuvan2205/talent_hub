import { ReactNode } from "react";

export default function Layout({
	children,
	analytics,
}: {
	children: ReactNode;
	analytics: ReactNode;
}) {
	return (
		<main className="bg-gray-100 py-8 md:py-12 lg:py-16 px-6 md:px-10 rounded-lg dark:bg-gray-800">
			<div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
				{analytics}
				{children}
			</div>
		</main>
	);
}