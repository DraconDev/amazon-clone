import { Button } from "@material-ui/core";
import React from "react";
import { getBasketTotal } from "../../store/selectors";
import { useStateValue } from "./../../store/customHooks/customHooks";
import classes from "./Subtotal.module.scss";
import { useHistory } from "react-router-dom";

interface SubTotalProps {
	value: number;
}
function Subtotal(props: SubTotalProps) {
	const history = useHistory();
	const [state, dispatch] = useStateValue();
	return (
		<div className={classes.subtotal}>
			<p>
				Subtotal ({state?.basket.length} items):
				<strong>
					{/* //? easy format for currency */}{" "}
					{`$${getBasketTotal(state?.basket)}`}
				</strong>
			</p>
			<Button variant="contained" onClick={() => history.push("/payment")} className={classes.checkoutButton}>
				Checkout
			</Button>
		</div>
	);
}

export default Subtotal;
