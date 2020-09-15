import React from "react";
import classes from "./Subtotal.module.scss";
import { Button } from "@material-ui/core";
const CurrencyFormat = require("react-currency-format");

interface Props {
	value: number;
}
//todo
function getBasketTotal(total: number) {}

function Subtotal(props: Props) {
	console.log("props", props);
	const { value } = props;
	return (
		<div className={classes.subtotal}>
			<CurrencyFormat
				renderText={() => (
					<React.Fragment>
						<p>
							Subtotal (0 items): <strong>0</strong>
						</p>
						<small className={classes.gift}>
							<input type="checkbox" /> this order contains a gift
						</small>
					</React.Fragment>
				)}
				// value={}
				decimalScale={2}
				// todo
				value={getBasketTotal(value)}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			></CurrencyFormat>
			<Button variant="contained">Proceed to checkout</Button>{" "}
		</div>
	);
}

export default Subtotal;
