import React from "react";
import { useStateValue, useStore } from "./customHooks/customHooks";

export function getBasketTotal(basket: any) {
	// const [state, dispatch] = useStateValue();
	return new Intl.NumberFormat("de-DE").format(
		basket?.reduce((acc: number, e: { price: number }) => acc + e.price, 0)
	);
}

export function useBasketTotal() {
	return (
		"$" +
		new Intl.NumberFormat("de-DE").format(
			useStore().basket?.reduce(
				(acc: number, e: { price: number }) => acc + e.price,
				0
			)
		)
	);
}

export function useBasketTotalNumber(): number {
	return useStore().basket?.reduce(
		(acc: number, e: { price: number }) => acc + Number(e.price),
		0
	);
}

export function currencyFormat(currency: any) {
	return new Intl.NumberFormat("de-DE").format(currency);
}
