import React from "react";
import { Link } from "react-router-dom";
import Subtotal from "../../components/Subtotal/Subtotal";
import BasketItems from "./../../components/BasketItem/BasketItems";
import {
	useGetImage,
	useStateValue,
	useStore,
} from "./../../store/customHooks/customHooks";
import classes from "./Checkout.module.scss";

function Checkout() {
	const [basket, dispatch] = useStateValue();
	return (
		<div className={classes.checkout}>
			<div className={classes.left}>
				<Link to="/">
					<img className={classes.ad} src={useGetImage("mainLogo")} alt="" />
				</Link>
				<div className={classes.basket}>
					<h2 className={classes.title}>Your shopping basket</h2>
					<BasketItems></BasketItems>
				</div>
			</div>
			<div className={classes.right}>
				<Subtotal value={0}></Subtotal>
			</div>
		</div>
	);
}

export default Checkout;
