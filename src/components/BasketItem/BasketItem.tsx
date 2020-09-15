import React from "react";
import classes from "./BasketItem.module.scss";

interface Props {}

function BasketItem(props: Props) {
	return <div className={classes.basketItem}></div>;
}

export default BasketItem;
