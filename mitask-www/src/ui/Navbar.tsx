"use client";
import React, { useEffect, useState } from "react";
import * as stylex from "@stylexjs/stylex";
import { Link } from "react-scroll";
import { fontVars, globals } from "./styles";
import useScrollStatus from "@/hooks/useScrollStatus";

const DARK = "@media (prefers-color-scheme: dark)";

const styles = stylex.create({
  navbar: {
    height: 80,
    color: "white",
    // Slightly higher navbar
    position: "fixed",
    top: 0,
    backgroundColor: {
      default: "#161616",
      [DARK]: "linear-gradient(to bottom, rgb(20, 22, 27), black)",
    },

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingInline: 32,
    width: "100%",
    zIndex: 100,
  },

  navbarScrolled: {
    opacity: 0.9, // Reduced opacity when scrolled
    zIndex: 100, // Higher z-index to be above other content
  },
  linkContainer: {
    display: "flex",
    justifyContent: "flex-end",
    gap: 32,
    width: "100%",
  },
  navLink: {
    fontWeight: "bold",
    ":hover": {
      cursor: "pointer",
    },
  },
  // Add styles for links if needed
});

const Navbar: React.FC = () => {
  const scrolling = useScrollStatus();

  return (
    <nav
      {...stylex.props(
        styles.navbar,
        scrolling.status && styles.navbarScrolled
      )}
    >
      <div>
        <img src="/logo.png" alt="Logo" style={{ width: "100px" }} />
      </div>
      <div {...stylex.props(styles.linkContainer)}>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          {...stylex.props(styles.navLink)}
        >
          Acceuil
        </Link>
        <Link
          activeClass="active"
          to="avantages"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          {...stylex.props(styles.navLink)}
        >
          Avantages
        </Link>
        <Link
          activeClass="active"
          to="mitask_services"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          {...stylex.props(styles.navLink)}
        >
          Nos Services
        </Link>
        <Link
          activeClass="active"
          to="why_mitask"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          {...stylex.props(styles.navLink)}
        >
          Pourquoi Nous ?
        </Link>
        <Link
          activeClass="active"
          to="start_section"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          {...stylex.props(styles.navLink)}
        >
          Commencer
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
