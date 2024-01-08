"use client";
import React, { useEffect, useState } from "react";
import * as stylex from "@stylexjs/stylex";
import { Link } from "react-scroll";
import { fontVars } from "./styles";

const DARK = "@media (prefers-color-scheme: dark)";

const styles = stylex.create({
  navbar: {
    height: 80,
    // Slightly higher navbar
    position: "sticky",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    zIndex: 20,
    alignItems: "center",
    paddingInline: 32,
    width: "100%",
    backgroundColor: {
      default: "linear-gradient(to bottom, rgb(20, 22, 27), black)",
      [DARK]: "linear-gradient(to bottom, rgb(20, 22, 27), black)",
    },
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

const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  let lastScrollY = window.scrollY;
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY !== lastScrollY);
      lastScrollY = window.scrollY;
      setTimeout(() => setIsScrolling(false), 1500); // Delay to reset scrolling state
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [window.scrollY]);

  return (
    <nav {...stylex.props(styles.navbar, isScrolling && styles.navbarScrolled)}>
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
          to="section3"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          {...stylex.props(styles.navLink)}
        >
          Commencer
        </Link>
        {/* Add more links as needed */}
      </div>
    </nav>
  );
};

export default Navbar;
