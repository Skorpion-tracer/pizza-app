import {MenuListProps} from "./MenuList.props.ts";
import {ProductCard} from "../../../components/ProductCard/ProductCard.tsx";
import {memo} from "react";

export const MenuList = memo(({ products }: MenuListProps) => {
    return products.map((p) => (
        <ProductCard key={p.id} id={p.id}
                     name={p.name} price={p.price} currency="Р"
                     description={p.ingredients.join(', ')}
                     image={p.image} rating={p.rating}/>
    ));
});