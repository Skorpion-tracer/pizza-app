import styles from "./Card.module.css";
import cn from "classnames";
import {CardProps} from "./Card.props.ts";

export function Card({name, price, currency, description, rating, image}:CardProps) {
    return (
        <div className={cn(styles.card)}>
            <img className={cn(styles.image)} src={image} alt="Изображение блюда"/>
            <div className={cn(styles.priceContainer)}>
                <span>{price}</span>
                <span>{currency}</span>
            </div>
            <div className={cn(styles.priceContainer)}>
                <span>{rating}</span>
                <img src="" alt="иконка рейтинга"/>
            </div>
            <h1 className={cn(styles.priceContainer)}>{name}</h1>
            <span className={cn(styles.priceContainer)}>{description}</span>
        </div>
    );
}