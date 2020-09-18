import React, { createContext, useContext, useReducer } from "react";
import AppContext from "./AppContext";

interface StateProviderProps {
	reducer: any;
	initialState: any;
	children: JSX.Element[] | JSX.Element;
}

export function StateProvider(props: StateProviderProps) {
	const { reducer, initialState, children } = props;
	return (
		<AppContext.Provider value={useReducer(reducer, initialState)}>
			{children}
		</AppContext.Provider>
	);
}
