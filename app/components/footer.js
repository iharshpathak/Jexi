import assets from "../assets/assets.js";
import Image from "next/image";

const Footer = () => {
  return (
  
    <div className="bg-gray-950 text-yellow-50 flex flex-col items-center gap-10 p-5 px-[8vw] pt-10 ">
      
      <div className="sm:w-full sm:grid sm:grid-cols-[2fr_1fr_1fr] sm:gap-[80px] flex flex-col gap-[35px]">
        
        <div className="flex flex-col items-start gap-5">
          <Image className="w-2/4 h-2/4 sm:w-3/4 sm:h-3/4" src={assets.jexiBlrLogo} alt="Jexi Logo"/>
          <p>"Zoom into the future with Jexi — Your Smart Taxi. Whether you're vibing on an e-bike, cruising in an EV, or just need a quick ride across town, we’ve got the wheels to match your mood. Built for the bold and styled for everyone, Jexi blends speed, sustainability, and serious swagger. Tap in, ride out, and let the journey be as fresh as your playlist !"</p>
          <div className="w-[40px] mr-[15px] flex gap-4 cursor-pointer">
            <Image className="hover:scale-110 hover:shadow-[2px_2px_0px_rgba(255,255,255,1)] active:bg-[#00E1EF] rounded-full transition-all duration-100 ease-in cursor-pointer" width={44} height={44} src={assets.igIcon} alt="IG"/>
            <Image className="hover:scale-110  hover:shadow-[2px_2px_0px_rgba(255,255,255,1)] active:bg-[#00E1EF] rounded-full transition-all duration-100 ease-in cursor-pointer" width={44} height={44} src={assets.xIcon} alt="X"/>
            <Image className="hover:scale-110 hover:shadow-[2px_2px_0px_rgba(255,255,255,1)] active:bg-[#00E1EF] rounded-full transition-all duration-100 ease-in cursor-pointer" src={assets.linkedinIcon} width={44} height={44} alt="LinkedIn"/>
          </div>
        </div>
        <div className="flex flex-col items-start gap-5 ">
          <h2 className="text-white font-extrabold">COMPANY</h2>
          <ul>
            <li className="list-none mb-2 cursor-pointer font-bold hover:text-cyan-200" >Home</li>
            <li className="list-none mb-2 cursor-pointer font-bold hover:text-indigo-200">About Us</li>
            <li className="list-none mb-2 cursor-pointer font-bold hover:text-violet-200">Delivery</li>
            <li className="list-none mb-2 cursor-pointer font-bold hover:text-pink-200">Privacy Policy</li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-white font-extrabold">GET IN TOUCH</h2>
          <ul>
            <li className="list-none mb-2 cursor-pointer font-bold">+1-212-456-7890</li>
            <li className="list-none mb-2 cursor-pointer font-bold">contact@jexi.com</li>
          </ul>
        </div>
      </div>
      <hr className="w-full h-0.5 my-5 border-none bg-gradient-to-r from-cyan-200 via-violet-200 to-pink-200" />
        <p className="text-center">Copyright 2025 © Jexi.com - All Rights Reserved.</p>
    </div>
    
  );
};
export default Footer;