import assets from "../../assets/assets.js";
import Image from "next/image";

function DownloadApp(){
  return(
    <div className="bg-rose-600 pt-8 pb-10 ">
      {/* outer div */}
      <div className="grid grid-cols-1 place-items-center gap-1 mb-8">
        {/* text div */}
        <div>
        <div >
          <h1 className="text-xl md:text-3xl font-extrabold text-center">&ldquo;TAP THE APP 📲, RULE THE ROAD 🚘&rdquo;</h1>
        </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mb-2">
        <h1 className="text-xl md:text-2xl font-extrabold pr-2 text-center">Download The</h1>
          <div className="flex items-center">
            <h1 className="text-2xl font-extrabold text-yellow-100 lg:text-black bg-black lg:bg-transparent shadow-[4px_4px_0px_#000000] active:shadow-[6px_6px_0px_#000000] lg:shadow-none
                        lg:drop-shadow-[2px_2px_0px_#fde047] 
                        hover:drop-shadow-none 
                        hover:text-yellow-100
                        active:text-[#fde047]
                        transition-all duration-100
                        hover:shadow-[4px_4px_0px_#000000] hover:bg-black active:shadow-[4px_4px_0px_#000000] active:bg-black text-center">
                        JEXI
                      </h1>
            <h1 className="text-xl md:text-2xl font-extrabold pl-2 text-center">App Now !</h1>
          </div>
          
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sc:gap-10 mx-auto my-auto pb-2">
        {/* images div */}
        <a href="https://www.apple.com/in/app-store/" target="_blank" rel="noopener noreferrer">
          <div className="hover:border-4 border-black hover:border-solid bg-black rounded-[2px] hover:shadow-[8px_8px_0px_#fde047] shadow-[8px_8px_0px_#fde047] lg:shadow-none active:shadow-[6px_6px_0px_#FFE98A] transition-all duration-100 ease-in-out">
            <Image
            src={assets.appStore}
            alt="AppStore"
            className="w-[250px] h-[100%] md:w-[350px] md:h-[100%] cursor-pointer"
          /></div>
        </a>
        
        <a href="https://play.google.com/" target="_blank" rel="noopener noreferrer">
          <div className="hover:border-4 border-black hover:border-solid bg-black rounded-[2px] hover:shadow-[8px_8px_0px_#47FD62] shadow-[8px_8px_0px_#47FD62] lg:shadow-none active:shadow-[6px_6px_0px_#94FFA5] transition-all duration-100 ease-in-out">
            <Image
            src={assets.playStore}
            alt="playstore"
            className="w-[250px] h-[100%] md:w-[350px] md:h-[100%] cursor-pointer"
          />
          </div>
        </a>
        
      </div>
    </div>
  );
}
export default DownloadApp;