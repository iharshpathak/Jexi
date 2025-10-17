import Image from "next/image";
import assets from "../../../assets/assets.js";
import './jexi.css';

function JexiLoading() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center h-screen gradient-invert-animation gap-0 lg:gap-8 fixed inset-0 z-[9999] flex items-center justify-center w-full h-full">
      <Image
        src={assets.jexiLogo}
        alt="car animation"
        className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px] object-contain breathe-animation pt-0 md:pt-[50px] lg:pt-0"
      />

      <Image
        src={assets.carLoader}
        alt="car animation"
        width={500}
        height={500}
        className="invert-target w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px] fit -mt-20 lg:mt-0"
      />
    </div>
  );
}

export default JexiLoading;
