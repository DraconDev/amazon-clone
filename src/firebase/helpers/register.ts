import { authenticate } from "../firebaseInit";

export const registerWithEmailAndPassword = (
	email: string,
	password: string
) => {
	authenticate.createUserWithEmailAndPassword(email, password);
};
