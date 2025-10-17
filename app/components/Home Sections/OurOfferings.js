'use client'
import {category} from "../../assets/category.js";
import Image from "next/image";


function OurOfferings(){
  return(
    <div className="bg-teal-400 p-8 border-b-4 border-gray-900 border-dashed">
      <div className="flex flex-col gap-6">
        {/* heading and para txt */}
        <h1 className="w-[90%] md:w-1/2 lg:w-[40%] h-full pt-4 pb-4 mx-auto font-extrabold text-xl md:text-3xl text-center text-white bg-black hover:text-orange-500">OUR OFFERINGS 💎</h1>
        <p className="font-extrabold text-xl md:text-3xl text-center">“A ride for <span className="hover:text-yellow-300 hover:bg-black active:text-yellow-300 active:bg-black text-yellow-300 lg:text-black bg-black lg:bg-transparent">Every Vibe</span>, <span className="hover:text-purple-300 hover:bg-black active:text-purple-300 active:bg-black text-purple-300 lg:text-black bg-black lg:bg-transparent">Every Tribe</span>!”</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6 ">
        {/* images div */}
        {category.map((item) => (
              <div
                key={item.name}
                className="group flex justify-center items-center p-2 gap-2 bg-yellow-300 border-2 border-black border-solid rounded-sm shadow-[8px_8px_0px_#000] lg:shadow-none hover:shadow-[8px_8px_0px_#000] active:shadow-[8px_8px_0px_#000] transition">
                <div className="flex flex-col justify-center items-center gap-2">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                  />
                    <h1 className="font-extrabold">{item.name}</h1>
                  <p className="font-bold opacity-100 lg:opacity-0 group-hover:opacity-100 group-active:opacity-100  transition 100ms ease-in-out text-center">{item.punchLine}</p>
                  </div>
              </div>
            ))}
          </div>
      <div className="flex flex-col gap-6 mt-2">
        {/* button and para txt */}
        <p className="font-extrabold text-xl md:text-3xl text-center ">“From budget to baller — <span className="hover:text-lime-300 hover:bg-black active:text-lime-300 active:bg-black text-lime-300 lg:text-black bg-black lg:bg-transparent"> Your Ride</span> , <span className="hover:text-pink-300 hover:bg-black active:text-pink-300 active:bg-black text-pink-300 lg:text-black bg-black lg:bg-transparent">Your Rules</span>.”</p>
        <button className="w-[60%] sm:w-1/2 md:w-1/3 lg:w-[20%] h-full pt-4 pb-4 mx-auto bg-rose-600 text-sm sm:text-base text-white font-extrabold p-4 border-2 border-gray-900 border-solid hover:border-2 hover:border-black hover:text-black hover:shadow-[8px_8px_0px_#000] rounded-[2px] transition 100ms ease-in-out hover:cursor-pointer shadow-[8px_8px_0px_#000] lg:shadow-none active:text-black active:bg-pink-600 active:shadow-[8px_8px_0px_#000]">Hop In !</button>
      </div>
      </div>
  );
}

export default  OurOfferings;