const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const stripe = require("stripe")(process.env.SECRET_KEY);

//API

//App Config
const app = express();

//Middle Wares
app.use(cors({ origin: true }));
app.use(express.json());

//API Routes
app.get("/", (req, res) => {
  res.status(200).send("Hello");
});
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request received ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of Currency
    currency: "INR",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//Listen command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/amazzon-clone1/us-central1/api
