import React from "react";
import { Link } from "react-router-dom";
import classes from "./Nav.module.scss";
import { useStateValue } from "./../../store/customHooks/customHooks";
import Basket from "./../Basket/Basket";
import { authenticate } from "../../firebase/firebaseInit";

const navInfo = [
	{ first: "Hello Guest", second: "Sign In" },
	{ first: "Returns &", second: "Orders" },
	{ first: "Your", second: "Prime" },
];
function Nav() {
	const [{ basket, user }, dispatch] = useStateValue();

	function handleAuthentication() {
		if (user) {
			authenticate.signOut();
		}
	}
	return (
		<div className={classes.nav}>
			<Link to={`${!user && "/login"}`}>
				<div
					className={`${classes.option} ${classes.login}`}
					onClick={handleAuthentication}
				>
					<span className={classes.optionLineOne}>{"Hello"}</span>
					<span className={classes.optionLineTwo}>
						{!user ? "Sign In" : "Sign out"}
					</span>
				</div>
			</Link>
			<div className={`${classes.option} ${classes.orders}`}>
				<span className={classes.optionLineOne}>{"Returns"}</span>
				<span className={classes.optionLineTwo}>{"Orders"}</span>
			</div>
			<div className={`${classes.option} ${classes.premium}`}>
				<span className={classes.optionLineOne}>{"Your"}</span>
				<span className={classes.optionLineTwo}>{"Prime"}</span>
			</div>
			<Basket></Basket>
		</div>
	);
}

export default Nav;
