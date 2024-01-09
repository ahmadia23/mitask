import React from "react";
import Bloc from "../Bloc";
import Image from "next/image";
import { IMG_SHOWCASE_HEIGHT, IMG_SHOWCASE_WIDTH, globals } from "../styles";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  imageAndText: {
    padding: 32,
    gap: 32,
  },
});

const ProductPlusValue: React.FC = () => {
  return (
    <Bloc id="why_mitask">
      <div {...stylex.props(globals.flexLayout, styles.imageAndText)}>
        <Image
          src={"/happy-business.jpg"}
          alt="task-agenda"
          width={IMG_SHOWCASE_WIDTH}
          height={IMG_SHOWCASE_HEIGHT}
        />
        <h5 {...stylex.props(globals.h5, globals.blocText)}>
          Dans un monde où chaque seconde compte,{" "}
          <span {...stylex.props(globals.accentText)}>MiTask</span> est plus
          qu'un simple outil de gestion de tâches. C'est un catalyseur de
          succès. Que vous soyez une start-up en pleine croissance ou une
          entreprise établie, notre plateforme s'adapte à vos besoins uniques,
          vous propulsant vers de nouveaux sommets de productivité. Éliminez les
          obstacles, concentrez-vous sur ce qui compte vraiment et transformez
          vos ambitions en réalités.
        </h5>
      </div>

      <div {...stylex.props(globals.flexLayout, styles.imageAndText)}>
        <h5
          {...stylex.props(globals.h5, styles.imageAndText, globals.blocText)}
        >
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
      </div>
    </Bloc>
  );
};

export default ProductPlusValue;
