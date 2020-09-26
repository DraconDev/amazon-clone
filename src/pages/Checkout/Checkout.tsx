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
	return (
		<div className={classes.checkout}>
			<div className={classes.top}>
				<div className={classes.left}>
					<Link to="/">
						<img className={classes.ad} src={useGetImage("banner")} alt="" />
					</Link>
				</div>
				<div className={classes.right}>
					<Subtotal value={0}></Subtotal>
				</div>
			</div>
			<div className={classes.basket}>
				{/* <h3 className={classes.user}>{useStore().user?.email}</h3> */}
				<h2 className={classes.title}>Your shopping basket</h2>
				{useStore().basket.length > 0 && <BasketItems></BasketItems>}
			</div>
		</div>
	);
}

export default Checkout;
