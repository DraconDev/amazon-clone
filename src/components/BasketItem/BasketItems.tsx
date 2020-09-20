import React from "react";
import { useStateValue } from "../../store/customHooks/customHooks";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import classes from "./BasketItems.module.scss";
import { ItemProps } from "../../types/types";

interface BasketProps {}

function BasketItems(props: BasketProps) {
	const [state, dispatch] = useStateValue();
	return (
		<div className={classes.basketItems}>
			{state?.basket.map((item: ItemProps) => (
				<CheckoutProduct
					{...item}
					// id={item.id}
					// image={item.image}
					// title={item.title}
					// price={item.price}
					// rating={item.rating}
				></CheckoutProduct>
			))}
		</div>
	);
}

export default BasketItems;
