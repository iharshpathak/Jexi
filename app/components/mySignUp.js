'use client';
import { SignUp } from '@clerk/nextjs';
import { useAuth } from '@clerk/nextjs';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useCabStore from '../store/CabStore.js'

export default function MySignUp() {
  const { setShowSignUp } = useCabStore();
  const router = useRouter();
  const { isSignedIn } = useAuth();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (isSignedIn) {
      setShowSignUp(false);
      router.push('/');
    }
  }, [isSignedIn]);

  
  return (
    
    <div className="fixed top-0 left-0 sm:static sm:mt-25 sm:mb-15 border-4 border-black bg-yellow-400 shadow-[8px_8px_0px_rgba(0,0,0,1)] rounded-none pt-2 pb-8 px-4 sm:py-6 sm:px-6 transition-all duration-300 ease-in-out"><span onClick={() => {
      setShowSignUp(false);
        }} 
        className="cursor-pointer float-right text-white font-extrabold hover:text-orange-400 hover:bg-gray-800 transition-all duration-200 ease-in-out">X</span>
        <SignUp
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
    
  );
}
