import * as stylex from "@stylexjs/stylex";
import background from "/home-bg.jpg";

// Define color variables
export const colorVars = stylex.defineVars({
  primary: "#1a1a1a", // Dark color for primary text and elements
  secondary: "#d3d3d3", // Light gray for secondary text and elements
  accent: "#a52a2a", // Brown natural color for accents
});

// Define spacing variables (multiples of 8px)
export const spacingVars = stylex.defineVars({
  xsmall: "8px", // Extra small spacing
  small: "16px", // Small spacing
  medium: "24px", // Medium spacing
  large: "32px", // Large spacing
  xlarge: "40px", // Extra large spacing
});

// Define font variables
export const fontVars = stylex.defineVars({
  fontFamily: "Bodoni Moda", // Font family
  fontSizeRegular: "16px", // Regular font size
  fontSizeLarge: "24px", // Large font size
  fontSizeXLarge: "32px", // Extra large font size
});

// Usage in a component
const globals = stylex.create({
  header: {
    color: colorVars.primary,
    fontFamily: fontVars.fontFamily,
    fontSize: fontVars.fontSizeXLarge,
  },
  bodyText: {
    color: colorVars.secondary,
    fontFamily: fontVars.fontFamily,
    fontSize: fontVars.fontSizeRegular,
  },
  button: {
    backgroundColor: colorVars.accent,
    padding: spacingVars.small,
  },
  // Other styles...
});
