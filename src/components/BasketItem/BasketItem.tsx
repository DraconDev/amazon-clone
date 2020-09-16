import React from "react";
import classes from "./BasketItem.module.scss";

interface BasketProps {}

function BasketItem(props: BasketProps) {
	return <div className={classes.basketItem}></div>;
}

export default BasketItem;
