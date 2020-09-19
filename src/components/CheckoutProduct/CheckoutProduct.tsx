import React from "react";
import StarRating from "./../StarRating/StarRating";
import classes from "./CheckoutProduct.module.scss";
import { ItemProps } from "./../../types/types";
import { Button } from "@material-ui/core";
import { truncate } from "../../helpers/truncate";

function CheckoutProduct(props: ItemProps) {
	const { id, image, title, price, rating } = props;
	return (
		<div className={classes.checkoutProduct}>
			<img className={classes.image} src={image}></img>
			<div className={classes.info}>
				<p className={classes.title}>{title}</p>

				<div className={classes.bottom}>
					<p className={classes.price}>
						<small>$</small>
						<strong>{price}</strong>
					</p>
					<div className={classes.rating}>
						<StarRating rating={rating}></StarRating>
					</div>
				</div>
				<Button variant="contained" color="default" size="small">
					Remove from basket
				</Button>
			</div>
		</div>
	);
}

export default CheckoutProduct;
