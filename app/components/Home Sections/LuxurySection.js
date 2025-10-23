import assets from "../../assets/assets.js"
import Image from "next/image.js";
import { useRouter } from "next/navigation";


function  LuxurySection(){

  const router = useRouter();
  
  return(
    <div className="h-full bg-cover bg-center p-6 sm:p-8 border-b-4 border-neutral-200 border-dashed"
      style={{ backgroundImage: `url(${assets.luxBg.src})` }}>
      <div className="group w-[90%] sm:w-[70%] md:w-[80%] lg:w-[65%] h-full pt-4 pb-4 mx-auto pl-2 pr-2 bg-neutral-50 border-2 border-black border-solid hover:bg-black hover:shadow-[8px_8px_0px_#81FCF0]  transition all duration-400 ease-in-out">
        {/* heading div */}
        <h1 className="font-extrabold text-center text-lg md:text-2xl text-black group-hover:text-[#81FCF0] transition all duration-400 ease-in-out
">👑 THE UPGRADE YOU DESERVE <span className="text-amber-500 group-hover:text-yellow-400 transition all duration-400 ease-in-out"> ► </span> <span className="group-hover:text-[#F6FC81] transition all duration-400 ease-in-out">JEXI LUX</span> 💎</h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start gap-4 pt-24 pb-24 pl-0 pr-0 lg:pl-12 lg:pr-12">
        {/* 1st row div */}
        <div className="w-[95%] sm:w-[78%] md:w-[85%] lg:w-[52%] order-2 lg:order-1 grid grid-cols-1 gap-12 p-4">
          {/* txt div */}
            <h1 className="font-extrabold text-2xl md:text-3xl text-center sm:text-left text-white self-start">	&ldquo;<span className="text-white hover:bg-pink-600 active:black bg-pink-600 lg:bg-transparent">Velvet Seats</span>,  <span className="text-white hover:bg-sky-600 active:black bg-sky-600 lg:bg-transparent">VVIP Feels </span>🥂, For The <span className="text-white"> Main Character </span> <span className="text-zinc-900 lg:text-white hover:text-zinc-900 hover:bg-yellow-400 active:black active:bg-yellow-400 bg-yellow-400 lg:bg-transparent"> In U </span>🫵🏻 !&rdquo;</h1>
          <p className="font-bold text-white">From &ldquo;date nights in Delhi to boardroom arrivals in Bangalore&rdquo; — Jexi Lux is your statement ride. No more basic cabs. No more boring drives. Slide into leather, sip your vibe, and let the city watch you roll. Because luxury isn’t a feature — it&apos;s a lifestyle. 🚕🌃</p>
            </div>
        
          {/* image div */}
          <Image
            src={assets.carsLux}
            alt='intercity_image'
            className="order-1 lg:order-2 w-[400px] h-[210px] sm:w-[500px] sm:h-[260px] md:w-[700px] md:h-[360px] lg:w-[600px] lg:h-[310px] object-contain animate-in fade-in slide-in-from-top-8 duration-500"
          />
        
      </div>

      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start gap-4 pl-0 pr-0 lg:pl-12 lg:pr-12 pb-12">
        {/* 2nd row div */}
       
          <Image
            src={assets.carsLux2}
            alt='intercity_image'
            className="w-[350px] h-[410px] sm:w-[480px] sm:h-[580px] md:w-[550px] md:h-[670px] lg:w-[500px] lg:h-[620px] object-contain"
          />
        
        <div className="w-[95%] h-[600px] sm:w-[78%] sm:h-[500px] md:w-[80%] md:h-[500px] lg:w-[52%] lg:h-[620px] flex flex-col justify-between items-end pt-4 pb-4 pl-4 pr-4 lg:pt-4 lg:pb-0 lg:pl-4 lg:pr-4">
          {/* txt & button div */}
          <div className="grid grid-cols-1 gap-16">
             {/* txt div */}
            <h1 className="font-extrabold text-2xl md:text-3xl text-center sm:text-left text-white">	&ldquo;🛞 <span className="text-white">Wheels that Whisper </span>💨,<span className="text-black lg:text-white hover:text-black hover:bg-lime-400 active:black active:bg-lime-400 bg-lime-400 lg:bg-transparent">  &lsquo;AURA&rsquo;
 </span>✨!	&rdquo;</h1>

          <p className="font-bold text-white">💼From Boardroom to bar — arrive iconic. With Jex-Lux, you&apos;re not just riding any cab, you&apos;ve got the - Statement on Wheels 🚙 	&ldquo;Slide into comfort, cruise in class&rdquo; With Luxury Rides U &ldquo;Roll Royal	&rdquo;, 	&ldquo;Cruise with Charisma	&rdquo; and 	&ldquo;Your Exit, Elevated &rdquo;🚕🌃</p>
          </div>
          <div className="flex justify-center items-end h-32 w-full mt-1 sm:mt-2 md:mt-4 lg:mt-6">
            {/* button div */}
            <button className="bg-[#b9f152] font-extrabold sm:w-3/5 px-4 py-2 rounded text-sm sm:text-base text-black p-4 border-2 border-gray-900 border-solid hover:border-2 hover:border-black hover:bg-black hover:text-[#b9f152] hover:shadow-[8px_8px_0px_#F6FFE5] rounded-[2px] transition 100ms ease-in-out hover:cursor-pointer shadow-[8px_8px_0px_#F6FFE5] lg:shadow-none active:bg-zinc-900 lg:active:bg-[#EEF152] active:text-[#b9f152] lg:active:text-black active:shadow-[6px_6px_0px_#FFFFFF] lg:active:shadow-[6px_6px_0px_#F4F5AE] cursor-pointer " 
              onClick={() => router.push("/book-now")}>Turn Heads. Tap Here. !</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default  LuxurySection;