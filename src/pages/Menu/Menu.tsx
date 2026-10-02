import styles from "./Menu.module.css";
import cn from "classnames";
import Input from "../../components/Input/Input.tsx";
import {Headling} from "../../components/Header/Headling.tsx";
import {ProductCard} from "../../components/ProductCard/ProductCard.tsx";
import {PREFIX} from "../../Helpers/API.ts";
import {useEffect, useState} from "react";
import {Product} from "../../interfaces/product.interface.ts";
import axios from "axios";

export function Menu() {
    const [ products, setProducts ] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const getMenu = async () => {
        try {
            setIsLoading(true);
            await new Promise<void>((resolve) => {
                setTimeout(()=> {
                    resolve();
                }, 2000);
            });
            const { data } = await axios.get<Product[]>(`${PREFIX}products`);
            setProducts(data);
        } catch (e) {
            console.error(e);
            return;
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getMenu();
    }, []);

    return (
        <div className={cn(styles.menu)}>
            <header className={cn(styles.headerMenu)}>
                <Headling>Меню</Headling>
                <Input image="/menu.svg" placeholder="Введите блюдо или состав"/>
            </header>
            <div className={cn(styles.productsContainer)}>
                {!isLoading && products.map((p) => (
                    <ProductCard key={p.id} id={p.id}
                                 name={p.name} price={p.price} currency="Р"
                                 description={p.ingredients.join(', ')}
                                 image={p.image} rating={p.rating}/>
                ))}
                {isLoading && <>Загрузка</>}
            </div>
        </div>
    );
}