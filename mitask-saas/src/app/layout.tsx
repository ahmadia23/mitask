import type { Metadata } from "next";
import "&/styles/globals.css";
import { Pathname } from "./pathname";
import Navigation from "&/components/SideNavBar";
import { Header } from "&/components/layout/Header";
import SideNavBar from "&/components/SideNavBar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <html lang="en">
      <Pathname>
        <Header />
        <div
          id="blurryscroll"
          aria-hidden="true"
          className="fixed top-0 left-0 w-full h-16 overflow-hidden filter blur-sm"
        >
          {/* Duplicate of the content to be blurred */}
        </div>
        <SideNavBar />
        {children}
      </Pathname>
    </html>
  );
}
