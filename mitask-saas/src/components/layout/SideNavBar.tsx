"use client";

import React, { useEffect, useState } from "react";
import {
  faBook,
  faCog,
  faHome,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import useDeviceType from "&/hooks/useDeviceType";
import { useClickAway } from "@uidotdev/usehooks";
import { usePathname } from "next/navigation";
import NavItem from "./NavItem";
import { Button } from "../ui/button";
import Link from "next/link";
import { showSidebar } from "&/lib/utils";

const SideNavBar: React.FC = () => {
  const isMobile = useDeviceType();
  const pathname = usePathname();
  const pathnames = pathname.split("/");

  const [sidebarIsVisible, setSidebarIsVisible] = useState<boolean>(false);
  const ref = useClickAway<HTMLDivElement>(() => {
    if (isMobile) {
      setSidebarIsVisible(!sidebarIsVisible);
    }
  });

  console.log(showSidebar(pathname));

  return (
    <div
      className="top-10 z-10 group cursor-pointer fixed"
      onMouseOver={() => {
        setSidebarIsVisible(showSidebar(pathname));
      }}
      onMouseLeave={() => setSidebarIsVisible(false)}
    >
      <nav
        className={`bg-background flex flex-col items-center w-64  py-32 h-screen ${
          isMobile
            ? ""
            : "opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300  bg-gray-100"
        } " ${isMobile && "justify-around"}`}
        ref={ref}
      >
        {isMobile && (
          <div className="w-full">
            <h1 className="text-lg font-bold mb-8 ml-8">Gérer mes tâches</h1>
            <NavItem
              href="/home"
              icon={faHome}
              isActive={pathnames.includes("home")}
            >
              Home
            </NavItem>
            <NavItem
              href="/tasks"
              icon={faTasks}
              isActive={pathnames.includes("tasks")}
            >
              Mes tâches
            </NavItem>
            <NavItem
              href="/resources"
              icon={faBook}
              isActive={pathnames.includes("resources")}
            >
              Ressources
            </NavItem>
            <NavItem
              href="/settings"
              icon={faCog}
              isActive={pathnames.includes("settings")}
            >
              Paramètres
            </NavItem>
          </div>
        )}
        <div className="w-full flex flex-col gap-8">
          <div>
            <h1 className="text-lg font-bold mb-8 ml-8">Filtres</h1>
            <NavItem href="/#" isActive={false}>
              À finir aujourd'hui
            </NavItem>
            <NavItem href="/#" isActive={false}>
              Pour la semaine
            </NavItem>
            <NavItem href="/#" isActive={false}>
              En retard
            </NavItem>
          </div>
          <Link href={"/tasks/new"} className="self-center">
            <Button>Créer une tâche</Button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default SideNavBar;
