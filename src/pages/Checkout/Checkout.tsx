import React from "react";
import Subtotal from "../../components/Subtotal/Subtotal";
import classes from "./Checkout.module.scss";
import { useStateValue } from "./../../store/customHooks/customHooks";
import CheckoutProduct from "./../../components/CheckoutProduct/CheckoutProduct";
import BasketItems from "./../../components/BasketItem/BasketItems";
import { Link } from "react-router-dom";

interface CheckoutProps {
	imageLink: string;
}

function Checkout(props: CheckoutProps) {
	const [basket, dispatch] = useStateValue();
	const { imageLink } = props;

	return (
		<div className={classes.checkout}>
			<div className={classes.left}>
				<Link to="/">
					<img className={classes.ad} src={imageLink} alt="" />
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
