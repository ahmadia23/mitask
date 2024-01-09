import "./globals.css";

import type { Metadata } from "next";
import * as stylex from "@stylexjs/stylex";
import Navbar from "@/ui/Navbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...stylex.props(styles.html, styles.reset)}>
      <body {...stylex.props(styles.reset, styles.body)}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

const DARK = "@media (prefers-color-scheme: dark)";

const styles = stylex.create({
  html: {
    colorScheme: "light dark",
    height: "100vh",
    padding: 0,
    margin: 0,
  },
  reset: {
    minHeight: "100%",
    margin: 0,
    padding: 0,
  },
  body: {
    fontFamily: stylex.firstThatWorks("Lato", "Open Sans", "sans-serif"),
    height: "100vh",
  },
});
