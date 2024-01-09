import * as stylex from "@stylexjs/stylex";

// Define color variables
export const colorVars = {
  primary: "#1a1a1a", // Dark color for primary text and elements
  secondary: "#d3d3d3", // Light gray for secondary text and elements
  accent: "#BF7C58", // Brown natural color for accents
};

export const spacing = {
  none: "0px",
  xsmall: "4px",
  small: "8px",
  medium: "12px",
  xmedium: "16px",
  large: "20px",
  xlarge: "32px",
  xxlarge: "48px",
  xxxlarge: "96px",
};

// Define font variables
export const fontVars = {
  fontFamily: "Open Sans', sans-serif;", // Font family
  fontSizeRegular: "16px", // Regular font size
  fontSizeLarge: "24px", // Large font size
  fontSizeXLarge: "32px", // Large font size
  fontSizeXXLarge: "48px", // Extra large font size
};

const MOBILE: "@media (max-width: 1000px)" = "@media (max-width: 1000px)";

// Usage in a component
export const globals = stylex.create({
  blocSection: {
    paddingHorizontal: 12,
    paddingVertical: 64,
    marginVertical: 0,
  },

  small: {
    marginHorizontal: 84,
  },

  spacingBetweenText: {
    gap: {
      default: 16,
      [MOBILE]: 8,
    },
  },
  spacingBetweenUIElement: {
    gap: {
      default: 32,
      [MOBILE]: 24,
    },
  },

  spacingBetweenImageAndText: {
    gap: {
      default: 24,
      [MOBILE]: 16,
    },
  },

  header: {
    color: colorVars.primary,
    marginTop: 24,
    fontSize: fontVars.fontSizeXXLarge,
    width: {
      default: 700,
      [MOBILE]: "100%",
    },
    textAlign: {
      [MOBILE]: "center",
    },
    padding: {
      [MOBILE]: 8,
    },
  },

  subHeader: {
    color: colorVars.accent,
    fontFamily: fontVars.fontFamily,
    fontSize: fontVars.fontSizeXLarge,
  },

  accentText: {
    color: colorVars.accent,
  },

  centered: {
    width: "100%",
    height: "100%",
    display: "flex",
    padding: 16,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: {
      [MOBILE]: "center",
    },
  },

  flexLayout: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center",
    width: "100%",
  },

  bodyText: {
    fontFamily: fontVars.fontFamily,
    fontSize: fontVars.fontSizeRegular,
  },
  button: {
    backgroundColor: colorVars.accent,
    fontWeight: "bold",
    padding: 8,
    borderRadius: 8,
    color: "white",
    width: 300,
    height: 60,
    fontSize: spacing.xmedium,
    border: "none",
    ":hover": {
      opacity: 0.8,
      cursor: "pointer",
    },
  },
  base: {
    fontFamily: fontVars.fontFamily,
    padding: 0,
    margin: 0,
    marginTop: "0.5em",
  },
  h1: {
    color: "#1a1a1a",
    fontFamily: "Montserrat, sans-serif",
    fontSize: fontVars.fontSizeXXLarge,
  },
  h2: {
    fontSize: fontVars.fontSizeXLarge,
  },
  h3: {
    fontSize: fontVars.fontSizeLarge,
    textAlign: "center",
  },
  h4: {
    fontSize: fontVars.fontSizeLarge,
    textAlign: "center",
  },
  h5: {
    fontSize: fontVars.fontSizeRegular,
    padding: 16,
  },

  blocText: {
    width: 500,
    lineHeight: 1.8,
  },

  p: {
    fontSize: fontVars.fontSizeRegular,
  },

  li: {
    marginInlineStart: "1.1em",
  },

  background: {
    backgroundImage: "url('/gradient-grey.jpg')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  // Other styles...
});

export const IMG_SHOWCASE_WIDTH = 484;
export const IMG_SHOWCASE_HEIGHT = 272;
export const IMG_ASPECT_RATIO = IMG_SHOWCASE_WIDTH / IMG_SHOWCASE_HEIGHT;
