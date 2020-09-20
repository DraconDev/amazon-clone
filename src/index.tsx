import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { StateProvider } from "./store/StateProvider";
import appInitialState from "./store/appInitialState";
import { appReducer } from "./store/appReducer";

ReactDOM.render(
	<React.StrictMode>
		<StateProvider initialState={appInitialState} reducer={appReducer}>
			<App />
		</StateProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
