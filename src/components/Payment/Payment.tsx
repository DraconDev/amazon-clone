import React, { useContext, useEffect, useState } from "react";
import { useStore } from "../../store/customHooks/customHooks";
import classes from "./Payment.module.scss";
import BasketItems from "./../BasketItem/BasketItems";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import {
	getBasketTotal,
	useBasketTotal,
	useBasketTotalNumber,
} from "../../store/selectors";
import { Button } from "@material-ui/core";
import axiosConfig from "../../axios/axiosConfig";
import { useHistory } from "react-router-dom";
import AppContext from "../../store/AppContext";
import useHandleCardSubmit from "../../stripe/helpers/useHandleCardSubmit";

var faker = require("faker");

function Payment() {
	// console.log("stripeInit()", stripeInit
	const stripe = useStripe();
	const elements = useElements();
	const history = useHistory();

	const [basket, setBasket] = useState(useBasketTotalNumber());
	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(null);
	const [processing, setProcessing] = useState(false);
	const [succeeded, setSucceeded] = useState(false);
	const [clientSecret, setClientSecret] = useState("");

	useEffect(() => {
		const getClientSecret = async () => {
			const response = await axiosConfig({
				method: "post",
				url: `/payments/create?total=${basket * 100}`,
			});
			console.log("basket", basket);
			console.log("response", response);
			setClientSecret(response.data.clientSecret);
		};
		getClientSecret();
	}, [basket]);

	console.log("clientSecret", clientSecret);

	async function handleSubmit(event: any) {
		event.preventDefault();
		setProcessing(true);
		console.log("elements", elements);

		const payload = await stripe
			?.confirmCardPayment(clientSecret, {
				payment_method: {
					card: elements?.getElement(CardElement) as any,
				},
			})
			// .then(({ paymentIntent }) => {
			.then((e) => {
				console.log("paymentIntent", e?.paymentIntent);
				setSucceeded(true);
				setError(null);
				setProcessing(false);
				history.replace("/orders");
			});
		console.log("payload:", payload);
	}

	async function handleSubmit2(event: React.FormEvent) {
		event.preventDefault();

		const { error, paymentMethod }: any = await stripe?.createPaymentMethod({
			type: "card",
			card: elements?.getElement(CardElement) as any,
		});

		if (!error) {
			console.log("paymentMethod", paymentMethod);
		}
	}

	function handleChange(event: any) {
		setDisabled(event.empty);
		setError(event.error ? event.error.message : "");
	}

	return (
		<div className={classes.payment}>
			<div className={classes.container}>
				<h1 className={classes.top}>
					Checkout ({useStore().basket.length || 0} items)
				</h1>
				<div className={classes.section}>
					<div className={classes.title}>
						<h3 className={classes.deliveryAddress}>Delivery Address</h3>
					</div>
					<div className={classes.address}>
						<p className={classes.email}>{useStore().user?.email}</p>

						{faker.fake("{{address.streetAddress}}")}
					</div>
				</div>
				<div className={classes.section}>
					<div className={classes.title}>
						<h3 className={classes.review}>Review items</h3>
					</div>
					<div className={classes.items}>
						<BasketItems></BasketItems>
					</div>
				</div>
				<div className={classes.section}>
					<div className={classes.title}>
						<h3 className={classes.method}>Payment method</h3>
						{/* <div className={classes.test}>payment</div> */}
					</div>
					<div className={classes.details}>
						<form className={classes.card} onSubmit={handleSubmit}>
							<CardElement onChange={handleChange}></CardElement>
						</form>
						<div className={classes.totalAndOrder}>
							<div className={classes.price}>{useBasketTotal()}</div>
							<Button
								variant="contained"
								color="default"
								disabled={processing || succeeded}
								// disabled={processing}
								size="small"
								onClick={handleSubmit}
							>
								{processing ? "processsing" : "Buy now"}
							</Button>
						</div>
					</div>
				</div>
				<div className={classes.test}>
					Test Card Number: 4242 4242 4242 4242 11 22 22222
				</div>
			</div>
		</div>
	);
}

export default Payment;
