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
  fontSizeXLarge: "32px", // Extra large font size
};

const styles = stylex.create({
  base: {
    fontFamily: fontVars.fontFamily,
    padding: 0,
    margin: 0,
    marginTop: "0.5em",
  },
  h1: {
    color: "#1a1a1a",
    fontFamily: "Montserrat, sans-serif",
    fontSize: 32,
  },
  h2: {
    fontSize: fontVars.fontSizeLarge,
  },
  h3: {
    fontSize: fontVars.fontSizeRegular,
  },
  p: {
    marginTop: "1em",
    fontSize: fontVars.fontSizeRegular,
  },
  li: {
    marginInlineStart: "1.1em",
  },
});

function H1(props: any) {
  return <h1 {...props} {...stylex.props(styles.base, styles.h1)} />;
}

function H2(props: any) {
  return <h2 {...props} {...stylex.props(styles.base, styles.h2)} />;
}

function H3(props: any) {
  return <h3 {...props} {...stylex.props(styles.base, styles.h3)} />;
}

function P(props: any) {
  return <p {...props} {...stylex.props(styles.base, styles.p)} />;
}

function Ul(props: any) {
  return <ul {...props} {...stylex.props(styles.base, styles.p)} />;
}
function Ol(props: any) {
  return <ol {...props} {...stylex.props(styles.base, styles.p)} />;
}

function Li(props: any) {
  return <li {...props} {...stylex.props(styles.base, styles.p, styles.li)} />;
}

// Usage in a component
export const globals = stylex.create({
  header: {
    color: colorVars.primary,
    fontFamily: "Montserrat, sans-serif",
    fontSize: fontVars.fontSizeXLarge,
  },
  subHeader: {
    color: colorVars.accent,
    fontFamily: fontVars.fontFamily,
    fontSize: fontVars.fontSizeLarge,
  },

  bodyText: {
    color: colorVars.secondary,
    fontFamily: fontVars.fontFamily,
    fontSize: fontVars.fontSizeRegular,
  },
  button: {
    backgroundColor: colorVars.accent,
    padding: 24,
  },
  // Other styles...
});

export function useMDXComponents() {
  return {
    H1,
    H2,
    H3,
    P,
    Ul,
    Ol,
    Li,
  };
}
