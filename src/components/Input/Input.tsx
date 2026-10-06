import styles from "./Input.module.css";
import cn from 'classnames';
import {InputProps} from "./Input.props.ts";
import {forwardRef, useState} from "react";

const Input = forwardRef<HTMLInputElement, InputProps>(function Input({
    visiblePasswordChanger = false,
    header,
    name,
    image,
    ...props
}, ref) {
    const [ visiblePassword, setVisiblePassword ] = useState(false);

    const showPassword = () => {
        setVisiblePassword(!visiblePassword);
    };

    return (
        <div className={cn(styles.inputMainContainer)}>
            {
                header &&
                <p className={cn(styles.tooltip)}>{header}</p>
            }
            {visiblePasswordChanger ?
                <div className={cn(styles.inputContainer)}>
                    <input ref={ref} name={name} className={cn(styles.input)} {...props} type={visiblePassword ? "text" : props.type}/>
                    <button type="button" className={cn(styles.showPasswordButton)} onClick={showPassword}>
                        <img className={cn(styles.eyeIcon)} src="/eye.svg" alt="Показать пароль"/>
                    </button>
                </div> :
                <div className={cn(styles.inputContainer)}>
                    {
                        image &&
                        <img className={cn(styles.iconInput)} src={image} alt="иконка"/>
                    }
                    <input ref={ref} name={name} className={cn(styles.input, image && styles.inputWithImage)}  {...props}/>
                </div>
            }
        </div>
    );
});

export default Input;