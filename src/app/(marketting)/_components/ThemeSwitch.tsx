"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
	const { setTheme, theme } = useTheme();
	return (
		<>
			<Button
				variant="ghost"
				className="p-0"
				size="icon"
				onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
				{theme === "light" ? (
					<SunIcon className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
				) : (
					<MoonIcon className="h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
				)}
			</Button>
		</>
	);
}
