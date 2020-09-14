import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import Nav from "../Nav/Nav";
import classes from "./Header.module.scss";

function Header() {
	return (
		<div className={classes.header}>
			<img
				className={classes.logo}
				src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
				alt=""
			/>
			<div className={classes.search}>
				<input className={classes.searchInput} type="text" />
				{/* <Logo></Logo> */}
				<SearchIcon className={classes.searchIcon}></SearchIcon>
			</div>
			<Nav></Nav>
		</div>
	);
}

export default Header;