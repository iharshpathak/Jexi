'use client';
import { SignIn } from '@clerk/nextjs';
import useCabStore from '../../store/CabStore.js';
import { useEffect } from "react";

export default function Page() {
  const { setShowSignIn, setShowSignUp, setDisableSignUpSignIn } = useCabStore();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() =>{
      setShowSignIn(false);
      setShowSignUp(false);
      setDisableSignUpSignIn(true);

    //set to false on unmount
    return () => {
      setDisableSignUpSignIn(false);
    };
  },[])
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-violet-600/80 backdrop-blur-md p-8 border-8 border-black">
      <div className="mt-3 mb-10 border-4 border-black bg-pink-400 shadow-[8px_8px_0px_rgba(0,0,0,1)] rounded-none p-6">
        <SignIn
          routing="hash"
          appearance={{
            elements: {
              card: "border-4 border-black bg-white shadow-[8px_8px_0px_rgba(0,0,0,1)] rounded-none",
              headerTitle: "text-4xl font-extrabold  text-black text-center mb-4",
              headerSubtitle: "text-md text-gray-700 text-center mb-6",
              formFieldInput: "border-2 border-black bg-gray-100 text-black px-4 py-2 rounded-none focus:outline-none focus:ring-2 focus:ring-black",
              formFieldLabel: "text-black font-bold mb-1",
              formButtonPrimary: "uppercase font-extrabold px-6 py-3 bg-yellow-300 text-black border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:bg-yellow-400 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] transition-all duration-150 ease-in-out rounded-none",
              socialButtonsBlockButton: "bg-white border-2 border-black text-black font-bold px-4 py-2 rounded-none hover:bg-gray-100",
              footerActionLink: "text-blue-600 hover:underline font-bold",
            },
            variables: {
              colorPrimary: "#3333ff",
              colorText: "#000000",
              fontFamily: "monospace",
            },
          }}
        />
      </div>
    </div>
  );
}
