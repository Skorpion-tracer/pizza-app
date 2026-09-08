import './Button.module.css';
import type {ButtonProps} from "./Button.props.ts";
import cn from "classnames";
import type {FC} from "react";

export const ButtonAlt: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
        <button className={cn('button accent', className)} {...props}>
            {children}
        </button>
    );
};

function Button({ children, className, ...props }: ButtonProps) {
    return (
        <button className={cn('button accent', className)} {...props}>
            {children}
        </button>
    );
}

export default Button;