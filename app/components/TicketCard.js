'use client'
import useCabStore from "../store/CabStore.js";
import useCabCategoryStore from "../store/CabCategory.js";
import Image from "next/image";
import {category} from "../assets/category.js"
import assets from "../assets/assets.js"



function TicketCard(){
  const { sourceValue, destinationValue, distance, cashPay } = useCabStore();
  const { isIntercity, cabCategory, fareRange } = useCabCategoryStore();

  
//finding the object from tag
  function getCategoryDetails(tag) {
    return category.find(item => item.tag === tag) || null;
  }
  const Itemdetails = getCategoryDetails(cabCategory);
  
  return(
    <div className="grid place-items-center h-auto mt-2 md:mt-0">
    <div className="md:flex gap-0 mb-4">
      <div className={`grid place-items-center m-0 md:mt-2 p-0 md:p-4 rounded-md md:border-r-0 border-r-2 border-l-2 border-t-2 border-b-0 md:border-b-2 border-black border-dashed shadow-[9px_9px_0px_rgba(0,0,0,1)]
      ${isIntercity ?'bg-purple-100':'bg-yellow-100'}`}>
        {/* barcode */}
        {/* Mobile Image */}
        <Image
          src={assets.barCodehorizontal}
          alt="barcode"
          className="block md:hidden w-[250px] h-[100px] "
        />

        {/* Desktop Image */}
        <Image
          src={assets.barCode}
          alt="barcode"
          className="hidden md:block w-[100px] h-[150px]"
        />
      </div>
      <div className={`mt-0 md:mt-2 p-4 rounded-md shadow-[9px_9px_0px_rgba(0,0,0,1)] 
      border-l-[2px] md:border-l-[3px] border-r-[2px] border-t-[3px] md:border-t-[2px] border-b-[2px] 
      border-l-black md:border-l-gray-400 border-r-black border-t-gray-400 md:border-t-black border-b-black border-dashed ${isIntercity ?'bg-purple-100':'bg-yellow-100'}`}>
        {/* ticket details */}
        <div className="grid grid-cols-1 gap-2">
          <div className="grid grid-cols-1 gap-1">
            {/* pickup and dropoff details */}
            <div className="flex items-center justify-between w-full gap-8">
              {/* pickup n dropoff headings*/}
              <div className="w-1/2">
                {/* pickup */}
                <h1 className="text-sm font-extrabold text-gray-900">FROM</h1>
              </div>
              <div className="w-[40%]">
                {/* dropoff */}
                <h1 className="text-sm font-extrabold text-gray-900 ">TO</h1>
              </div>
            </div>
             <div className="flex items-start justify-between w-full gap-10">
              {/* pickup n dropoff details */}
                {/* pickup */}
              <div className="w-2/5 text-xs"><p>{sourceValue}</p></div>
                {/* dropoff */}
               <div className="w-2/5 text-xs"><p>{destinationValue}</p></div>
               </div>
          </div>
          <div className="flex gap-0 items-center">
            {/* distance */}
            <hr className="w-1/2 h-0.5 my-5 border-none rounded-md bg-gradient-to-r from-red-500 via-lime-400 to-gray-700 "/>
            <div>
            <h1 className="text-sm font-bold text-gray-900">Distance</h1>
            <p className="text-sm font-semibold text-gray-900 text-center">{distance} Km</p>
            </div>
            <hr className="w-1/2  h-0.5 my-5 border-none bg-gradient-to-r from-gray-700 via-cyan-400 to-fuchsia-500"/>
          </div>
          <div>
            {/* fare details */}
            <div className="md:flex items-center gap-8 justify-around border-b-2 border-dotted border-gray-500">
              {/* cab and fare details */}
              <div className="flex items-center gap-2 justify-around md:justify-normal">
               {/* image & name */}
                <div>
                  {/* image */}
                  {isIntercity ? (
                    <Image
                      src={assets.interCity}
                      alt="Intercity"
                      width={100}
                      height={100}
                    />
                  ) : Itemdetails ? (
                    <Image
                      src={Itemdetails.image}
                      alt={Itemdetails.name}
                      width={100}
                      height={100}
                    />
                  ) : (
                    <h2>Image Unavailable</h2>
                  )}
                </div>
              <div className="gap-1">
                {/* category */}
                <h1 className="font-extrabold text-gray-700 border-b-2 border-dashed border-gray-500">Ride Type</h1>
                {isIntercity ? (<h1 className="font-extrabold text-gray-900">InterCity</h1>) : Itemdetails ? (<h1 className="font-extrabold text-gray-900">{Itemdetails?.name}</h1>) : (<h1 className="font-extrabold text-gray-900">N/A</h1>)}
              </div>
             </div>
              <div className="mb-4 md:mb-0 text-center mt-1 md:mt-0">
                {/* fareRange */}
                <h1 className="font-extrabold text-gray-700 border-b-2 border-dashed border-gray-500">Amount</h1>
                <p className={`font-extrabold text-gray-800
                  ${cashPay? 'text-gray-800':'text-green-500'}`}>{cashPay ? (
                    fareRange?.[cabCategory]
                      ? `₹. ${fareRange[cabCategory].min} - ₹. ${fareRange[cabCategory].max}`
                      : `₹. 0.00`
                  ) : (
                    "PAID"
                  )}

                  </p>
              </div>
            </div>
            <div className="flex gap-2 justify-center mt-2">
              {/* ride type */}
              <h1 className="font-extrabold text-gray-800 text-sm"> Trip Type: </h1>
              {isIntercity ? (<span className="font-extrabold text-gray-900 text-sm">Intercity Trip</span>) :(<span className="font-extrabold text-gray-900 text-sm">City Trip</span>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
export default TicketCard;