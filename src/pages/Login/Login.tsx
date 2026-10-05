import styles from "./Login.module.css";
import {Headling} from "../../components/Header/Headling.tsx";
import Input from "../../components/Input/Input.tsx";
import Button from "../../components/Button/Button.tsx";
import {ButtonAppearance} from "../../components/Button/ButtonAppearance.ts";
import {SyntheticEvent, useEffect} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store/store.ts";
import {login, userActions} from "../../store/user.slice.ts";

export type LoginForm = {
    email: {
        value: string;
    },
    password: {
        value: string;
    }
}

export function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const {jwt, loginErrorMessage} = useSelector((s: RootState) => s.user);

    useEffect(() => {
        if (jwt) {
            navigate("/");
        }
    }, [ jwt, navigate ]);

    const submit = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(userActions.clearLoginError());
        const form = e.currentTarget as HTMLFormElement & LoginForm;
        const { email, password } = form;
        await sendLogin(email.value, password.value);
    };


    const sendLogin = async (email: string, password: string) => {
        dispatch(login({ email, password }));
    };

    return (
        <div className={styles.login}>
            <Headling>Вход</Headling>
            {loginErrorMessage && <span className={styles.error}>{loginErrorMessage}</span>}
            <form className={styles.authorizationForm} onSubmit={submit}>
                <Input header={"Ваш email"} autoComplete="username" name="email" type="email" placeholder={"Email"}/>
                <Input header={"Ваш пароль"} autoComplete="new-password" name="password" type="password" placeholder={"Пароль"} visiblePasswordChanger={true}/>
                <Button className={styles.buttonEnter} appearance={ButtonAppearance.big}>Вход</Button>
            </form>
            <p>Нет аккаунта?</p>
            <NavLink to="/auth/register" className={styles.link}>Зарегистрироваться</NavLink>
        </div>
    );
}