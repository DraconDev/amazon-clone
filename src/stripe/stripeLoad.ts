import { loadStripe } from "@stripe/stripe-js";
import { stripeKey } from "./stripeKey";

export async function stripeInit() {
	const stripe = await loadStripe(stripeKey);
	return stripe;
}

export default stripeInit;
