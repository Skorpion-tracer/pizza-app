import styles from "./Success.module.css";
import Button from "../../components/Button/Button.tsx";
import {ButtonAppearance} from "../../components/Button/ButtonAppearance.ts";
import {useNavigate} from "react-router-dom";

export function Success() {
    const navigate = useNavigate();

    return (
        <div className={styles.successMain}>
            <img className={styles.imgSuccess} src="/favicon.svg" alt="Картинка успешности"/>
            <h1 className={styles.header}>Ваш заказ успешно оформлен</h1>
            <Button appearance={ButtonAppearance.big} onClick={() => navigate('/')}>Создать новый</Button>
        </div>
    )
}