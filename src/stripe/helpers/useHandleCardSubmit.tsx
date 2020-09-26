import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";

export async function useHandleCardSubmit(event: React.FormEvent) {
	console.log("test");
	const stripe = useStripe();
	const elements = useElements();
	event.preventDefault();

	const { error, paymentMethod }: any = await stripe?.createPaymentMethod({
		type: "card",
		card: elements?.getElement(CardElement) as any,
	});

	if (!error) {
		console.log("paymentMethod", paymentMethod);
	}
}

export default useHandleCardSubmit;
