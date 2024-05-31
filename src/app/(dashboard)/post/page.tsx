import prisma from "@/config/db";
import { ROUTES } from "@/constants/routes";
import isLoggedIn from "@/lib/auth";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import PostForm from "./_components/PostForm";

export default async function Page() {
	await isLoggedIn();
	const { getPermission } = getKindeServerSession();
	const hasPermission = await getPermission("post:job");
	if (!hasPermission?.isGranted) {
		redirect(ROUTES.DASHBOARD);
	}

	const companies = await prisma.company.findMany();

	return (
		<div className="col-span-2 md:col-span-2">
			<div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
				<h1 className="text-2xl font-bold mb-4">Create Job</h1>
				<PostForm companies={companies} />
			</div>
		</div>
	);
}
