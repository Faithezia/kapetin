import { loadStripe, Stripe } from "@stripe/stripe-js";

let stripe: Promise<Stripe | null>;
const getStripe = () => {
  if (!stripe) {
    stripe = loadStripe(process.env.NEXT_PUBLIC_PUBLISHABLE_KEY!);
  }
  return stripe;
};

export default getStripe;
