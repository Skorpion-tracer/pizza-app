import {NavLink, Outlet, useNavigate} from "react-router-dom";
import styles from "./Layout.module.css";
import cn from "classnames";
import Button from "../../components/Button/Button.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store/store.ts";
import {getProfile, userActions} from "../../store/user.slice.ts";
import {useEffect} from "react";

export function Layout() {

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const profile = useSelector((s: RootState) => s.user.profile);

    const logout = () => {
        dispatch(userActions.logout());
        navigate('/auth/login');
    }

    useEffect(() => {
        dispatch(getProfile());
    }, [dispatch])

    return (
        <div className={cn(styles.layoutMenu)}>
            <div className={cn(styles.navigationPanel)}>
                <img className={cn(styles.avatar)} src="/avatar.png" alt="Аватар"/>
                <h2>{profile?.name}</h2>
                <p>{profile?.email}</p>
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
                <Button className={cn(styles.buttonChildren)} onClick={logout}>
                    <img className={cn(styles.iconExit)} src="/power.svg" alt="иконка выхода"/>
                    <span>Выход</span>
                </Button>
            </div>
            <div className={cn(styles.content)}>
                <Outlet/>
            </div>
        </div>
    );
}