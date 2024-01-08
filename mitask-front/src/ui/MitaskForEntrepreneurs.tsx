import React from "react";
import Bloc from "./Bloc";
import * as stylex from "@stylexjs/stylex";
import { IMG_SHOWCASE_HEIGHT, IMG_SHOWCASE_WIDTH, globals } from "./styles";
import Image from "next/image";

const styles = stylex.create({
  homeText: {
    paddingVertical: 300,
    paddingHorizontal: 16,
    flex: 1,
    maxWidth: 600,
  },

  imageAndText: {
    padding: 32,
    gap: 32,
  },
});

const MitaskForEntrepreneurs: React.FC = () => {
  return (
    <Bloc style={globals.flexLayout}>
      <h5 {...stylex.props(globals.h5, styles.imageAndText, globals.blocText)}>
        Vivez l'expérience{" "}
        <span {...stylex.props(globals.accentText)}>MiTask</span> dès
        aujourd'hui. Inscrivez-vous pour un essai gratuit et découvrez comment
        nous pouvons révolutionner votre gestion de tâches. Rejoignez la
        communauté des innovateurs et commencez votre voyage vers une
        productivité sans limite.
      </h5>
      <Image
        src={"/innovateur.jpg"}
        alt="task-agenda"
        width={IMG_SHOWCASE_WIDTH}
        height={IMG_SHOWCASE_HEIGHT}
      />
    </Bloc>
  );
};

export default MitaskForEntrepreneurs;
