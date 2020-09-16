import React, {
	createContext,
	DispatchWithoutAction,
	useContext,
	useReducer,
} from "react";

//? Default properties

interface ContextProps {
	// reducer: DispatchWithoutAction;
	// basket: any[];
	// state: object;
	// action: any;
	// children: any;
	// state: any[];
	// action: object;
}

interface StateContextProps {
	// state: { basket: any };
	// action: { type: string; item: any };
}

//? apparently needed
// export const StateContext = createContext<Partial<any>>({});

//?context
export const StateContext = createContext({});

// export const StateContext = createContext<Partial<ContextProps>>({});

//?Prepares data
// export const StateContext = createContext({
// 	basket: [],
// 	lang: "en",
// 	theme: "dark",
// });

// export const AppContext = React.createContext<
// 	[StateContext, Dispatch<AppAction>] | null
// >(null);

interface StateProviderProps {
	reducer: any;
	initialState: {};
	children: JSX.Element[] | JSX.Element;
}

//? Wraps the app and provides data
export function StateProvider(props: StateProviderProps) {
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

interface testingFunctionTypes {
	cat: string;
}

function testingFunction({ ...props }: testingFunctionTypes) {
	const { cat } = props;
	console.log("object");

	return cat;
}
