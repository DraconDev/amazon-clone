import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { authenticate } from "../../firebase/firebaseInit";

import { useGetImage } from "../../store/customHooks/customHooks";
import classes from "./Login.module.scss";

interface Props {}

function Login(props: Props) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();

	const signIn = (e: any) => {
		console.log("signIn");
		e.preventDefault();
		authenticate
			.signInWithEmailAndPassword(email, password)
			.then((user) => {
				if (user) {
					history.push("/");
				}
			})
			.catch((error) => alert(error.message));
	};

	const register = (e: any) => {
		e.preventDefault();

		authenticate
			.createUserWithEmailAndPassword(email, password)
			.then((user) => {
				if (user) {
					history.push("/");
				}
			})
			.catch((error) => alert(error.message));
	};

	return (
		<div className={classes.login}>
			<img className={classes.logo} src={useGetImage("mainLogo")} alt="" />
			<form action="" className={classes.form}>
				<h5>E-mail</h5>
				<input
					type="text"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<h5>Password</h5>
				<input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<Button
					variant="contained"
					type="submit"
					color="default"
					onClick={signIn}
				>
					Sign in
				</Button>
				<Button
					variant="contained"
					color="default"
					type="submit"
					onClick={register}
				>
					Create your account
				</Button>
				<p className={classes.signInAgreement}>
					By signing-in you agree to our Conditions of Use & Sale. Please see
					our Privacy Notice, our Cookies Notice and our Interest-Based Ads
				</p>
			</form>
		</div>
	);
}

export default Login;
