import useCabStore from "../store/CabStore.js";

function PaymentChoice() {
  const { paymentChoice, setPaymentChoice } = useCabStore();

  return (

    <div className="grid place-items-center h-auto mb-4 ml-0 mr-0">
      <div className="bg-white shadow-[8px_8px_0px_rgba(0,0,0,1)] rounded-none w-full mb-4 ">
        <div className="bg-gray-950 w-full border-b-4 border-r-4 border-t-2 border-l-1 border-lime-100 border-solid h-[60px] grid place-items-center">
          <h1 className="text-center text-lime-300 text-lg font-extrabold pb-2 pl-1 pr-1 md:pb-0 md:pl-0 md:pr-0">
            Payment Gateway
          </h1>
        </div>
       <div className="border-2 border-black border-solid">
        <div className="bg-sky-300 border-b-2 border-gray-700 border-dashed h-[50px] grid place-items-center">
          <h2 className="text-center text-sm md:text-base font-extrabold">
            Choose Your Payment Option
          </h2>
        </div>

        <div className="w-full grid grid-cols-1 gap-0 ">
          <div className={`transition ease-in duration-200 w-full h-[45px]
            ${paymentChoice === "cash" ? ('bg-amber-300 border-2 border-black font-bold'):('bg-white hover:bg-yellow-200 hover:font-bold hover:border-2 hover:border-black active:bg-yellow-200 active:font-bold active:border-2 active:border-black')}`}>
            {/* label cash */}
            <label className="mt-2 ml-2 flex gap-2 hover:cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="cash"
                checked={paymentChoice === "cash"}
                onChange={() => setPaymentChoice("cash")}
                className="hover:cursor-pointer"
              />
              Cash 💵
            </label>
          </div>
          <div className={`transition ease-in duration-200 w-full h-full pb-2 md:pb-0 md:h-[45px] 
          ${paymentChoice === "card" ? ('bg-amber-300 border-2 border-black font-bold'):('border-t-2 border-gray-300 bg-white hover:bg-yellow-200 hover:font-bold hover:border-2 hover:border-black active:bg-yellow-200 active:font-bold active:border-2 active:border-black')}`}>
            {/* label card */}
            <label className="mt-2 ml-2 flex gap-2 hover:cursor-pointer ">
              <input
                type="radio"
                name="payment"
                value="card"
                checked={paymentChoice === "card"}
                onChange={() => setPaymentChoice("card")}
                className="hover:cursor-pointer text-center"
              />
              <div className="flex flex-col md:flex-row"><h1>Card 💳 </h1><h1> (Powered By <span className="font-bold">Stripe</span>® ™)</h1></div>
            </label>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentChoice;
