import isLoggedIn from "@/lib/auth";

export default async function Page() {
	await isLoggedIn();
	return <div>Dashboard page</div>;
}
