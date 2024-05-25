import React from "react";

export default async function page({
	params: { jobId },
}: {
	params: { jobId: string };
}) {
	return <div>page {jobId}</div>;
}
