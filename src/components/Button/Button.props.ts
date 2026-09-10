import type {ButtonHTMLAttributes, ReactNode} from "react";
import {ButtonAppearance} from "./ButtonAppearance.ts";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    appearance?: ButtonAppearance;
}