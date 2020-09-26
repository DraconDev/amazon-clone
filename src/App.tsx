import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Payment from "./components/Payment/Payment";
import useUserAuthChange from "./customHooks/useUserAuthChange";
import Checkout from "./pages/Checkout/Checkout";
import Login from "./pages/Login/Login";
import StripeWrapper from "./stripe/stripeWrapper";

function App() {
	useUserAuthChange();
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
					<Route path="/payment">
						<Header></Header>{" "}
						<StripeWrapper>
							<Payment />
						</StripeWrapper>
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
