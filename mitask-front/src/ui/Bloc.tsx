import React from "react";
import * as stylex from "@stylexjs/stylex";
import { StyleXStyles } from "@stylexjs/stylex";
import { globals } from "@/ui/styles";

interface Props {
  children: React.ReactNode;
  bgGrey?: boolean;
  style?: StyleXStyles;
  small?: boolean;
}

const Bloc: React.FC<Props> = ({ children, bgGrey, small, style }: Props) => {
  return (
    <div
      {...stylex.props(
        globals.blocSection,
        bgGrey && globals.background,
        small && globals.small,
        style
      )}
    >
      {children}
    </div>
  );
};

export default Bloc;
