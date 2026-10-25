import Stripe from "stripe";

const stripeApiKey = `${process.env.STRIPE_SECRET_KEY}`;

const stripe = new Stripe(stripeApiKey, {
  apiVersion: "2026-09-30.endive",
  typescript: true,
});

export default stripe;
