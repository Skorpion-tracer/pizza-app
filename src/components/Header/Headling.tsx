import styles from "./Header.module.css";
import cn from "classnames";
import {HeadlingProps} from "./HeadlingProps.ts";

export function Headling({children, className, ...props}:HeadlingProps) {
    return <h1 className={cn(className, styles.header)} {...props}>{children}</h1>
}