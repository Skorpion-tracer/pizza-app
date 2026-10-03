import styles from "./Menu.module.css";
import cn from "classnames";
import Input from "../../components/Input/Input.tsx";
import {Headling} from "../../components/Header/Headling.tsx";
import {PREFIX} from "../../Helpers/API.ts";
import {useEffect, useState} from "react";
import {Product} from "../../interfaces/product.interface.ts";
import axios, {AxiosError} from "axios";
import {MenuList} from "./MenuList/MenuList.tsx";

export function Menu() {
    const [ products, setProducts ] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | undefined>();

    const getMenu = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.get<Product[]>(`${PREFIX}products`);
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
                {error && <>{error}</>}
                {!isLoading && <MenuList products={products} />}
                {isLoading && <>Загрузка</>}
            </div>
        </div>
    );
}

export default Menu;