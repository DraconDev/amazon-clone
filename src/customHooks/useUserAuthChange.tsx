import React, { useEffect } from "react";
import { authenticate } from "../firebase/firebaseInit";
import { SET_USER } from "../store/actionTypes";
import { useStateValue } from "../store/customHooks/customHooks";

function useUserAuthChange() {
	const [state, dispatch] = useStateValue();

	useEffect(() => {
		authenticate.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch({
					type: SET_USER,
					user: authUser,
				});
			} else {
				dispatch({
					type: SET_USER,
					user: null,
				});
			}
		});
	}, [dispatch]);
}

export default useUserAuthChange;
