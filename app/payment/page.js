"use client";
import useCabCategoryStore from "../store/CabCategory.js";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/CheckoutFrom.js";
import { useEffect, useState } from "react";
import LoadingScreen from "../components/loading screens/Retro Loading Screen/Loading.js";
import AmountNil from "../components/AmoutNil.js";

const stripePubKey =
  "pk_test_51RcqANRtR0nejU24WLE65bnsteSfJnyeAGngo7LY3mrRA0PCd4JOXTbfzzPB6zuK9DyCC5cAsJO0OARHyl97SrD700JmC76G6F"; // 🔐 Use env variable

const stripePromise = loadStripe(stripePubKey, {
  developerTools: { assistant: { enabled: false } },
}); // dev tools disabled

function Page() {
  const { fareRange, cabCategory } = useCabCategoryStore();
  // const Amount = fareRange?.[cabCategory]?.max ?? 0;
  const Amount = 500; //testing purpose
  const [clientSecret, setClientSecret] = useState(null);

  useEffect(() => {
    if (Amount === null || Amount === undefined || Amount <= 0) return;

    fetch("/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: Amount }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [Amount]);

  const fontConfig = {
    fonts: [
      {
        family: "Syne",
        src: "https://fonts.googleapis.com/css2?family=Syne:wght@400..800&display=swap",
      },
    ],
  };

  const appearance = {
    theme: "none",
    variables: {
      fontFamily: "Syne, sans-serif",
      fontLineHeight: "1.4",
      borderRadius: "12px",
      colorPrimary: "#000",
      colorBackground: "#E8FF73",
      colorText: "#111",
      colorDanger: "#ff0033",
      spacingUnit: "6px",
      focusOutline: "2px solid #000000",
      focusBoxShadow: "none",
    },
    rules: {
      ".Label": {
        fontFamily: "Syne, sans-serif",
        fontWeight: "900",
        fontSize: "16px",
        color: "#000000",
      },
      ".PaymentElement": {
        border: "2px solid #000",
        boxShadow: "8px 8px 0px rgba(0,0,0,1)",
        padding: "16px",
        backgroundColor: "#FFFFFF",
      },
      ".Input, .CheckboxInput, .CodeInput": {
        fontFamily: "Syne, sans-serif",
        fontWeight: "800",
        backgroundColor: "#FFFFFF",
        boxShadow: "8px 8px 0px rgba(0,0,0,1)",
        border: "2px solid #000",
        padding: "12px",
        transition: "none",
      },
      ".Tab, .PickerItem": {
        fontFamily: "Syne, sans-serif",
        fontWeight: "800",
        backgroundColor: "#FFFFFF",
        boxShadow: "8px 8px 0px rgba(0,0,0,1)",
        border: "2px solid #000",
        transition: "none",
      },
    },
  };

  const options = {
    clientSecret,
    appearance,
    ...fontConfig,
  };

  if (Amount === null || Amount === undefined || Amount <= 0) {
    return <AmountNil />;
  }

  if (!clientSecret)
    return (
      <div>
        <LoadingScreen />
      </div>
    ); //  Wait for secret

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm amount={Amount} />
    </Elements>
  );
}

export default Page;
