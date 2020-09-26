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
			<Typography>{`Order Id: ${order?.id}`}</Typography>
			<Typography>
				{`Order Date: ${moment
					.unix(order.data.created)
					.format("MMMM Do YYYY, h:mma")}`}
			</Typography>
			<Typography className={classes.amount}>
				{`Order Total: $${currencyFormat(order.data.amount / 100)}`}
				{/* <small>{order.id}</small> */}
			</Typography>
			{order.data.basket.map((item: any) => (
				<CheckoutProduct {...item} hideButton={true}></CheckoutProduct>
			))}
		</div>
	);
}

export default Order;
