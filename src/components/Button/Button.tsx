import styles from './Button.module.css';
import type {ButtonProps} from "./Button.props.ts";
import cn from "classnames";
import {ButtonAppearance} from "./ButtonAppearance.ts";

function Button({ children, className, appearance = ButtonAppearance.standard, ...props }: ButtonProps) {
    return (
        <button className={cn(
            {
                [styles.button]: appearance === ButtonAppearance.standard,
                [styles.accent]: appearance === ButtonAppearance.standard,
                [styles.uppercase]: appearance === ButtonAppearance.uppercase,
            }, className)} {...props}>
            {children}
        </button>
    );
}

export default Button;