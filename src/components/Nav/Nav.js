import React from "react";
import classes from "./Nav.module.scss";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

const navInfo = [
	{ first: "Hello Guest", second: "Sign In" },
	{ first: "Returns", second: "Orders" },
	{ first: "Your", second: "Prime" },
];

function Nav() {
	return (
		<div className={classes.nav}>
			{navInfo.map((e) => (
				<div className={classes.option}>
					<span className={classes.optionLineOne}>{e.first}</span>
					<span className={classes.optionLineTwo}>{e.second}</span>
				</div>
			))}
			<div className={classes.optionBasket}>
				<ShoppingBasketIcon></ShoppingBasketIcon>
				<span
					className={`${classes.optionLineTwo} ${classes.basketCount}`}
				></span>
			</div>
		</div>
	);
}

export default Nav;
