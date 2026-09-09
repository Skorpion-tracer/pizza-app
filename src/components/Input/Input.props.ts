import {HTMLProps} from "react";

export interface InputProps extends HTMLProps<HTMLInputElement> {
    title?: string;
    visiblePasswordChanger?: boolean;
}