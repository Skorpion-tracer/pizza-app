import styles from "./Input.module.css";
import cn from 'classnames';
import {InputProps} from "./Input.props.ts";
import {forwardRef, useState} from "react";

const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ placeholder, visiblePasswordChanger = false, type, header, ...props }, ref) {
    const [ visiblePassword, setVisiblePassword ] = useState(false);

    const showPassword = () => {
        setVisiblePassword(!visiblePassword);
    };

    return (
        <div className={cn(styles.inputContainer)}>
            {
                header &&
                <p className={cn(styles.tooltip)}>{header}</p>
            }
            {visiblePasswordChanger ?
                <div className={cn(styles.password)}>
                    <input ref={ref} className={cn(styles.input)} placeholder={placeholder} type={visiblePassword ? "text" : type} {...props}/>
                    <button className={cn(styles.showPasswordButton)} onClick={showPassword}>
                        <img className={cn(styles.eyeIcon)} src="/eye.svg" alt="Показать пароль"/>
                    </button>
                </div> :
                <input ref={ref} className={cn(styles.input)} placeholder={placeholder} type={type} {...props}/>
            }
        </div>
    );
});

export default Input;