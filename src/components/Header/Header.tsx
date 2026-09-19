import styles from "./Header.module.css";
import cn from "classnames";
import {HeaderProps} from "./Header.props.ts";

export function Header({title}:HeaderProps) {
    return <h1 className={cn(styles.header)}>{title}</h1>
}