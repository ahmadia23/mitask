import { IMG_SHOWCASE_HEIGHT, IMG_SHOWCASE_WIDTH, globals } from "@/ui/styles";
import * as stylex from "@stylexjs/stylex";
import Image from "next/image";
import React from "react";
import Bloc from "../Bloc";

const styles = stylex.create({
  imageAndText: {
    padding: 32,
    gap: 32,
  },
});

const AvantagesMitask: React.FC = () => {
  return (
    <Bloc id="avantages">
      <div
        {...stylex.props(globals.centered, globals.spacingBetweenImageAndText)}
      >
        <h3 {...stylex.props(globals.h3)}>
          Bienvenue dans l'ère de l'efficacité et de la clarté
          organisationnelle.
        </h3>
        <div {...stylex.props(globals.flexLayout, styles.imageAndText)}>
          <h5 {...stylex.props(globals.h5, globals.blocText)}>
            Avec <span {...stylex.props(globals.accentText)}>MiTask</span> ,
            transformez la façon dont vous gérez vos projets et vos tâches
            quotidiennes. Conçu pour les professionnels dynamiques et les
            équipes innovantes, notre outil SaaS allie simplicité d'utilisation
            à une puissance fonctionnelle inégalée. Gérez vos tâches, collaborez
            avec aisance et atteignez vos objectifs plus rapidement que jamais.
          </h5>
          <Image
            src={"/task-agenda.jpg"}
            alt="task-agenda"
            width={IMG_SHOWCASE_WIDTH}
            height={IMG_SHOWCASE_HEIGHT}
          />
        </div>
      </div>
    </Bloc>
  );
};

export default AvantagesMitask;
