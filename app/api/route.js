'use server';
import Stripe from 'stripe'
import { NextResponse } from 'next/server';


const stripe = new Stripe(process.env.STRIPE_API_KEY); //🔐 replace this with env variable

export async function POST(req) {
  const { amount } = await req.json();

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: 'inr',
      automatic_payment_methods: { enabled: true },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}


