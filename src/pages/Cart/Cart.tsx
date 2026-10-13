import styles from "./Cart.module.css";
import cn from "classnames";
import {Headling} from "../../components/Header/Headling.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store/store.ts";
import {CartItem} from "../../components/CartItem/CartItem.tsx";
import {useEffect, useState} from "react";
import {Product} from "../../interfaces/product.interface.ts";
import {PREFIX} from "../../Helpers/API.ts";
import axios from "axios";
import Button from "../../components/Button/Button.tsx";
import {useNavigate} from "react-router-dom";
import {cartActions} from "../../store/cart.slice.ts";

const DELIVERY_FEE = 169;

export function Cart() {
    const [ cartProducts, setCartProducts ] = useState<Product[]>([]);
    const items = useSelector((s: RootState) => s.cart.items);
    const jwt = useSelector((s: RootState) => s.user.jwt);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const total = items.map(i => {
        const product = cartProducts.find(p => p.id === i.id);
        if (!product) {
            return 0;
        }
        return i.count * product.price;
    }).reduce((acc, i) => acc += i, 0);

    useEffect(() => {
        loadAllItems();
    }, [ items ]);

    const getItem = async (id: number) => {
        const { data } = await axios.get<Product>(`${PREFIX}products/${id}`);
        return data;
    };

    const loadAllItems = async () => {
        const res = await Promise.all(items.map(i => getItem(i.id)));
        setCartProducts(res);
    };

    const checkout = async () => {
        await axios.post(`${PREFIX}order`,
            {
                products: items,
            }, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                }
            });
        dispatch(cartActions.clean());
        navigate('/success');
    };

    return <div className={styles.cart}>
        <Headling>Корзина</Headling>
        <div className={styles.productsList}>
            {items.map(i => {
                const product = cartProducts.find(p => p.id === i.id);
                if (!product) {
                    return;
                }
                return <CartItem key={product.id} count={i.count} {...product} />;
            })}
        </div>
        <div className={styles.infoSumContainer}>
            <div className={cn(styles.infoSumItem, styles.itemBorder)}>
                <span className={styles.result}>Итог</span>
                <span className={styles.result}>{total}<span className={styles.currency}>&nbsp;₽</span></span>
            </div>
            <div className={cn(styles.infoSumItem, styles.itemBorder)}>
                <span className={styles.result}>Доставка</span>
                <span className={styles.result}>{DELIVERY_FEE}<span className={styles.currency}>&nbsp;₽</span></span>
            </div>
            <div className={styles.infoSumItem}>
                <span className={styles.result}>Итог<span className={styles.totalCount}>&nbsp;({items.reduce((acc, item) => acc += item.count, 0)})</span></span>
                <span className={styles.result}>{total + DELIVERY_FEE}<span className={styles.currency}>&nbsp;₽</span></span>
            </div>
            <div className={styles.buttonPlace}>
                <Button className={styles.button} onClick={checkout}>Оформить</Button>
            </div>
        </div>
    </div>;
}