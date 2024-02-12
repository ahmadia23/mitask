"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Package2Icon, SearchIcon } from "../ui/test";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { funnelPages } from "&/lib/utils";

export const Header = () => {
  const pathname = usePathname();

  return (
    !funnelPages.includes(pathname) && (
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6 fixed w-full z-20 bg-gray-100 border">
        <nav className="flex-col invisible h-full gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 md:visible ">
          <Link
            className="flex visible items-center h-full gap-2 text-lg font-semibold md:text-base"
            href="/home"
          >
            <Package2Icon className="w-6 h-full" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Link
            className={`${
              pathname === "/tasks" ? "font-bold" : "text-gray-500"
            }`}
            href="/tasks"
          >
            Tâches
          </Link>
          <Link
            className="text-gray-200 dark:text-gray-400 pointer-events-none w-32"
            href="#"
          >
            Calendrier(À venir)
          </Link>
          <Link
            className={`${
              pathname === "/resources" ? "font-bold" : "text-gray-500"
            }`}
            href="/resources"
          >
            Ressources
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="/settings">
            Paramètres
          </Link>
        </nav>

        <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="flex-1 ml-auto sm:flex-initial">
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                placeholder="Search tasks..."
                type="search"
              />
            </div>
          </form>
          <Link href={"/tasks/new"} className="self-center">
            <Button>
              <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
            </Button>
          </Link>
          <Button className="rounded-full" size="icon" variant="ghost">
            <img
              alt="Avatar"
              className="rounded-full"
              height="32"
              src="/placeholder.svg"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </header>
    )
  );
};
