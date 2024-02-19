"use client";

import React from "react";

import useDeviceType from "&/hooks/useDeviceType";
import { usePathname } from "next/navigation";
import { SideBarContent } from "./SideBarContent";

const SideNavBar: React.FC = () => {
  const isMobile = useDeviceType();
  const pathname = usePathname();
  const pathnames = pathname.split("/");

  return !isMobile ? (
    <div className="top-10 z-10 group cursor-pointer fixed">
      <nav
        className={`bg-background flex flex-col items-center w-10 py-32 h-screen ${
          isMobile
            ? ""
            : "opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300  bg-gray-100 group-hover:w-64"
        } " ${isMobile && "justify-around"}`}
      >
        <SideBarContent></SideBarContent>
      </nav>
    </div>
  ) : null;
};

export default SideNavBar;
