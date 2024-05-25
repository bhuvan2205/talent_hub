import { ReactNode } from "react";

export default function Layout({
	children,
	analytics,
}: {
	children: ReactNode;
	analytics: ReactNode;
}) {
	return (
		<main className="bg-gray-100 py-8 px-6 md:px-10 rounded-lg dark:bg-gray-800">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{analytics}
				{children}
			</div>
		</main>
	);
}