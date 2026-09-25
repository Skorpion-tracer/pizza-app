import styles from "./Card.module.css";
import cn from "classnames";
import {CardProps} from "./Card.props.ts";

export function Card({ name, price, currency, description, rating, image }: CardProps) {
    return (
        <div className={cn(styles.card)}>
            <img className={cn(styles.image)} src={image} alt="Изображение блюда"/>
            {/*<div className={cn(styles.mainBackCard)}>*/}
            {/*    */}
            {/*    */}
            {/*</div>*/}


            <div className={cn(styles.priceContainer)}>
                <span className={cn(styles.price)}>{price}</span>
                <span className={cn(styles.price, styles.currency)}>{currency}</span>
            </div>

                        <div className={cn(styles.ratingContainer)}>
                    <span className={cn(styles.rating)}>{rating}</span>
                    <img className={cn(styles.ratingImg)} src="/star.svg" alt="иконка рейтинга"/>
                </div>

            <div className={cn(styles.infoProductContainer)}>
                <h1 className={cn(styles.nameProduct)}>{name}</h1>
                <span className={cn(styles.description)}>{description}</span>
            </div>
        </div>
    );
}