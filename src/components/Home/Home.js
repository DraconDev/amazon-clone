import React from "react";
import classes from "./Home.module.scss";

function Home() {
	return (
		<div className={classes.home}>
			<div className={classes.container}>
				<img
					className={classes.image}
					src="https://images.unsplash.com/photo-1496170804262-975019a5cd34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
					alt=""
				></img>
			</div>
		</div>
	);
}

export default Home;
