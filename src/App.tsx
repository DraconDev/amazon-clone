import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Checkout from "./pages/Checkout/Checkout";
import Login from "./components/Login/Login";

function App() {
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
