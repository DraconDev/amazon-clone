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
	response.status(200).send("hello world")
);

//* Listen command
exports.api = functions.https.onRequest(app);
