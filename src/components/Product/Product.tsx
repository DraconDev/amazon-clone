import React from "react";
import StarRating from "../StarRating/StarRating";
import classes from "./Product.module.scss";
import { Button } from "@material-ui/core";

const productInfo = {
	title: "Placeholder",
	price: 20,
	rating: null,
};

function Product() {
	const { title, price, rating } = productInfo;
	return (
		<div className={classes.product}>
			<div className={classes.info}>
				<p className={classes.price}>{title}</p>
				<small>$</small>
				<strong>{price}</strong>
			</div>
			<div className={classes.rating}>
				<StarRating rating={rating || Math.random() * 5} />
			</div>
			<img
				className={classes.productImage}
				src={`https://picsum.photos/900/900?random=${Math.floor(
					Math.random() * 10 + 1
				)})`}
				alt=""
			></img>
			<Button variant="outlined" color="default">
				Add To Basket
			</Button>
		</div>
	);
}

export default Product;
