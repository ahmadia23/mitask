import React from "react";
import Bloc from "./Bloc";
import Cards from "./Cards";
import * as stylex from "@stylexjs/stylex";
import { globals } from "./styles";

const cardsData = [
  {
    id: 1,
    title: "Collaboration Transparente",
    content:
      "Travaillez en harmonie, où que vous soyez. MiTask facilite la collaboration en temps réel, permettant à chaque membre de l'équipe de rester connecté et informé. Partagez des tâches, donnez des feedbacks instantanés et gardez le cap sur vos objectifs communs.",
    image: "/work-home.jpg",
  },
  {
    id: 2,
    title: "Organisation Intuitive",
    content:
      "Dites adieu au chaos des projets mal gérés. Notre interface épurée et nos fonctionnalités intelligentes vous permettent d'organiser vos tâches avec une facilité déconcertante. Visualisez vos échéances, priorisez vos actions et restez maître de votre temps.",
    image: "/work-home-code.jpg",
  },
  {
    id: 3,
    title: "Des Insights pour Avancer",
    content:
      "Mesurez et optimisez votre productivité. MiTask transforme vos données en insights pertinents. Suivez vos progrès, identifiez les goulets d'étranglement et ajustez votre stratégie pour une efficacité maximale.",
    image: "/work-home.jpg",
  },
  // Add more cards as needed
];

const styles = stylex.create({
  cardsContainer: {
    gap: 32,
    marginVertical: 32,
  },

  figure: {
    display: "grid",
    borderRadius: "1rem",
    overflow: "hidden",
    cursor: "pointer",
    ":hover figcaption": {
      "--_i": "0%",
    },
    ":hover img": {
      transform: "scale(1.2)",
    },
  },
  figureChild: {
    gridArea: "1/1",
    transition: ".4s",
  },
  figcaption: {
    display: "grid",
    alignItems: "end",
    fontFamily: "sans-serif",
    fontSize: "2.3rem",
    fontWeight: "bold",
    color: "#0000",
    padding: ".75rem",
    background: "var(--c, #0009)",
    clipPath: "inset(0 var(--_i,100%) 0 0)",
    WebkitMask: `linear-gradient(#000 0 0), linear-gradient(#000 0 0)`,
    WebkitMaskComposite: "xor",
    WebkitMaskClip: "text, padding-box",
    margin: "-1px",
    "@supports not (-webkit-mask-clip: text)": {
      WebkitMask: "none",
      color: "#fff",
    },
  },
});

const CardsSection = () => {
  return (
    <Bloc id="mitask_services">
      <div {...stylex.props(globals.flexLayout, styles.cardsContainer)}>
        {cardsData.map((data) => {
          return (
            <Cards
              key={data.id}
              title={data.title}
              content={data.content}
              image={data.image}
            ></Cards>
          );
        })}
      </div>
    </Bloc>
  );
};

export default CardsSection;
