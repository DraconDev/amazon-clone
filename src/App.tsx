import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Checkout from "./pages/Checkout/Checkout";

function App() {
	return (
		<Router>
			<div className="app">
				<Header></Header>
				<Switch>
					<Route path="/checkout">
						<Checkout
							imageLink={
								"https://images.unsplash.com/photo-1526860474862-d2c1d76aed1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
							}
						></Checkout>
					</Route>
					<Route path="/">
						<Home></Home>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
