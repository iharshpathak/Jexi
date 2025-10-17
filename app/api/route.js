'use server';
import Stripe from 'stripe'
import { NextResponse } from 'next/server';


const stripe = new Stripe("sk_test_51RcqANRtR0nejU24bmMSzuqfIv4aclqOlTVLxcrEk95xR34hSDcq4pzJfVu50s02ry8ON7K19KFitrJRB4IWtlkm00n5S7KfL1"); //replace this with env variable

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


