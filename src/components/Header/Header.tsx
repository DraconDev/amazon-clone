import SearchIcon from "@material-ui/icons/Search";
import { default as React } from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import classes from "./Header.module.scss";
import { useGetImage } from "./../../store/customHooks/customHooks";

function Header() {
	return (
		<div className={classes.header}>
			<Link to="/">
				<img className={classes.logo} src={useGetImage("mainLogo")} alt="" />
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
