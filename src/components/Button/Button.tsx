import styles from './Button.module.css';
import type {ButtonProps} from "./Button.props.ts";
import cn from "classnames";
import {ButtonAppearance} from "./ButtonAppearance.ts";

function Button({ children, className, appearance = ButtonAppearance.small, ...props }: ButtonProps) {
    return (
        <button className={cn(styles.button, styles.accent,
            {
                [styles.big]: appearance === ButtonAppearance.big,
            }, className)} {...props}>
            {children}
        </button>
    );
}

export default Button;