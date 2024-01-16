"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faBook,
  faBurger,
  faCog,
  faHome,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import useDeviceType from "&/hooks/useDeviceType";
import { useClickAway } from "@uidotdev/usehooks";
import { usePathname } from "next/navigation";

interface NavItemProps {
  href: string;
  icon: IconProp;
  isActive: boolean;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({
  href,
  icon,
  children,
  isActive,
}) => {
  return (
    <Link
      href={href}
      className={`flex items-center p-2 mb-2 rounded w-full mx-4 gap-2 pl-4 border-border bg-background text-foreground ${
        isActive ? "bg-primary text-foreground-primary" : "hover:bg-primary"
      }`}
    >
      <FontAwesomeIcon icon={icon} className="mr-3" />
      {children}
    </Link>
  );
};

const SideNav: React.FC = () => {
  const isMobile = useDeviceType();
  const pathname = usePathname();
  const pathnames = pathname.split("/");
  console.log(pathnames);

  const [sidebarIsVisible, setSidebarIsVisible] = useState<boolean>(!isMobile);
  const ref = useClickAway<HTMLDivElement>(() => {
    if (isMobile) {
      setSidebarIsVisible(false);
    }
  });

  return (
    <>
      {sidebarIsVisible ? (
        <nav
          className="flex flex-col items-center w-64 bg-background h-screen py-32 shadow"
          ref={ref}
        >
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
        </nav>
      ) : (
        <button onClick={() => setSidebarIsVisible(true)} className="p-3">
          <FontAwesomeIcon
            icon={faBurger}
            fixedWidth={true}
            width={10}
            className="text-black"
          />
        </button>
      )}
    </>
  );
};

export default SideNav;
