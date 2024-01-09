import React from "react";
import * as stylex from "@stylexjs/stylex";
import { StyleXStyles } from "@stylexjs/stylex";
import { globals } from "@/ui/styles";

interface Props {
  children: React.ReactNode;
  style?: StyleXStyles;
  small?: boolean;
  id?: string;
}

const Bloc: React.FC<Props> = ({ children, small, style, id }: Props) => {
  return (
    <div
      {...stylex.props(globals.blocSection, small && globals.small, style)}
      id={id}
    >
      {children}
    </div>
  );
};

export default Bloc;
