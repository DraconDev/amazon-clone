import { Button } from "@material-ui/core";
import React from "react";
import StarRating from "../StarRating/StarRating";
import classes from "./Product.module.scss";
interface Props {
	title: string;
	price: number;
	rating: number;
	image: string;
}

function Product(props: Props) {
	const { title, price, rating, image } = props;
	return (
		<div className={classes.product}>
			<div className={classes.info}>
				<p className={classes.price}>{title}</p>
				<small>$</small>
				<strong>{price}</strong>
			</div>
			<div className={classes.rating}>
				<StarRating rating={rating} />
			</div>
			<img className={classes.productImage} src={image} alt=""></img>
			<Button variant="outlined" color="default">
				Add To Basket
			</Button>
		</div>
	);
}

export default Product;
