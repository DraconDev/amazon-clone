import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import stripeKey from "./stripeKey";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(stripeKey);

export function StripeWrapper({ children }: any) {
	return <Elements stripe={stripePromise}>{children}</Elements>;
}

export default StripeWrapper;
