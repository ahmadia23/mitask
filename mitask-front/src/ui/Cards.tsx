"use client";

import React, { useState } from "react";
import * as stylex from "@stylexjs/stylex";
import Image from "next/image";
import { globals } from "./styles";

// const fadeIn = stylex.keyframes({
//   "0%": { opacity: 0 },
//   "100%": { opacity: 1 },
// });

// const fadeOut = stylex.keyframes({
//   "0%": { opacity: 1 },
//   "100%": { opacity: 0 },
// });

// Styles définis avec StyleX
const styles = stylex.create({
  card: {
    border: "1px solid #d3d3d3",
    position: "relative",
    overflow: "hidden",
    borderRadius: 8,
    width: 370,
    height: 370,

    ":hover": {
      cursor: "pointer",
    },
    ":hover img": {
      filter: "brightness(40%)",
      transform: "scale(1.1)",
    },
  },

  cardContent: {
    width: "100%",
    color: "white",
    fontWeight: "1000",
  },
  cardHeading: {
    textAlign: "center",
    position: "absolute",
    top: 140,
    width: "100%",
    marginTop: "0",
  },
  cardText: {
    padding: 16,
    position: "absolute",
    lineHeight: 1.4,
    top: 200,
    opacity: 0,
  },

  imgStyle: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "1.2s",
    filter: "brightness(70%)",
  },

  textReveal: {
    opacity: 1,
  },

  // animations: {
  //   animationName: fadeIn,
  //   animationDuration: "2s",
  // },
});

type CardProps = {
  title: string;
  content: string;
  image: string;
};

const Cards: React.FC<CardProps> = ({ title, content, image }) => {
  const [hovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      {...stylex.props(styles.card, styles.animations)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={image} alt="task-agenda" {...stylex.props(styles.imgStyle)} />
      <div {...stylex.props(styles.cardContent)}>
        <h3 {...stylex.props(styles.cardHeading)}>{title}</h3>
        <p
          {...stylex.props(
            styles.cardText,
            hovered && styles.textReveal,
            globals.p
          )}
        >
          {content}
        </p>
      </div>
    </div>
  );
};

export default Cards;
