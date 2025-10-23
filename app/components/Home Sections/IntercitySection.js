import assets from "../../assets/assets.js";
import Image from "next/image";
import { useRouter } from "next/navigation";

function IntercitySection(){
  
  const router = useRouter();
  
  return(
    <div className="bg-purple-400 p-6 sm:p-8 border-b-4 border-gray-900 border-dashed">
      <div className="w-[90%] sm:w-[70%] md:w-[80%] lg:w-[50%] h-full pt-4 pb-4 mx-auto bg-black pl-2 pr-2">
        {/* heading div */}
        <h1 className="font-extrabold text-center text-lg md:text-2xl text-white hover:text-yellow-300">INTERCITY ➡️ THE JEXI WAY 🚀</h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 pt-6 pb-6 h-full">
        {/* inner div */}
          {/* image div */}
          <Image
            src={assets.i1}
            alt='intercity_image'
            className="w-[400px] h-[350px] sm:w-[600px] sm:h-[550px] md:w-[700px] md:h-[650px] lg:w-[600px] lg:h-[600px] object-cover border-2 border-black border-solid rounded-sm shadow-[8px_8px_0px_#000]"
          />
          <div className="flex flex-col justify-between items-end w-[350px] h-[450px] sm:w-[600px] sm:h-[380px]  md:w-[700px] md:h-[350px] lg:w-[800px] lg:h-[400px] p-4">
            {/* txt, para and button div */}
            <div className="grid grid-cols-1 gap-14">
              {/* txt and para div */}
              <h1 className="font-extrabold text-2xl md:text-3xl text-left sm:text-center">&ldquo;<span className="hover:text-rose-300 hover:bg-black active:text-rose-300 active:bg-black text-rose-300 lg:text-black bg-black lg:bg-transparent">Long Roads</span>,<span className="hover:text-yellow-300 hover:bg-black active:text-yellow-300 active:bg-black text-yellow-300 lg:text-black bg-black lg:bg-transparent"> Loud Playlists</span>, & <span className="hover:text-lime-300 hover:bg-black active:text-lime-300 active:bg-black text-lime-300 lg:text-black bg-black lg:bg-transparent"> Zero Stress</span> !&rdquo;</h1>
              <p className="font-bold text-gray-900">From Gorakhpur to Goa, we’ve got your back. Book comfy, ride classy, arrive legendary.Skip the sleeper bus, ride in style 🚗💨From city lights to starry nights — Jexi’s got you 🚕🌃</p>
              </div>
            <div className="flex justify-center items-end h-32 w-full mt-1 sm:mt-2 md:mt-4 lg:mt-6">
              {/* button div */}
              <button className="bg-orange-500 font-extrabold sm:w-3/5 px-4 py-2 rounded text-sm sm:text-base text-black font-extrabold p-4 border-2 border-gray-900 border-solid hover:border-2 hover:border-black hover:text-white hover:shadow-[8px_8px_0px_#000] rounded-[2px] transition 100ms ease-in-out hover:cursor-pointer shadow-[8px_8px_0px_#000] lg:shadow-none active:text-white active:bg-amber-500 active:shadow-[6px_6px_0px_#000]" onClick={() => router.push("/book-now")}>Plan Your Escape !</button>
            </div>
            </div>
      </div>
    </div>
  );
}
export default IntercitySection;