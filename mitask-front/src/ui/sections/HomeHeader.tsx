"use client";

import * as stylex from "@stylexjs/stylex";
import { globals, spacing } from "../styles.ts";
import useWindowSize from "@/hooks/useWindowsSize.ts";

const styles = stylex.create({
  bg: {
    backgroundImage: "url('/cofee-task.jpg')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
  },

  greyBackground: {
    backgroundImage: "url('/gradient-grey.jpg')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },

  homeText: {
    paddingHorizontal: 16,
    flex: 1,
  },
  homeSubText: {
    fontSize: 24,
  },
});

const HomeHeader: React.FC = () => {
  const { isMobile } = useWindowSize();

  return (
    <div
      {...stylex.props(
        isMobile ? styles.greyBackground : styles.bg,
        styles.homeText,
        globals.centered,
        globals.spacingBetweenText
      )}
      id="home"
    >
      <h1 {...stylex.props(globals.header)}>
        Simplifiez votre Travail, Maximisez votre Productivité
      </h1>
      <p {...stylex.props(globals.p, styles.homeSubText)}>
        Découvrez une gestion de tâches révolutionnée avec{" "}
        <span {...stylex.props(globals.accentText)}>MiTask</span>
      </p>
      <button
        onClick={() =>
          window.scrollTo({
            top: 1000,
            left: 0,
            behavior: "smooth",
          })
        }
        {...stylex.props(globals.button)}
      >
        En savoir plus
      </button>
    </div>
  );
};

export default HomeHeader;
