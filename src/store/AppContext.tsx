import { createContext } from "react";

// interface appInitialState {
// 	basket: [];
// }

// interface IContextProps {
// 	state: any;
// 	dispatch: ({ type }: { type: string }) => void;
// }

// export const AppContext = createContext({} as IContextProps);

export const AppContext = createContext<any>({});

export default AppContext;
