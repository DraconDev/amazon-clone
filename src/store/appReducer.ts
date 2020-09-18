import { ADD_TO_BASKET } from "./actionTypes";

// interface reducerProps {
// 	state: { basket: any };
// 	action: { type: string; item: any };
// }

//? should work
export function appReducer(state: any, action: any) {
	console.log("props", state, action);
	switch (action.type) {
		case ADD_TO_BASKET:
			return {
				...state,
				basket: [...state.basket, action.item],
			};
	}
}
//?

export default appReducer;
