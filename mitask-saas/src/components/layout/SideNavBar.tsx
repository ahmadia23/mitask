"use client";

import React, { useEffect, useState } from "react";
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
import NavItem from "./NavItem";
import { sidebarVisibility } from "&/lib/utils";

const SideNavBar: React.FC = () => {
  const isMobile = useDeviceType();
  const pathname = usePathname();
  const pathnames = pathname.split("/");

  const [sidebarIsVisible, setSidebarIsVisible] = useState<boolean>(!isMobile);
  const ref = useClickAway<HTMLDivElement>(() => {
    if (isMobile) {
      setSidebarIsVisible(!sidebarIsVisible);
    }
  });

  useEffect(() => {
    if (!isMobile) {
      setSidebarIsVisible(true);
    } else {
      setSidebarIsVisible(false);
    }
  }, [isMobile]);

  return (
    isMobile && (
      <div className="flex flex-col z-10">
        {sidebarIsVisible ? (
          <nav
            className="flex flex-col items-center w-64 bg-background py-32 shadow justify-around h-screen"
            ref={ref}
          >
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

            <div className="w-full">
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
      </div>
    )
  );
};

export default SideNavBar;
