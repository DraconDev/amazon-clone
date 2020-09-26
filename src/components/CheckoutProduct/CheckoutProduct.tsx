import React, { useContext } from "react";
import StarRating from "./../StarRating/StarRating";
import classes from "./CheckoutProduct.module.scss";
import { ItemProps } from "./../../types/types";
import { Button } from "@material-ui/core";
import { truncate } from "../../helpers/truncate";
import { useStateValue } from "./../../store/customHooks/customHooks";
import { REMOVE_FROM_BASKET } from "../../store/actionTypes";
import { AppContext } from "./../../store/AppContext";

function CheckoutProduct(props: ItemProps) {
	const [state, dispatch] = useContext(AppContext);

	// interface remoteFromBasketTypes {}
	// console.log("CheckoutProduct Props", props);

	function removeFromBasket() {
		return dispatch({ type: REMOVE_FROM_BASKET, id: id });
	}

	const { id, image, title, price, rating } = props;
	return (
		<div className={classes.checkoutProduct}>
			<img className={classes.image} src={image}></img>
			<div className={classes.info}>
				<div className={classes.description}>{title}</div>

				<div className={classes.rating}>
					<StarRating rating={rating}></StarRating>
				</div>
				<div className={classes.itemInfo}>
					<p className={classes.price}>
						<small>$</small>
						<strong>{price}</strong>
					</p>
				</div>
				<div className={classes.buttons}>
					{!props?.hideButton && (
						<Button
							variant="contained"
							color="default"
							size="small"
							onClick={() => removeFromBasket()}
						>
							Remove
						</Button>
					)}
				</div>
			</div>
		</div>
	);
}

export default CheckoutProduct;
