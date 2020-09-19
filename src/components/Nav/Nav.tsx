import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../../store/customHooks/customHooks";
import classes from "./Nav.module.scss";
import { useStateValue } from "./../../store/customHooks/customHooks";
import Basket from "./../Basket/Basket";

const navInfo = [
	{ first: "Hello Guest", second: "Sign In" },
	{ first: "Returns", second: "Orders" },
	{ first: "Your", second: "Prime" },
];
function Nav() {
	const [state, dispatch] = useStateValue();
	return (
		<div className={classes.nav}>
			{navInfo.map((e, i) => (
				<div key={i} className={classes.option}>
					<span className={classes.optionLineOne}>{e.first}</span>
					<span className={classes.optionLineTwo}>{e.second}</span>
				</div>
			))}
			<Basket></Basket>
		</div>
	);
}

export default Nav;
