'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import assets from "../assets/assets.js"
import confetti from 'canvas-confetti';
import useCabStore from "../store/CabStore.js";

function Page(){

  const router = useRouter();
  
  const { setCashPay } = useCabStore();
  
  useEffect(() =>{

    //confetti animation
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
    });
    fire(0.2, {
      spread: 60,
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
      scalar: 1.2
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
    
    //card pay true
    setCashPay(false);
    //routing
    setTimeout(() => {
      router.push('/booking-successful');
    }, 2200);
  },[])
  
  return(
    <>
      <div className="flex flex-col justify-center items-center h-screen gap-0 fixed inset-0 z-[0] flex items-center justify-center w-full h-full bg-yellow-100">
      <div className="flex flex-col items-center gap-8 md:gap-10 bg-green-500 w-full h-full border-b-2 border-dashed border-black pt-1 sm:pt-2 md:pt-10 lg:pt-15 pb-0 sm:pb-2 md:pb-4 lg:pb-0">
        {/* rupee coin animation */}
        <Image
          src={assets.rupeeCoinAnimated}
          alt="coin animation"
          className="w-[100px] h-[100px] md:w-[150px] h-[150px] object-contain"
        />
        <h1 className="font-extrabold text-xl sm:text-2xl text-center text-white">PAYMENT SUCCESSFUL</h1>
      </div>
      <div className="w-full h-full flex flex-col items-center gap-0 pb-5 md:pb-1">
        {/* pos animation */}
        <Image
          src={assets.posAnimated}
          alt="pos animation"
          className="w-[200px] h-[200px] md:w-[250px] h-[250px] object-contain -mb-6 sm:-mb-0"
        />
        <h1 className="font-extrabold text-2xl text-center text-sm sm:text-base">Redirecting...</h1>
        <p className="flex flex-wrap font-extrabold text-2xl text-center text-sm sm:text-base pl-2 pr-2 sm:pl-0 sm:pr-0">PLEASE DO NOT REFRESH</p>
      </div>
      </div>
    </>
  );
}
export default Page;