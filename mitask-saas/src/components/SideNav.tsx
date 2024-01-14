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

interface NavItemProps {
  href: string;
  icon: IconProp;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon, children }) => {
  // Your logic to determine if the link is active
  const isActive = true;

  return (
    <Link
      href={href}
      className={`flex items-center p-2 mb-2 rounded w-full mx-4 gap-2 pl-4 ${
        isActive ? "bg-gray-700 text-white" : "hover:bg-gray-200 text-black"
      }`}
    >
      <FontAwesomeIcon icon={icon} className="mr-3" />
      {children}
    </Link>
  );
};

const SideNav: React.FC = () => {
  const isMobile = useDeviceType();
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
          className="flex flex-col items-center w-64 bg-gray-600 h-screen py-32 shadow"
          ref={ref}
        >
          <NavItem href="/" icon={faHome}>
            Home
          </NavItem>
          <NavItem href="/tasks" icon={faTasks}>
            Mes tâches
          </NavItem>
          <NavItem href="/resources" icon={faBook}>
            Ressources
          </NavItem>
          <NavItem href="/settings" icon={faCog}>
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
