import { ADD_TO_BASKET } from "./actionTypes";

export const initialState: any = {
	basket: [],
};

// ex1port const initialState = [];

interface reducerProps {
	state: { basket: any };
	action: { type: string; item: any };
}

function reducer(props: reducerProps) {
	const { state, action } = props;
	switch (action.type) {
		case ADD_TO_BASKET:
			return {
				...state,
				basket: [...state.basket, action.item],
			};
	}
}

export default reducer;
