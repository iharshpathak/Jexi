"use client";
import { useStripe, useElements, PaymentElement,} from "@stripe/react-stripe-js";
import { useState } from "react";
import PayButtonLoading from "./loading screens/Pay Button Loading/PayButtonLoading.js"


function CheckoutForm({ amount }) {

  const [buttonLoading, setbuttonLoading] = useState(false);

  const returnUrl =
    "https://df960589-85d8-48c5-a9ce-a7ab8ea3e8f5-00-1w3m24j9m3h09.riker.replit.dev"; //replace with env variable

  const stripe = useStripe();
  const elements = useElements();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!elements) {
      return;
    }
    const { error: submitError } = await elements.submit();
    if (submitError) {
      return;
    }
    // fields are valid, show loading
    setbuttonLoading(true);
    const res = await fetch("/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });

    if (!res.ok) {
      console.error("❌ API error:", res.status);
      const text = await res.text();
      console.error("🔍 Response text:", text);
      return;
    }

    const secretKey = await res.json();
    // console.log('🔍 clientSecret:', secretKey.clientSecret);

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret: secretKey.clientSecret,
      confirmParams: {
        return_url: `${returnUrl}/paymentSuccess`,
      },
    });

    if (error) {
      console.error("❌ Stripe error:", error.message);
    }

  }

  return (
    <>
      <h1 className="font-bold text-2xl w-full bg-yellow-500 text-center pb-2 pt-2 border-b-2 border-gray-900 border-dashed">
        Payment Checkout 💸 
      </h1>
      <div className="grid grid-cols-1 place-items-center w-full pb-4 gap-4 bg-cyan-400">
        <form onSubmit={handleSubmit} className="w-[85%] sm:w-[80%] lg:w-[40%]">
         
          <div className="border-2 border-black border-solid rounded-[12px] mt-2 shadow-[8px_8px_0px_rgba(0,0,0,1)] shadow-[8px_8px_0px_rgba(0,0,0,1)]">
            {/* border ke liye */}

            <PaymentElement />
          </div>
          <button
            className={`bg-black w-full text-white font-extrabold pt-4  rounded-[12px] shadow-[8px_8px_0px_rgba(255,255,255,1)] 
            ${buttonLoading ? 'flex items-center justify-center w-full pb-6' : 'pb-4 hover:bg-purple-500 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:text-black hover:cursor-pointer active:bg-purple-500 active:shadow-[8px_8px_0px_rgba(0,0,0,1)] active:cursor-pointer'}`}

            type="submit"
          >{buttonLoading ? (
              <PayButtonLoading />
            ) : (
              <>PAY <span className="text-lime-100">₹{amount}.00</span></>
            )}
          </button>
        </form>
      </div>
    </>
  );
}
export default CheckoutForm;
