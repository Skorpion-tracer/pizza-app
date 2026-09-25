import styles from "./Menu.module.css";
import cn from "classnames";
import Input from "../../components/Input/Input.tsx";
import {Headling} from "../../components/Header/Headling.tsx";
import {Card} from "../../components/Card/Card.tsx";

export function Menu() {
    return (
        <div className={cn(styles.menu)}>
            <header className={cn(styles.headerMenu)}>
                <Headling>Меню</Headling>
                <Input image="/menu.svg" placeholder="Введите блюдо или состав"/>
            </header>
            <div className={cn(styles.productsContainer)}>
                <Card name="Блюдо1" price={300} currency="Р" description="Блюдо1 описание" image="/Food.PNG" rating={5.4}/>
                <Card name="Блюдо1" price={13} currency="Р" description="Блюдо1 описание" image="/Food.PNG" rating={5.4}/>
                <Card name="Блюдо1" price={13} currency="Р" description="Блюдо1 описание" image="/Food.PNG" rating={5.4}/>
                <Card name="Блюдо1" price={13} currency="Р" description="Блюдо1 описание" image="/Food.PNG" rating={5.4}/>
                <Card name="Блюдо1" price={13} currency="Р" description="Блюдо1 описание" image="/Food.PNG" rating={5.4}/>
                <Card name="Блюдо1" price={13} currency="Р" description="Блюдо1 описание" image="/Food.PNG" rating={5.4}/>
                <Card name="Блюдо1" price={13} currency="Р" description="Блюдо1 описание" image="/Food.PNG" rating={5.4}/>
                <Card name="Блюдо1" price={13} currency="Р" description="Блюдо1 описание" image="/Food.PNG" rating={5.4}/>
                <Card name="Блюдо1" price={13} currency="Р" description="Блюдо1 описание" image="/Food.PNG" rating={5.4}/>
                <Card name="Блюдо1" price={13} currency="Р" description="Блюдо1 описание" image="/Food.PNG" rating={5.4}/>
                <Card name="Блюдо1" price={13} currency="Р" description="Блюдо1 описание" image="/Food.PNG" rating={5.4}/>
                <Card name="Блюдо1" price={13} currency="Р" description="Блюдо1 описание" image="/Food.PNG" rating={5.4}/>
                <Card name="Блюдо1" price={13} currency="Р" description="Блюдо1 описание" image="/Food.PNG" rating={5.4}/>
                <Card name="Блюдо1" price={13} currency="Р" description="Блюдо1 описание" image="/Food.PNG" rating={5.4}/>
                <Card name="Блюдо1" price={13} currency="Р" description="Блюдо1 описание" image="/Food.PNG" rating={5.4}/>
                <Card name="Блюдо1" price={13} currency="Р" description="Блюдо1 описание" image="/Food.PNG" rating={5.4}/>
                <Card name="Блюдо1" price={13} currency="Р" description="Блюдо1 описание" image="/Food.PNG" rating={5.4}/>
                <Card name="Блюдо1" price={13} currency="Р" description="Блюдо1 описание" image="/Food.PNG" rating={5.4}/>
                <Card name="Блюдо1" price={13} currency="Р" description="Блюдо1 описание" image="/Food.PNG" rating={5.4}/>
                <Card name="Блюдо1" price={13} currency="Р" description="Блюдо1 описание" image="/Food.PNG" rating={5.4}/>
                <Card name="Блюдо1" price={13} currency="Р" description="Блюдо1 описание" image="/Food.PNG" rating={5.4}/>
                <Card name="Блюдо1" price={13} currency="Р" description="Блюдо1 описание" image="/Food.PNG" rating={5.4}/>
                <Card name="Блюдо1" price={13} currency="Р" description="Блюдо1 описание" image="/Food.PNG" rating={5.4}/>
                <Card name="Блюдо1" price={13} currency="Р" description="Блюдо1 описание" image="/Food.PNG" rating={5.4}/>
                <Card name="Блюдо1" price={13} currency="Р" description="Блюдо1 описание" image="/Food.PNG" rating={5.4}/>
                <Card name="Блюдо1" price={13} currency="Р" description="Блюдо1 описание" image="/Food.PNG" rating={5.4}/>
                <Card name="Блюдо1" price={13} currency="Р" description="Блюдо1 описание" image="/Food.PNG" rating={5.4}/>
                <Card name="Блюдо1" price={13} currency="Р" description="Блюдо1 описание" image="/Food.PNG" rating={5.4}/>
                <Card name="Блюдо1" price={13} currency="Р" description="Блюдо1 описание" image="/Food.PNG" rating={5.4}/>
                <Card name="Блюдо1" price={13} currency="Р" description="Блюдо1 описание" image="/Food.PNG" rating={5.4}/>
                <Card name="Блюдо1" price={13} currency="Р" description="Блюдо1 описание" image="/Food.PNG" rating={5.4}/>
                <Card name="Блюдо1" price={13} currency="Р" description="Блюдо1 описание" image="/Food.PNG" rating={5.4}/>
            </div>
        </div>
    );
}