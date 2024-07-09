import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { AppWindow, LogOut, User } from "lucide-react";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
} from "../ui/dropdown-menu";

export default async function Profile() {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const isLoggedIn = await isAuthenticated();
  const user = await getUser();

  return (
    <>
      {isLoggedIn ? (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src={user?.picture as string}
                  alt={user?.given_name as string}
                />
                <AvatarFallback>
                  {user?.given_name?.at(0)?.toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link href={ROUTES.DASHBOARD}>Dashboard</Link>
                  <DropdownMenuShortcut>
                    <User />
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={ROUTES.ABOUT}>Applied Jobs</Link>
                  <DropdownMenuShortcut>
                    <AppWindow />
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogoutLink className="w-full font-semibold">Log out</LogoutLink>
                <DropdownMenuShortcut>
                  <LogOut />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      ) : (
        <Button asChild>
          <LoginLink>Sign in</LoginLink>
        </Button>
      )}
    </>
  );
}
