import { IconProps } from "phosphor-react";
import { HTMLAttributes, InputHTMLAttributes, ReactElement, ReactNode } from "react";

export interface ElementStyledType extends HTMLAttributes<any> {
  children: ReactNode;
  icon?: ReactElement<IconProps>;
  classNameChildren?: string;
}