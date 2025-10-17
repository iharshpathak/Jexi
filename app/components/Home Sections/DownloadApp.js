import assets from "../../assets/assets.js";
import Image from "next/image";

function DownloadApp(){
  return(
    <div className="pt-8 pb-8 mb-2">
      {/* outer div */}
      <div className="grid grid-cols-1 place-items-center gap-1 mb-8">
        {/* text div */}
        <div>
        <div >
          <h1 className="text-xl md:text-3xl font-extrabold text-center">“TAP THE APP 📲, RULE THE ROAD 🚘”</h1>
        </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mb-2">
        <h1 className="text-xl md:text-2xl font-extrabold pr-2 text-center">Download The</h1>
          <div className="flex items-center">
            <h1 className="text-2xl font-extrabold text-black 
                        drop-shadow-[2px_2px_0px_#fde047] 
                        hover:drop-shadow-none 
                        hover:text-yellow-100
                        active:text-yellow-100
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
        <div className="hover:border-4 hover:border-yellow-300 hover:border-dashed hover:bg-black hover:shadow-[8px_8px_0px_#fde047] active:border-4 active:border-yellow-300 active:border-dashed active:bg-black active:shadow-[8px_8px_0px_#fde047] transition-all duration-100">
          <Image
          src={assets.appStore}
          alt="AppStore"
          className="w-[250px] h-[100%] md:w-[350px] md:h-[100%] cursor-pointer"
        /></div>
        <div className="hover:border-4 hover:border-green-300 hover:border-dashed hover:bg-black hover:shadow-[8px_8px_0px_#47FD62] active:border-4 hover:border-green-300 active:border-dashed active:bg-black active:shadow-[8px_8px_0px_#47FD62] transition-all duration-100">
          <Image
          src={assets.playStore}
          alt="playstore"
          className="w-[250px] h-[100%] md:w-[350px] md:h-[100%] cursor-pointer"
        />
        </div>
      </div>
    </div>
  );
}
export default DownloadApp;