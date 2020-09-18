import React from "react";
import classes from "./Subtotal.module.scss";
import { Button } from "@material-ui/core";
import { useStore } from "../../store/customHooks/customHooks";
import { useStateValue } from "./../../store/customHooks/customHooks";
const CurrencyFormat = require("react-currency-format");

interface SubTotalProps {
	value: number;
}
//todo
function getBasketTotal(basket: any) {
	console.log("e", basket);
	if (basket.length > 0) {
		//? 0 at the end is the initial value of accumulator
		return basket.reduce(
			(acc: number, e: { price: number }) => acc + e.price,
			0
		);
	} else {
		return 0;
	}
}

function Subtotal(props: SubTotalProps) {
	const [state, dispatch] = useStateValue();
	console.log("state", state.basket);

	console.log("props", props);
	const { value } = props;
	return (
		<div className={classes.subtotal}>
			{/* {new Intl.NumberFormat("de-DE").format(getBasketTotal(state.basket))} $ */}
			<p>
				Subtotal ({state.basket.length} items):{" "}
				<strong>
					{new Intl.NumberFormat("de-DE").format(getBasketTotal(state.basket))}$
				</strong>
				{/* <p>{getBasketTotal(state.basket)}</p> */}
			</p>
			{/* <CurrencyFormat
				renderText={() => (
					<React.Fragment>
						<p>
							Subtotal ({state.basket.length} items): <strong>{value}$</strong>
							<p>{getBasketTotal(state.basket)}</p>
						</p>
						<small className={classes.gift}>
							<input type="checkbox" /> this order contains a gift
						</small>
					</React.Fragment>
				)}
				// value={}
				decimalScale={2}
				// todo
				value={getBasketTotal(state.basket)}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			></CurrencyFormat> */}
			<Button variant="contained">Proceed to checkout</Button>{" "}
		</div>
	);
}

export default Subtotal;
