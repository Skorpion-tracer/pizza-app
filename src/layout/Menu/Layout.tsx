import {Link, Outlet} from "react-router-dom";
import styles from "./Layout.module.css";
import cn from "classnames";
import Button from "../../components/Button/Button.tsx";

export function Layout() {
    return (
        <div className={cn(styles.layoutMenu)}>
            <div className={cn(styles.navigationPanel)}>
                <img className={cn(styles.avatar)} src="/avatar.png" alt="Аватар"/>
                <h2>Имя пользователя</h2>
                <p>user@email.ru</p>
                <div className={cn(styles.navigationButtons)}>
                    <Link className={cn(styles.link)} to="/">
                        <img src="/menu.svg" alt="Иконка"/>
                        <span>Меню</span>
                    </Link>
                    <Link className={cn(styles.link)} to="/cart">
                        <img src="/cart.svg" alt="Иконка"/>
                        <span>Корзина</span>
                    </Link>
                </div>
                <Button className={cn(styles.buttonChildren)}>
                    <img className={cn(styles.iconExit)} src="/power.svg" alt="иконка выхода"/>
                    <span>Выход</span>
                </Button>
            </div>
            <div className={cn(styles.test)}>
                <Outlet/>
            </div>
        </div>
    );
}