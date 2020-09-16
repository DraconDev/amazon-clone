import { ADD_TO_BASKET } from "./actionTypes";

export const initialState = {
	basket: [],
};

// ex1port const initialState = [];

interface Props {
	state: { basket: any };
	action: { type: string; item: any };
}

function reducer(props: Props) {
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
