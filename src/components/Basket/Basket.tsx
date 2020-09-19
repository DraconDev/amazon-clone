import React from "react";
import classes from "./Basket.module.scss";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./../../store/customHooks/customHooks";
import { Link } from "react-router-dom";

function Basket() {
	const [state, dispatch] = useStateValue();
	return (
		<div className={classes.basket}>
			<Link to="/checkout">
				<div className={classes.optionBasket}>
					<ShoppingBasketIcon></ShoppingBasketIcon>
					<span className={`${classes.optionLineTwo} ${classes.basketCount}`}>
						{state?.basket.length}
					</span>
				</div>
			</Link>
		</div>
	);
}

export default Basket;
