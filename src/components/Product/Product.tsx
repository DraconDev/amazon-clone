import { Button } from "@material-ui/core";
import React from "react";
import { truncate } from "../../helpers/truncate";
import { ADD_TO_BASKET } from "../../store/actionTypes";
import { useDispatchStore } from "../../store/customHooks/customHooks";
import StarRating from "../StarRating/StarRating";
import classes from "./Product.module.scss";
import { productInfo } from "./../../data/productInfo";
var faker = require("faker");

function Product() {
	console.log(
		faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}")
	);

	console.log(
		faker.fake(
			"{{commerce.price}}, {{commerce.productMaterial}} {{commerce.productDescription}}"
		)
	);
	const dispatch = useDispatchStore();
	const { id, title, price, rating, image } = productInfo();
	function addToBasket() {
		return dispatch({
			type: ADD_TO_BASKET,
			item: { id, title, image, price, rating },
		});
	}
	return (
		<div className={classes.product}>
			<img className={classes.productImage} src={image} alt=""></img>
			<div className={classes.info}>{truncate(title, 160)}</div>
			<div className={classes.rating}>
				<StarRating rating={rating} />
			</div>
			<div className={classes.price}>
				<small>$</small>
				<strong>{price}</strong>
			</div>
			<Button onClick={() => addToBasket()} variant="outlined" color="default">
				Add To Basket
			</Button>
		</div>
	);
}

export default Product;
