import { IconProps } from "phosphor-react";
import { ReactElement, ReactNode } from "react";

export interface ElementStyledType {
  children: ReactNode;
  icon?: ReactElement<IconProps>;
  classNameElement?: string;
  classNameChildren?: string;
}