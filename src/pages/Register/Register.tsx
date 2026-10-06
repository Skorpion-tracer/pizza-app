import styles from "../Login/Login.module.css";
import {Headling} from "../../components/Header/Headling.tsx";
import Input from "../../components/Input/Input.tsx";
import Button from "../../components/Button/Button.tsx";
import {ButtonAppearance} from "../../components/Button/ButtonAppearance.ts";
import {NavLink, useNavigate} from "react-router-dom";
import {SyntheticEvent, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store/store.ts";
import {register, userActions} from "../../store/user.slice.ts";

export type RegisterForm = {
    email: {
        value: string;
    },
    password: {
        value: string;
    },
    name: {
        value: string;
    }
}

export function Register() {

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const { jwt, registerErrorMessage } = useSelector((s: RootState) => s.user);

    useEffect(() => {
        if (jwt) {
            navigate("/");
        }
    }, [ jwt, navigate ]);

    const submit = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(userActions.clearRegisterError());
        const form = e.currentTarget as HTMLFormElement & RegisterForm;
        const { email, password, name } = form;
         dispatch(register({ email: email.value, password: password.value, name: name.value }));
    };

    return <div className={styles.login}>
        <Headling>Регистрация</Headling>
        {registerErrorMessage && <span className={styles.error}>{registerErrorMessage}</span>}
        <form className={styles.authorizationForm} onSubmit={submit}>
            <Input header={"Ваш email"} autoComplete="username" name="email" type="email" placeholder={"Email"}/>
            <Input header={"Ваш пароль"} autoComplete="new-password" name="password" type="password" placeholder={"Пароль"} visiblePasswordChanger={true}/>
            <Input header={"Ваше имя"} autoComplete="username" name="name" type="text" placeholder={"Имя"}/>
            <Button className={styles.buttonEnter} appearance={ButtonAppearance.big}>Зарегистрироваться</Button>
        </form>
        <p>Есть аккаунт?</p>
        <NavLink to="/auth/login" className={styles.link}>Войти</NavLink>
    </div>;
}