import React, { createContext, useContext, useReducer } from "react";

//?Prepares data
export const StateContext = createContext({});

interface Props {
	reducer: any;
	initialState: object;
	children: JSX.Element[] | JSX.Element;
}

//? Wraps the app and provides data
export function StateProvider(props: Props) {
	const { reducer, initialState, children } = props;
	return (
		<StateContext.Provider value={useReducer(reducer, initialState)}>
			{children}
		</StateContext.Provider>
	);
}

//? Pull information from data layer
export const useStateValue = () => useContext(StateContext);
