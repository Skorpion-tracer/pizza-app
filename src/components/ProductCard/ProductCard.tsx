import styles from "./ProductCard.module.css";
import cn from "classnames";
import {ProductCardProps} from "./ProductCard.props.ts";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store/store.ts";
import {cartActions} from "../../store/cart.slice.ts";
import { MouseEvent} from "react";

export function ProductCard({ id, name, price, currency, description, rating, image }: ProductCardProps) {

    const dispatch = useDispatch<AppDispatch>();

    const add = (e: MouseEvent) => {
        e.preventDefault();
        dispatch(cartActions.add(id));
    };

    return (
        <Link to={`/product/${id}`} className={styles.link}>
            <div className={styles.card}>
                <img className={styles.image} src={image} alt="Изображение блюда"/>
                <button className={styles.buttonBuy} onClick={add}>
                    <img className={styles.imgBuy} src="/buy.svg" alt="Иконка кнопки оплаты"/>
                </button>
                <div className={styles.priceContainer}>
                    <span className={styles.price}>{price}</span>
                    <span className={cn(styles.price, styles.currency)}>{currency}</span>
                </div>

                <div className={styles.ratingContainer}>
                    <span className={styles.rating}>{rating}</span>
                    <img className={styles.ratingImg} src="/star.svg" alt="иконка рейтинга"/>
                </div>

                <div className={styles.infoProductContainer}>
                    <span className={styles.nameProduct}>{name}</span>
                    <span className={styles.description}>{description}</span>
                </div>
            </div>
        </Link>
    );
}