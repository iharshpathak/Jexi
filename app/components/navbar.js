"use client";
import Image from "next/image";
import assets from "../assets/assets.js";
import { useState } from "react";
import { useRouter } from "next/navigation";
import MySignUp from "./mySignUp.js";
import MySignIn from "./mySignIn.js";
import { useUser, UserButton } from "@clerk/nextjs";
import useCabStore from "../store/CabStore.js";

function Navbar() {
  const [isHover, setHover] = useState(false);
  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);
  const { isSignedIn } = useUser(); // Clerk hook
  const router = useRouter();
  const { showSignIn, setShowSignIn, showSignUp, setShowSignUp, booking, disableSignUpSignIn } =
    useCabStore();

  return (
    <>
      <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 shadow-md border-b-8 border-solid border-black hover:border-black hover:border-dashed hover:border-4 hover:bg-amber-200/80 hover:backdrop-blur-md active:border-black active:border-dashed active:border-4 active:bg-amber-200/80 active:backdrop-blur-md transition-all duration-300 ease-in-out">
        {/* Logo */}
        <div
          className={`transition-all duration-300 ease-in-out ${isHover ? "opacity-100 scale-105" : "opacity-90 scale-100"}`}
        >
          <Image
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => router.push("/")}
            className={`w-2/5 h-auto object-contain cursor-pointer ${
              isHover
                ? "hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:border-fuchsia-300 hover:border-4 hover:rounded-sm hover:bg-black/90 hover:mb-2 active:shadow-[8px_8px_0px_rgba(0,0,0,1)] active:border-fuchsia-300 active:border-4 active:rounded-sm active:bg-black/90 active:mb-2"
                : ""
            }`}
            src={isHover ? assets.jexiBlrLogo : assets.jexiLogo}
            alt="Jexi"
          />
        </div>
        {/* Logo // */}

        {/* Buttons */}
        {!isSignedIn && (
          <div className="flex space-x-2 sm:space-x-4">
            <button disabled={disableSignUpSignIn}
              className={`font-extrabold text-xs sm:text-sm p-2.5  rounded transition-all duration-100 ease-in
              ${disableSignUpSignIn ? "bg-gray-400 text-gray-700 cursor-not-allowed border border-gray-500" : "bg-blue-600 text-white cursor-pointer hover:border-black hover:border-2 hover:text-black hover:bg-blue-300 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] active:border-black active:border-2 active:text-black active:shadow-[2px_2px_0px_rgba(0,0,0,1)]"} `}
              onClick={() => {
                setShowSignIn(true);
                setShowSignUp(false);
              }}
            >
              Sign In
            </button>

            <button disabled={disableSignUpSignIn}
              className={`font-extrabold text-xs sm:text-sm p-2.5 rounded transition-all duration-100 ease-in 
              ${disableSignUpSignIn ? "bg-gray-400 text-gray-700 cursor-not-allowed border border-gray-500" : "bg-blue-600 text-white cursor-pointer hover:border-black hover:border-2 hover:text-black hover:bg-violet-300 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] active:border-black active:border-2 active:text-black active:shadow-[2px_2px_0px_rgba(0,0,0,1)]"}`}
              onClick={() => {
                setShowSignIn(false);
                setShowSignUp(true);
              }}
            >
              Sign Up
            </button>
          </div>
        )}
        {/* Buttons // */}

        {/* If signed in, show user button */}
        {isSignedIn && (
          <div className="flex items-center justify-between gap-8">
            {/* cab booked icon */}
            {booking && (
              <div className="flex items-center justify-center w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] p-[4px] rounded-full bg-gradient-to-b from-yellow-400 to-amber-400 border-2 border-gray-800 border-solid hover:w-16 hover:h-16 hover:border-4 hover:border-black hover:bg-gradient-to-b hover:from-yellow-400 hover:to-rose-300 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] active:w-16 active:h-16 active:border-4 active:border-black active:bg-gradient-to-b active:from-yellow-400 active:to-rose-300 active:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all duration-300">
                <Image
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => router.push("/view-booking")}
                  className="w-full h-full object-contain cursor-pointer"
                  src={assets.sedani}
                  alt="cab booked icon"
                />
              </div>
            )}
            {/* userbutton clerk */}
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-black/80 hover:mb-2 hover:ml-2 hover:w-16 hover:h-16 hover:border-4 hover:border-black hover:bg-fuchsia-400 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] active:mb-2 active:ml-2 active:w-16 active:h-16 active:border-4 active:border-black active:bg-fuchsia-400 active:shadow-[8px_8px_0px_rgba(0,0,0,1)] rounded-full transition-all duration-300 ease-out flex items-center justify-center">
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox:
                      "rounded-full active:border-2 active:border-black active:shadow-[4px_4px_0px_rgba(0,0,0,1)]",
                    userButtonPopoverCard:
                      "bg-white shadow-lg border border-gray-300",
                    userButtonPopoverFooter: "bg-gray-100",
                    userButtonPopoverActionButton:
                      "hover:bg-blue-100 active:bg-blue-100 text-sm font-semibold",
                  },
                }}
              />
            </div>
          </div>
        )}
      </div>
      {/* Tailwind needs to see these classes statically */}
      <div className="hidden bg-purple-300/80 bg-orange-300/80"></div>

      {(showSignIn || showSignUp) && (
        <div
          className={`transition-all duration-300 ease-in-out fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 ${
            showSignIn ? "bg-purple-300/80" : "bg-orange-300/80"
          }`}
          onClick={() => {
            setShowSignIn(false);
            setShowSignUp(false);
          }}
        >
          <div
            className="p-6 rounded-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            {showSignIn && <MySignIn routing="hash" />}
            {showSignUp && <MySignUp routing="hash" />}
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
