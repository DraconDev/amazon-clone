import { Button } from '@material-ui/core';
import React, { useCallback, useMemo } from 'react';
import { truncate } from '../../helpers/truncate';
import { ADD_TO_BASKET } from '../../store/actionTypes';
import { useDispatchStore } from '../../store/customHooks/customHooks';
import StarRating from '../StarRating/StarRating';
import classes from './Product.module.scss';
import { productInfo } from '../../constants/productInfo';
import { title } from 'process';
import consoleTest from '../../customHooks/console';
var faker = require('faker');

// {
// 	id?: any;
// 	title?: string;
// 	price?: number;
// 	rating?: number;
// 	image?: string;
// }
function Product(props: any) {
	const dispatch = useDispatchStore();
	const saveProductInfo = useMemo(() => productInfo(), []);
	console.log(props, ' props here');
	consoleTest(props);

	// if (props?.search) {
	// 	const { id, title, price, rating, image } = props;
	// } else {
	const { id, title, price, rating, image } =
		(props?.id && props) || saveProductInfo;

	// if (props?.id) {
	// 	const { id, title, price, rating, image } = props;
	// } else {
	// 	const { id, title, price, rating, image } = saveProductInfo;
	// }

	//  (props.length > 0) ?
	// 	const { id, title, price, rating, image } = props
	// 	:
	// 	const { id, title, price, rating, image } = saveProductInfo;

	// props.search &&  { id, title, price, rating, image } = props;

	// if (props?.search) {
	// //? prevent refresh

	// //?
	// }
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
			<div className={classes.info}>{truncate(title, 120)}</div>
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
