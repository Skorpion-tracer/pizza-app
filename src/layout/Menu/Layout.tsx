import {NavLink, Outlet} from "react-router-dom";
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
                    <NavLink to="/" className={({isActive}) => cn(styles.link, {
                        [styles.linkActive]: isActive,
                    })}>
                        <img src="/menu.svg" alt="Иконка"/>
                        <span>Меню</span>
                    </NavLink>
                    <NavLink to="/cart" className={({isActive}) => cn(styles.link, {
                        [styles.linkActive]: isActive
                    })}>
                        <img src="/cart.svg" alt="Иконка"/>
                        <span>Корзина</span>
                    </NavLink>
                </div>
                <Button className={cn(styles.buttonChildren)}>
                    <img className={cn(styles.iconExit)} src="/power.svg" alt="иконка выхода"/>
                    <span>Выход</span>
                </Button>
            </div>
            <div className={cn(styles.rightColumn)}>
                <Outlet/>
            </div>
        </div>
    );
}