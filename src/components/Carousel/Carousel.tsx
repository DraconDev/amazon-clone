import React from "react";
import Carousel from "react-material-ui-carousel";
import { Button, Paper } from "@material-ui/core";
import { useStore } from "./../../store/customHooks/customHooks";
import classes from "./Carousel.module.scss";

function MainCarousel() {
	const images = useStore().imageLinks.carousel;
	// var items = [
	// 	{
	// 		name: "Random Name #1",
	// 		description: "Probably the most random thing you have ever seen!",
	// 	},
	// 	{
	// 		name: "Random Name #2",
	// 		description: "Hello World!",
	// 	},
	// ];

	return (
		<Carousel className={classes.carousel}>
			{images.map((item: object, i: number) => (
				<CarouselElement key={i} {...item} />
			))}
		</Carousel>
	);
}

function CarouselElement(props: any) {
	console.log("props", props);
	return (
		<Paper className={classes.carouselItem}>
			{/* <h2>{props.name}</h2> */}
			<img
				src={props.image}
				alt="carouselItem"
				className={classes.carouselImage}
			/>
			<p>{props.description}</p>

			{/* <Button className="CheckButton">Check it out!</Button> */}
		</Paper>
	);
}

export default MainCarousel;
