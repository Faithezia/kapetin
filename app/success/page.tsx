import { stripe } from "@/lib/stripe";

interface SuccessPageProps {
  searchParams: Promise<{ session_id?: string }>;
}

export default async function SuccessPage({ searchParams }: SuccessPageProps) {
  const { session_id } = await searchParams;

  if (!session_id) return <p>Invalid session.</p>;

  const session = await stripe.checkout.sessions.retrieve(session_id);

  return (
    <div>
      <h1>Payment Successful!</h1>
      <p>Thank you, {session.customer_details?.name}!</p>
      <p>Email: {session.customer_details?.email}</p>
      <p>Amount paid: ${(session.amount_total ?? 0) / 100}</p>
    </div>
  );
}
