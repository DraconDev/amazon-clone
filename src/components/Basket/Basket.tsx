import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { default as React } from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "./../../store/customHooks/customHooks";
import classes from "./Basket.module.scss";

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
