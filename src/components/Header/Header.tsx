import SearchIcon from "@material-ui/icons/Search";
import { default as React } from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import classes from "./Header.module.scss";

function Header() {
	return (
		<div className={classes.header}>
			<Link to="/">
				<img
					className={classes.logo}
					src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
					alt=""
				/>
			</Link>
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
