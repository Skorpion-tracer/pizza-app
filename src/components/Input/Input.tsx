import styles from "./Input.module.css";
import cn from 'classnames';
import {InputProps} from "./Input.props.ts";
import {useState} from "react";

export function Input({ title, placeholder, visiblePasswordChanger = false, type }: InputProps) {
    const [ visiblePassword, setVisiblePassword ] = useState(false);

    const showPassword = () => {
        setVisiblePassword(!visiblePassword);
    };

    return (
        <div className={cn(styles.inputContainer)}>
            {
                title &&
                <p className={cn(styles.tooltip)}>{title}</p>
            }
            {visiblePasswordChanger ?
                <div className={cn(styles.password)}>
                    <input className={cn(styles.input)} placeholder={placeholder} type={visiblePassword ? "text" : type}/>
                    <button className={cn(styles.showPasswordButton)} onClick={showPassword}>
                        <img className={cn(styles.eyeIcon)} src="/eye.svg" alt="Показать пароль"/>
                    </button>
                </div> :
                <input className={cn(styles.input)} placeholder={placeholder} type={type}/>
            }
        </div>
    );
}