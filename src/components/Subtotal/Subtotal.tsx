import { Button } from "@material-ui/core";
import React from "react";
import { getBasketTotal } from "../../store/selectors";
import { useStateValue } from "./../../store/customHooks/customHooks";
import classes from "./Subtotal.module.scss";

interface SubTotalProps {
	value: number;
}
function Subtotal(props: SubTotalProps) {
	const [state, dispatch] = useStateValue();
	return (
		<div className={classes.subtotal}>
			<p>
				Subtotal ({state.basket.length} items):
				<strong>
					{/* //? easy format for currency */}{" "}
					{`$${getBasketTotal(state.basket)}`}
				</strong>
				<small className={classes.gift}>
					<input type="checkbox" /> this order contains a gift
				</small>
			</p>
			<Button variant="contained">Proceed to checkout</Button>
		</div>
	);
}

export default Subtotal;
