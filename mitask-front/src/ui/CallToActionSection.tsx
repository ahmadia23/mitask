"use client";

import React from "react";
import Bloc from "./Bloc";
import * as stylex from "@stylexjs/stylex";
import { globals } from "./styles";

const styles = stylex.create({
  callToActionText: {
    textAlign: "center",
    width: "100%",
  },

  centerBloc: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
});

const CallToActionSection: React.FC = () => {
  return (
    <Bloc bgGrey>
      <div
        {...stylex.props(styles.centerBloc, globals.spacingBetweenUIElement)}
      >
        <h4
          {...stylex.props(
            globals.h4,
            globals.blocText,
            styles.callToActionText
          )}
        >
          Rejoignez la communauté des innovateurs et commencez votre voyage vers
          une productivité sans limite.
        </h4>
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
          Demander une démo
        </button>
      </div>
    </Bloc>
  );
};

export default CallToActionSection;
