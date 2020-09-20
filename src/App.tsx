import React, { useEffect } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Checkout from "./pages/Checkout/Checkout";
import Login from "./pages/Login/Login";
import { cleanup } from "@testing-library/react";
import { SET_USER } from "./store/actionTypes";
import { useStateValue } from "./store/customHooks/customHooks";
import { authenticate } from "./firebase/firebaseInit";

function App() {
	const [state, dispatch] = useStateValue();

	useEffect(() => {
		authenticate.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch({
					type: SET_USER,
					user: authUser,
				});
			} else {
				dispatch({
					type: SET_USER,
					user: null,
				});
			}
		});
		return () => {
			cleanup;
		};
	}, []);

	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/login">
						<Login></Login>
					</Route>
					<Route path="/checkout">
						<Header></Header>
						<Checkout></Checkout>
					</Route>
					<Route path="/">
						<Header></Header>
						<Home></Home>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
