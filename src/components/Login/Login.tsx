import React from "react";
import { useGetImage } from "../../store/customHooks/customHooks";
import classes from "./Login.module.scss";

interface Props {}

function Login(props: Props) {
	return (
		<div className={classes.login}>
			<img className={classes.logo} src={useGetImage("mainLogo")} alt="" />
		</div>
	);
}

export default Login;
