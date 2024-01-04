import * as stylex from "@stylexjs/stylex";
import Image from "next/image";
import background from "/home-bg.jpg";
import { globals, useMDXComponents } from "./text-components";
import { fontVars, spacing } from "../globalTokens.stylex.ts";

const MOBILE: "@media (max-width: 750)" = "@media (max-width: 750)";

const styles = stylex.create({
  container: {
    height: "100%",
    display: "flex",
    width: "100%",
    alignItems: "center",
  },
  bgImage: {
    minHeight: "100%",
    minWidth: 1024,
    width: "100%",
    position: "fixed",
    zIndex: -1,
    top: 0,
    left: {
      default: 0,
      [MOBILE]: "50%",
    },
    marginLeft: {
      [MOBILE]: -512,
    },
  },
  homeText: {
    width: 500,
    textAlign: "center",
  },
});

export default function Home() {
  const { H1, H2 } = useMDXComponents();
  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.homeText)}>
        <h1 {...stylex.props(globals.header)}>
          Simplifiez votre Travail, Maximisez votre Productivité
        </h1>
        <h2 {...stylex.props(globals.subHeader)}>
          Découvrez une gestion de tâches révolutionnée avec MiTask
        </h2>
      </div>
      <img src={"/home-bg.jpg"} alt="task" {...stylex.props(styles.bgImage)} />
    </div>
  );
}
