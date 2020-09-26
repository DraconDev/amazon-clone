import React from "react";
import { useStore } from "../../store/customHooks/customHooks";
import Product from "../Product/Product";
import classes from "./Search.module.scss";

function Search() {
	return (
		<div className={classes.search}>
			{useStore().search.map((e: any) => (
				<Product {...e}></Product>
			))}
		</div>
	);
}

export default Search;
