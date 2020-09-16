import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import StarRating from "../StarRating/StarRating";
import { StateContext } from "./../../Redux/StateProvider";
import classes from "./Product.module.scss";

interface productProps {
	title: string;
	price: number;
	rating: number;
	image: string;
	id?: string;
}

//? Desctructure later with types
// function Product(props: productProps) {
// 	const { id, title, price, rating, image } = props;

//? Desctructure with types
function Product({ id, title, price, rating, image }: productProps) {
	// const { id, title, price, rating, image } = props;
	// console.log("useContext(StateContext", useContext(StateContext));

	// export const AppContext = React.createContext<[StateContext, Dispatch<AppAction>] | null>(null);

	const test = useContext(StateContext);

	const appContext = useContext(StateContext);
	// const [state, dispatch] = appContext;
	console.log("appContext", appContext);

	// const useTheme = () => React.useContext(StateContext);
	// const [state, dispatch] = useTheme();
	console.log("test", test);
	// console.log("useTheme", useTheme);
	// const [[], dispatch: any] = useContext(StateContext);

	// function addToBasket() {
	// 	dispatch({
	// 		type: ADD_TO_BASKET,
	// 		item: {
	// 			id: id,s
	// 			title: title,
	// 			image: image,
	// 			price: price,
	// 			rating: rating,
	// 		},
	// 	});
	// 	return {};
	// }

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
