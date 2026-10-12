import styles from "./Cart.module.css";
import {Headling} from "../../components/Header/Headling.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";
import {CartItem} from "../../components/CartItem/CartItem.tsx";
import {useEffect, useState} from "react";
import {Product} from "../../interfaces/product.interface.ts";
import {PREFIX} from "../../Helpers/API.ts";
import axios from "axios";

export function Cart() {
    const [ cartProducts, setCartProducts ] = useState<Product[]>([]);
    const items = useSelector((s: RootState) => s.cart.items);

    const getItem = async (id: number) => {
        const { data } = await axios.get<Product>(`${PREFIX}products/${id}`);
        return data;
    };

    const loadAllItems = async () => {
        const res = await Promise.all(items.map(i => getItem(i.id)));
        setCartProducts(res);
    };

    useEffect(() => {
        loadAllItems();
    }, [ items ]);

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
    </div>;
}