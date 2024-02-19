import {
  faHome,
  faTasks,
  faBook,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import NavItem from "./SideNavigation/NavItem";
import { usePathname } from "next/navigation";

const MobileSidebarContent = () => {
  const pathname = usePathname();
  const pathnames = pathname.split("/");

  return (
    <div className="w-full">
      <h1 className="text-lg font-bold mb-8 ml-8">Gérer mes tâches</h1>
      <NavItem href="/home" icon={faHome} isActive={pathnames.includes("home")}>
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
  );
};

export default MobileSidebarContent;
