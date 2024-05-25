import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function isLoggedIn() {
	const { isAuthenticated } = getKindeServerSession();
	console.log("🚀 ~ authUser ~ isAuthenticated:", await isAuthenticated());

	if (!(await isAuthenticated())) {
		redirect("/api/auth/login");
	}
}
