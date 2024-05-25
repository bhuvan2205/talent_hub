import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
} from "@/components/ui/popover";
import { User2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Profile() {
	const { getUser, isAuthenticated } = getKindeServerSession();
	const isLoggedIn = await isAuthenticated();
	const user = await getUser();

	return (
		<>
			{isLoggedIn && (
				<Popover>
					<PopoverTrigger asChild>
						<Avatar className="cursor-pointer">
							<AvatarImage
								src={user?.picture as string}
								alt={user?.given_name as string}
							/>
							<AvatarFallback>
								{user?.given_name?.at(0)?.toUpperCase()}
							</AvatarFallback>
						</Avatar>
					</PopoverTrigger>
					<PopoverContent className="w-fit px-6">
						<div>
							<Link
								href={ROUTES.DASBOARD}
								className="py-2 flex items-center gap-2">
								<User2 />
								<span>{user?.given_name}</span>
							</Link>
						</div>
						<div className="py-2">
							<Badge className="cursor-pointer w-full">
								<LogoutLink className="text-center w-full">Log out</LogoutLink>
							</Badge>
						</div>
					</PopoverContent>
				</Popover>
			)}
		</>
	);
}
