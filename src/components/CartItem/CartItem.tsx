import styles from "./CartItem.module.css";
import cn from "classnames";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store/store.ts";
import {cartActions} from "../../store/cart.slice.ts";
import {memo} from "react";
import {CartItemProps} from "./CartItem.props.ts";

export const CartItem = memo((props: CartItemProps) => {

    const dispatch = useDispatch<AppDispatch>();

    const increase = () => {
        dispatch(cartActions.add(props.id));
    };

    const decrease = () => {
        dispatch(cartActions.remove(props.id));
    };

    const remove = () => {
        dispatch(cartActions.delete(props.id));
    };

    return (
        <div className={styles.card}>
            <img className={styles.image} src={props.image} alt="Изображение блюда"/>

            <div className={styles.infoProductContainer}>
                <span className={styles.nameProduct}>{props.name}</span>
                <span className={styles.price}>{props.price}&nbsp;₽</span>
            </div>

            <div className={styles.countContainer}>
                <button className={cn(styles.buttonCount, styles.buttonMinus)} onClick={decrease}>
                    <img src="/minus.svg" alt="иконка минус"/>
                </button>
                <span className={styles.count}>{props.count}</span>
                <button className={cn(styles.buttonCount, styles.buttonPlus)} onClick={increase}>
                    <img src="/plus.svg" alt="иконка плюс"/>
                </button>
                <button className={cn(styles.buttonCount, styles.buttonRemove)} onClick={remove}>
                    <img src="/cross.svg" alt="иконка удалить"/>
                </button>
            </div>

        </div>
    );
});