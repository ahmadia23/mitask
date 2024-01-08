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
      "Travaillez en harmonie, où que vous soyez. [Nom de la Plateforme] facilite la collaboration en temps réel, permettant à chaque membre de l'équipe de rester connecté et informé. Partagez des tâches, donnez des feedbacks instantanés et gardez le cap sur vos objectifs communs.",
  },
  {
    id: 2,
    title: "Organisation Intuitive",
    content:
      "Dites adieu au chaos des projets mal gérés. Notre interface épurée et nos fonctionnalités intelligentes vous permettent d'organiser vos tâches avec une facilité déconcertante. Visualisez vos échéances, priorisez vos actions et restez maître de votre temps.",
  },
  {
    id: 3,
    title: "Des Insights pour Avancer",
    content:
      "Mesurez et optimisez votre productivité. [Nom de la Plateforme] transforme vos données en insights pertinents. Suivez vos progrès, identifiez les goulets d'étranglement et ajustez votre stratégie pour une efficacité maximale.",
  },
  // Add more cards as needed
];

const styles = stylex.create({
  cardsContainer: {
    gap: 32,
    marginVertical: 32,
  },
});

const CardsSection = () => {
  return (
    <Bloc bgGrey>
      <div
        {...stylex.props(globals.flexLayout, styles.cardsContainer)}
        id="mitask_services"
      >
        {cardsData.map((data) => {
          return (
            <Cards
              key={data.id}
              title={data.title}
              content={data.content}
            ></Cards>
          );
        })}
      </div>
    </Bloc>
  );
};

export default CardsSection;
