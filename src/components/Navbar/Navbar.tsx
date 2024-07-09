import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import { BriefcaseIcon } from "lucide-react";
import ThemeSwitch from "../ThemeSwitch";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Navbar() {
  const { getPermissions } = getKindeServerSession();
  const permissions = await getPermissions();

  const routes = [
    {
      href: ROUTES.HOME,
      label: "Home",
      roles: ["post:job", "apply:job"],
      isPublic: true,
    },
    {
      href: ROUTES.ABOUT,
      label: "About",
      roles: ["post:job", "apply:job"],
      isPublic: true,
    },
    {
      href: ROUTES.POST_JOBS,
      label: "Post Job",
      roles: ["post:job"],
      isPublic: false,
    },
    {
      href: ROUTES.JOBS,
      label: "Find Jobs",
      roles: ["apply:job"],
      isPublic: false,
    },
  ];

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center w-full">
      <Link className="flex items-center justify-center" href={ROUTES.HOME}>
        <BriefcaseIcon className="h-6 w-6" />
        <span className="sr-only">Job Finder</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
        {routes.map((route) => {
          if (
            !route.roles.some((role) => permissions?.permissions.includes(role)) && !route.isPublic
          ) {
            return null;
          }
          return (
            <Link
              key={route.href}
              className="text-sm font-medium hover:underline underline-offset-4"
              href={route.href}
            >
              {route.label}
            </Link>
          );
        })}
        <ThemeSwitch />
      </nav>
    </header>
  );
}
