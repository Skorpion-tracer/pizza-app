import {InputHTMLAttributes} from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    header?: string;
    visiblePasswordChanger?: boolean;
    image?: string;
}