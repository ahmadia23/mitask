"use client";

import { usePathname } from "next/navigation";

export function Pathname({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const patnames = pathname.split("/");

  return (
    <body className={`flex ${patnames.length > 2 ? "" : "gap-8"} h-screen`}>
      {children}
    </body>
  );
}
