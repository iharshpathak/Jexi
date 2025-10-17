'use client'
import TicketCard from "../components/TicketCard.js"
import OtpButton from "../components/otp/OtpButton.js"

function Page(){
  return(
    <div>
      <div className="border-b-2 border-black border-dashed"><h1 className="sm:text-4xl text-2xl font-extrabold text-center bg-amber-300 pb-2 pt-2 pl-2 md:pl-0"> Your Booking 🚘</h1></div>
      <div className="pt-2 pb-2 bg-teal-300 w-full h-full">
        {/* ticket and otp div */}
        <div className="pl-3 pr-4 md:pl-0 md:pr-0">
          <TicketCard/>
        </div>
        <div className="flex justify-center items-center mb-4">
          <OtpButton/>
        </div>
      </div>
    </div>
      
  );
}

export default Page;