'use client'
import TicketCard from "../components/TicketCard.js"
import PaymentChoice from "../components/paymentChoice.js"
import useCabStore from "../store/CabStore.js"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

function pay(){
  
  const router = useRouter();

  const { paymentChoice, setPaymentChoice, setOtp } = useCabStore();

  //reset payment choice on page load, i.e new payments
  useEffect(() =>{
     setPaymentChoice("");

    //setting 4 digit otp
    setOtp(Math.floor(1000 + Math.random() * 9000));
  },[]);

  
//booking button function
  function handleBooking(){
    if(paymentChoice === ""){
      toast("Please Choose A Payment Option !", {
        icon: '💰',
        style: {
          backgroundColor: '#E5FFE6',
          color: '#000000',
          fontWeight: '800',
          boxShadow: '8px 8px 0px #000',
          border: '4px solid #33FFA7', 
          borderRadius: '8px',
        },
      });
    }else if(paymentChoice === "cash"){
      router.push('/booking-successful');
    }else{
      router.push('/payment');
    }
  }

  return(
    <>
        <div className="bg-indigo-400">
              <div className="border-b-2 border-black border-dashed mb-2"><h1 className="sm:text-4xl text-2xl font-extrabold md:text-center bg-amber-300 pb-2 pt-2 pl-2 md:pl-0"> Payment & Booking Confirmation</h1></div>

          <div className="grid place-items-center h-auto pt-2 pb-4">
            {/* bgdiv */}
          <div className=" w-[90%] md:w-[80%] bg-neutral-100 shadow-[8px_8px_0px_rgba(0,0,0,1)] rounded-md pl-3 pr-4 md:pl-9 md:pr-9 pt-2">
                      {/* inner div */}
                    <div>
                    <TicketCard />
                    </div>
                    <div className="border-t-2 border-gray-300 border-dashed pt-2">
                       {/* <PaymentChoice /> */}
                      <PaymentChoice />
                    </div>
                 </div>
          </div>
          <div className="w-full h-full mt-2">
            {/* button div */}
          <button onClick={handleBooking}
                  className="w-full bg-[#b5004a] text-sm sm:text-base text-white font-extrabold p-4 border-2 border-black border-solid hover:border-4 hover:border-black hover:text-black hover:shadow-[4px_4px_0px_#000] hover:bg-yellow-300 active:bg-yellow-300 transition-all duration-100 rounded-none cursor-pointer hover:rounded-sm hover:w-[99.9%] font-extrabold
            active:border-4 active:border-black active:text-black active:rounded-sm active:shadow-[4px_4px_0px_#000]"
                >
                  Book Now 🚘
                </button>
          </div>
        </div>
    </>
  );
}
export default pay