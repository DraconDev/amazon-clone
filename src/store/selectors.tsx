import React from "react";
import { useStateValue } from "./customHooks/customHooks";

export function getBasketTotal(basket: any) {
	// const [state, dispatch] = useStateValue();
	return new Intl.NumberFormat("de-DE").format(
		basket?.reduce((acc: number, e: { price: number }) => acc + e.price, 0)
	);
}
