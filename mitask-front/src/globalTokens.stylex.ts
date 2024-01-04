import * as stylex from "@stylexjs/stylex";
import background from "/home-bg.jpg";

// Define color variables
export const colorVars = stylex.defineVars({
  primary: "#1a1a1a", // Dark color for primary text and elements
  secondary: "#d3d3d3", // Light gray for secondary text and elements
  accent: "#a52a2a", // Brown natural color for accents
});

export const spacing = stylex.defineVars({
  none: "0px",
  xsmall: "4px",
  small: "8px",
  medium: "12px",
  large: "20px",
  xlarge: "32px",
  xxlarge: "48px",
  xxxlarge: "96px",
});
// Define font variables

export const fontVars = stylex.defineVars({
  fontFamily: "Open Sans', sans-serif;", // Font family
  fontSizeRegular: "16px", // Regular font size
  fontSizeLarge: "24px", // Large font size
  fontSizeXLarge: "32px", // Extra large font size
});

// export const mobileTest = stylex.defineVars({
//   left: {
//     default: "0px",
//     [MOBILE]: "50%",
//   },
//   marginLeft: {
//     default: "0px",
//     [MOBILE]: "-512px",
//   },
// });
