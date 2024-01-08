import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import Image from "next/image";
import { IMG_SHOWCASE_HEIGHT, IMG_SHOWCASE_WIDTH } from "./styles";

// Styles définis avec StyleX
const styles = stylex.create({
  card: {
    border: "1px solid #d3d3d3",
    borderRadius: "8px",
    overflow: "hidden",
    width: "300px",
  },
  cardImage: {
    height: "200px",
    backgroundColor: "#f0f0f0",
    // Ajoutez des styles d'image de fond ici
  },
  cardContent: {
    padding: "16px",
  },
  cardHeading: {
    marginTop: "0",
    color: "#1a1a1a",
  },
  cardText: {
    color: "#333",
    fontSize: "14px",
  },
});

type CardProps = {
  title: string;
  content: string;
};

const Cards: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div {...stylex.props(styles.card)}>
      <h3 {...stylex.props(styles.cardHeading)}>{title}</h3>
      <div {...stylex.props(styles.cardImage)}>
        <Image
          src={"/task-agenda.jpg"}
          alt="task-agenda"
          width={IMG_SHOWCASE_WIDTH}
          height={IMG_SHOWCASE_HEIGHT}
        />
      </div>
      <div {...stylex.props(styles.cardContent)}>
        <p {...stylex.props(styles.cardText)}>{content}</p>
      </div>
    </div>
  );
};

export default Cards;
