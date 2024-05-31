import { Button } from "@/components/ui/button";
import React from "react";
import { useFormStatus } from "react-dom";

export default function PostFormBtn() {
	const { pending } = useFormStatus();

	return (
		<Button className="w-full" type="submit" disabled={pending}>
			{pending ? "..." : "Create job"}
		</Button>
	);
}
