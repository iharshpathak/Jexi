"use client";
import { useRouter } from "next/navigation";

function AmountNil() {
  const router = useRouter();
  return (
    <>
      <div className="flex justify-center items-center h-screen gap-0 fixed inset-0 z-[0] flex items-center justify-center w-full h-full bg-blue-700/95">
        <div className="bg-[#D1F8FF] w-[90%] h-[40%] sm:w-[80%] md:h-[30%] xl:w-[30%] xl:h-[35%] flex flex-col items-center rounded-lg gap-6 sm:gap-8 shadow-[9px_9px_0px_#000000] pt-4 pb-2 sm:pb-4 lg:pb-3 xl:pb-2">
          <div className="bg-stone-800 w-[65%] h-[20%] sm:w-[70%] sm:h-[20%] xl:w-[45%] xl:h-[20%] flex flex justify-center items-center shadow-[6px_6px_0px_#FFB700]">
            <h1 className="text-center text-white font-extrabold">
              ⚠️ WHOOPS !!
            </h1>
          </div>
          <div className="flex justify-center items-center gap-1 flex-wrap pl-10 pr-10">
            <p className="font-bold text-center">
              "Invalid Amount !
            </p>
            <p className="font-bold text-center">
              Please Go Back and Book A Valid cab ! 🚕"
            </p>
          </div>

          <div className="">
            <button
              onClick={() => router.push("/book-now")}
              className="bg-stone-800 text-[#F9FFE0] text-center font-extrabold pt-2 pb-3 pl-4 pr-4 rounded-md shadow-[6px_6px_0px_#FFD64A] hover:bg-[#FFD64A] hover:text-stone-800 hover:shadow-[6px_6px_0px_#000000] cursor-pointer transition ease-in-out duration-200
            "
            >
              Go Back
            </button>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default AmountNil;
