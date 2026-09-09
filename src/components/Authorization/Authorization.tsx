import styles from "./Authorization.module.css";
import cn from "classnames";
import Button from "../Button/Button.tsx";
import {ButtonAppearance} from "../Button/ButtonAppearance.ts";
import {SubmitEvent} from "react";
import {Input} from "../Input/Input.tsx";

function Authorization() {

    const submit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <div className={cn(styles.authorizationContainer)}>
            <img className={cn(styles.iconLogo)} src="/favicon.svg" alt="Логотип"/>

            <div className={cn(styles.separator)}/>

            <div className={cn(styles.authorization)}>
                <h1 className={cn(styles.title)}>Вход</h1>
                <form className={cn(styles.authorizationForm)} onSubmit={submit}>
                    <Input title={"Ваш email"} type="email" placeholder={"Email"}/>
                    <Input title={"Ваш пароль"} type="password" placeholder={"Пароль"} visiblePasswordChanger={true}/>
                    <Button className={cn(styles.button)} appearance={ButtonAppearance.uppercase}>Вход</Button>
                </form>
                <p>Нет аккаунта?</p>
                <a>Зарегистрироваться</a>
            </div>
        </div>
    );
}

export default Authorization;