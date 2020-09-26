import React from "react";
import classes from "./Order.module.scss";
import moment from "moment";
import { Typography } from "@material-ui/core";
import CheckoutProduct from "./../CheckoutProduct/CheckoutProduct";
import { currencyFormat } from "../../store/selectors";

function Order({ order }: any) {
	console.log("order", order);
	return (
		<div className={classes.order}>
			<Typography>
				{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}
			</Typography>
			<Typography className={classes.order}>
      {`$${currencyFormat(order.data.amount / 100)}`}
				{/* <small>{order.id}</small> */}
			</Typography>
			{order.data.basket.map((item: any) => (
				<CheckoutProduct {...item}></CheckoutProduct>
			))}
			
		</div>
	);
}

export default Order;
