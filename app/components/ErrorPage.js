"use client";
import assets from "../assets/assets.js";
import Image from "next/image.js";
import soundAssets from "../assets/sounds/soundAssets.js";
import { useRouter } from "next/navigation";
import '../globals.css';


  function ErrorPage() {
  const router = useRouter();

  const PlaySound = () => {
    const audio = new Audio(soundAssets.ErrorSound);
    audio.currentTime = 0;
    audio.play().catch((err) => {
      console.log("Autoplay blocked:", err);
    });
  };

  return (
    <div
      className="h-screen z-[9999] inset-0 fixed bg-blue-800 p-2 lg:p-8 border-[12px] border-zinc-950 border-solid bg-cover lg:bg-contain flex justify-center items-center xp-cursor"
      style={{ backgroundImage: `url(${assets.bsod.src})` }}>
      
      <div className="w-[85vw] h-[85vh] sm:w-[84vw] sm:h-[80vh] md:w-3/5 md:h-[95%] lg:w-1/2 lg:h-[90vh] bg-[#C7C5C5] flex flex-col justify-center items-center border-[12px] border-[#C7C5C5] border-solid shadow-[8px_8px_0px_#000000] lg:shadow-[12px_12px_0px_#000000] hover:shadow-[14px_14px_0px_#000000]  transition duration-200 ease-in-out lg:pt-10 lg:pb-10">
        <div className="w-full h-[8vh] bg-zinc-900 flex justify-between items-center border-2 border-black border-solid">
          <h1 className="text-lg md:text-xl lg:text-2xl font-extrabold text-left lg:text-center text-[#F5E508] pt-2 pb-2 pl-2">
            PAGE NOT FOUND !
          </h1>
          <h1
            className="text-lg md:text-xl lg:text-2xl font-bold text-center text-[#001996] p-1 bg-[#C7C5C5] shadow-[2px_2px_0px_#000000] w-[8%] md:w-[6%] lg:w-[5%] mb-1 mt-1 mr-1 xp-pointer"
            onClick={PlaySound}
          >
            X
          </h1>
        </div>

        <Image
          src={assets.Err4o4}
          alt="intercity_image"
          className="w-[800px] h-[500px] sm:w-[800px] sm:h-[400px] md:w-[800px] md:h-[500px] object-cover border-4 border-[#999999] border-solid"
        />

        <div className="w-full h-[15%] bg-zinc-900  flex justify-center items-center border-2 border-black border-solid p-2 sm:p-8">
          <button
            className="font-extrabold text-center bg-rose-600 text-black border-2 border-black border-solid p-3 sm:p-4 mt-2 mb-4 sm:mt-6 sm:mb-8 lg:mt-4 lg:mb-4 rounded-[2px] xp-pointer rounded-[2px] hover:shadow-[6px_6px_0px_#737373] shadow-[6px_6px_0px_#737373] lg:shadow-none active:shadow-[4px_4px_0px_#fee2e2]  active:text-white active:bg-fuchsia-600 transition 100ms ease-in-out"
            onClick={() => router.push("/")}
          >
            {" "}
            TAKE ME HOME{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
export default ErrorPage;