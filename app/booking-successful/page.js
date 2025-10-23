'use client'
import assets from "../assets/assets.js"
import TicketCard from "../components/TicketCard.js"
import Image from "next/image.js"
import {useEffect} from "react"
import OtpButton from "../components/otp/OtpButton.js"
import confetti from 'canvas-confetti'
import useCabStore from "../store/CabStore.js"


function Page(){

  const {setBooking, paymentChoice} = useCabStore();

  useEffect(() =>{

    var count = 200;
    var defaults = {
      origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      tricks: 300,
      gravity: 0.6
    });
    fire(0.2, {
      spread: 60,
      tricks: 300,
      gravity: 0.6,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
      tricks: 300,
      gravity: 0.6
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
      tricks: 300,
      gravity: 0.6
    });

    // Bottom-left confetti
    fire(0.2, {
      origin: { x: 0, y: 1 },
      spread: 60,
      startVelocity: 80,
      decay: 0.98,
      tricks: 500,
      gravity: 0.8,
    });

    // Bottom-right confetti
    fire(0.2, {
      origin: { x: 1, y: 1 },
      spread: 60,
      startVelocity: 80,
      decay: 0.98,
      tricks: 500,
      gravity: 0.8,
    });

    //setting booking to true
    if(paymentChoice !== "")
    setBooking(true);
    
  },[]);

  return(
      <div className="flex flex-col items-center justify-center ">
        {/* main div */}
        <div className=" w-full h-full bg-lime-300 flex flex-col items-center justify-center pb-4">
          <div className="w-[92%] sm:w-[85%] md:w-[75%] lg:w-[50%] h-full border-4 border-black rounded-md shadow-[9px_9px_0px_#000] mt-2 pb-2 bg-cover bg-center mb-2
          " style={{ backgroundImage: `url(${assets.cabSuccess.src})` }}>
                    {/* booking success div */}
                    <div className="flex justify-center items-start sm:items-center gap-0 sm:gap-2 md:gap-4 p-2">
                      <h1 className="font-extrabold text-lg md:text-xl md:text-3xl text-white text-center pl-2 sm:pl-0">BOOKING SUCCESSFUL</h1>
                      <Image
                          src={assets.check}
                          alt="check success"
                          unoptimized
                          className="w-[90px] h-[50px] sm:w-[80px] sm:h-[40px] md:w-[85px] h-[45px] lg:w-[70px] lg:h-[70px] object-contain md:object-fit pr-2 sm:pr-0"
                        />
                    </div>
                    <div className="w-[98%] h-[90%] sm:w-[99%] sm:h-[95%] lg:w-full md:h-full flex items-center justify-center pl-2 pr-0 md:pl-4 md:pr-2 pb-2">
                      {/* image */}
                      <Image
                        src={assets.cabSuccess}
                        alt="cab success"
                        unoptimized
                        className="w-[400px] h-[300px] sm:w-[500px] sm:h-[400px] md:w-[700px] md:h-[500px] object-cover sm:fill rounded-lg border-4 border-yellow-100 border-dashed"
                      />
                    </div>
                  </div>
        </div>
        
        <div className="border-t-2 border-gray-300 border-dashed pt-2 bg-teal-300 w-full h-full">
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