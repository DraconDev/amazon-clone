import React from "react";
import classes from "./StarRating.module.scss";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarIcon from "@material-ui/icons/Star";

function StarRating({ rating }) {
	const stars = [];
	const CalculateRating = () => {
		// console.log("rating", rating);
		const stars = [];
		for (let index = 0; index < Math.floor(rating); index++) {
			stars.push(
				<StarIcon key={index} className={classes.starIcon}></StarIcon>
			);
		}
		if (rating % 1 >= 0.5 || !stars.length) {
			// console.log("stars", stars);
			stars.push(
				<StarHalfIcon
					key={Math.floor(rating) + 1}
					className={classes.starIcon}
				></StarHalfIcon>
			);
		}

		return stars;
	};

	return (
		<div className={classes.starRating}>
			<CalculateRating></CalculateRating>
		</div>
	);
}

export default StarRating;
