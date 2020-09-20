import { appInitialStateProps } from "../types/types";
import { ADD_TO_BASKET, REMOVE_FROM_BASKET, SET_USER } from "./actionTypes";

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
		case REMOVE_FROM_BASKET:
			const index = state.basket.findIndex((e: any) => e.id === action.id);
			let newBasket = [...state.basket];
			if (index >= 0) {
				newBasket.splice(index, 1);
			} else {
				console.log("Not in basket");
			}
			return {
				...state,
				basket: newBasket,
			};
		case SET_USER:
			return { ...state, user: action.user };
		default:
			return state;
	}
}
//?

export default appReducer;
