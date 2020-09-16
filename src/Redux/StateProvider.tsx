import React, {
	createContext,
	DispatchWithoutAction,
	useContext,
	useReducer,
} from "react";

//? Default Props

interface contextProps {
	reducer: DispatchWithoutAction;
	basket: any[];
}

interface Props {
	state: { basket: any };
	action: { type: string; item: any };
}

export const StateContext = createContext({ test: "test" });

//?Prepares data
// export const StateContext = createContext({
// 	basket: [],
// 	lang: "en",
// 	theme: "dark",
// });

// export const AppContext = React.createContext<
// 	[StateContext, Dispatch<AppAction>] | null
// >(null);

interface Props {
	reducer: any;
	initialState: {};
	children: JSX.Element[] | JSX.Element;
}

//? Wraps the app and provides data
export function StateProvider(props: Props) {
	const { reducer, initialState, children } = props;
	return (
		// <StateContext.Provider value={useReducer(reducer, initialState)}>
		// 	{children}
		// </StateContext.Provider>
		<StateContext.Provider value={{ test: "test" }}>
			{children}
		</StateContext.Provider>
	);
}

//? Pull information from data layer
export const useStateValue = () => useContext(StateContext);
