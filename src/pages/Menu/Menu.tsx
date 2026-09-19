import styles from "./Menu.module.css";
import cn from "classnames";
import Input from "../../components/Input/Input.tsx";
import {Header} from "../../components/Header/Header.tsx";

export function Menu() {
    return (
        <>
            <header className={cn(styles.headerMenu)}>
                <Header title="Меню"/>
                <Input image="/menu.svg"/>
            </header>
        </>
    );
}