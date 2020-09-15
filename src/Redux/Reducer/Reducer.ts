import { ADD_TO_BASKET } from "./actionTypes";

export const initialState = {
	basket: [],
};

interface Props {
	state: { basket: [] };
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
