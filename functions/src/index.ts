import * as functions from "firebase-functions";
import { stripeKey } from "./stripe/stripeKey";
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(stripeKey);

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
console.log("stripe", stripe);

// });
//* API

//* App config
const app = express();

//* MiddleWares
app.use(cors({ origin: true }));
app.use(express.json());

//* API routes
app.get("/", (request: any, response: any) =>
	response.status(200).send("hello")
);
// app.get("/test", (request: any, response: any) =>
// 	response.status(200).send("hello test")
// );

app.post("/payments/create", async (request: any, response: any) => {
	const total = request.query.total;

	console.log("requestReceived");

	console.log("payment request received", total);
	console.log("requestBackend", request);

	const paymentIntent = await stripe.paymentIntents.create({
		amount: total,
		currency: "usd",
		// payment_method: "pk_test_BaS191rxSpqDLTQ0gv9iyrVi00VtmdtRfL",
	});
	response.status(201).send({
		clientSecret: paymentIntent.client_secret,
		cookies: "yes",
	});
});

//* Listen command
exports.api = functions.https.onRequest(app);

//? Example endpoint
// http://localhost:5001/clone-cb9d2/us-central1/api

////* firebase emulators:start
