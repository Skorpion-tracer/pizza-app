import styles from "./Menu.module.css";
import cn from "classnames";
import Input from "../../components/Input/Input.tsx";
import {Headling} from "../../components/Header/Headling.tsx";
import {PREFIX} from "../../Helpers/API.ts";
import {ChangeEvent, useEffect, useState} from "react";
import {Product} from "../../interfaces/product.interface.ts";
import axios, {AxiosError} from "axios";
import {MenuList} from "./MenuList/MenuList.tsx";

export function Menu() {
    const [ products, setProducts ] = useState<Product[]>([]);
    const [ isLoading, setIsLoading ] = useState<boolean>(false);
    const [ error, setError ] = useState<string | undefined>();
    const [ filter, setFilter ] = useState<string>();

    useEffect(() => {
        getMenu(filter);
    }, [ filter ]);

    const getMenu = async (name?: string) => {
        try {
            setIsLoading(true);
            const { data } = await axios.get<Product[]>(`${PREFIX}products`, {
                params: name?.trim() ? { name: name.trim() } : {},
            });
            setProducts(data);
        } catch (e) {
            console.error(e);
            if (e instanceof AxiosError) {
                setError(e.message);
            }
            return;
        } finally {
            setIsLoading(false);
        }
    };

    const getProducts = (e: ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value);
    };

    return (
        <div className={cn(styles.menu)}>
            <header className={cn(styles.headerMenu)}>
                <Headling>Меню</Headling>
                <Input image="/menu.svg" placeholder="Введите блюдо или состав" onChange={getProducts}/>
            </header>

            <div className={cn(styles.productsContainer)}>
                {error && <>{error}</>}
                {!isLoading && products.length > 0 && <MenuList products={products}/>}
                {isLoading && <>Загрузка</>}
                {!isLoading && products.length === 0 && <>Нет продуктов</>}
            </div>
        </div>
    );
}

export default Menu;