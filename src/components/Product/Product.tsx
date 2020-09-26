import { Button } from "@material-ui/core";
import React, { useCallback, useMemo } from "react";
import { truncate } from "../../helpers/truncate";
import { ADD_TO_BASKET } from "../../store/actionTypes";
import { useDispatchStore } from "../../store/customHooks/customHooks";
import StarRating from "../StarRating/StarRating";
import classes from "./Product.module.scss";
import { productInfo } from "./../../data/productInfo";
var faker = require("faker");

function Product() {
	const dispatch = useDispatchStore();

	//? prevent refresh
	const saveProductInfo = useMemo(() => productInfo(), []);
	const { id, title, price, rating, image } = saveProductInfo;
	//?

	// const { id, title, price, rating, image } = productInfo();

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
			<Button
				// onClick={(e) => console.log(e)}
				onClick={() => addToBasket()}
				// onClick={useBasket()}
				variant="outlined"
				color="default"
			>
				Add To Basket
			</Button>
		</div>
	);
}

export default Product;

// <div className={classes.product}>
// <img className={classes.productImage} src={image} alt=""></img>
// <div className={classes.info}>{truncate(title, 160)}</div>
// <div className={classes.rating}>
// 	<StarRating rating={rating} />
// </div>
// <div className={classes.price}>
// 	<small>$</small>
// 	<strong>{price}</strong>
// </div>
// <Button
// 	// onClick={(e) => console.log(e)}
// 	onClick={() => addToBasket()}
// 	// onClick={useBasket()}
// 	variant="outlined"
// 	color="default"
// >
// 	Add To Basket
// </Button>
// </div>
