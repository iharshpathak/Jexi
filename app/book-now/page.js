"use client";
import InputField from "../components/inputFeild.js";
import assets from "../assets/assets.js";
import Image from "next/image";
import { category } from "../assets/category.js";
import useCabStore from "../store/CabStore.js";
import useMapStore from "../store/MapStore.js";
import { useAutocomplete } from "../../hooks/useAutocomplete.js";
import Map from "../components/Map.js";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useIntercityCheck from "../../hooks/useIntercityCheck.js";
import useCabCategoryStore from "../store/CabCategory.js";
import calculateFare from "../utils/calculateFare.js";
import priceConfig from "../assets/priceConfig.js";
import PricingDetails from "../components/PricingDetails.js";
import DistanceLoading from "../components/loading screens/Distance Loading/DistanceLoading.js";
import { toast } from "sonner";

function Page() {
  const {
    sourceValue,
    setSourceValue,
    destinationValue,
    setDestinationValue,
    sourceSuggestions,
    setSourceSuggestions,
    destinationSuggestions,
    setDestinationSuggestions,
    showSourceDropdown,
    setShowSourceDropdown,
    showDestinationDropdown,
    setShowDestinationDropdown,
    skipSourceSearchRef,
    skipDestinationSearchRef,
    sourceError,
    setSourceError,
    destinationError,
    setDestinationError,
    sourceTouched,
    setSourceTouched,
    destinationTouched,
    setDestinationTouched,
    sourceSelected,
    setSourceSelected,
    destinationSelected,
    setDestinationSelected,
    distance,
    setDistance,
    showPricing,
    setShowPricing,
    isSourceFocused,
    setIsSourceFocused,
    isDestinationFocused,
    setIsDestinationFocused,
    setCashPay,
    setBooking,
    isdistanceLoading,
  } = useCabStore();

  const {
    sourceCoordinates,
    setSourceCoordinates,
    destinationCoordinates,
    setDestinationCoordinates,
  } = useMapStore();

  const {
    isIntercity,
    setisIntercity,
    cabCategory,
    setCabCategory,
    fareRange,
    setFareRange,
  } = useCabCategoryStore();

  const [isActive, setIsActive] = useState(false); //for mobile

  const router = useRouter();
  useIntercityCheck();

  //checking if page is reloaded
  const [navType, setNavType] = useState(null);

  //managing distance visbility
  useEffect(() => {
    if (!sourceValue || !destinationValue) {
      setisIntercity(false);
      if (sourceValue.trim() !== "") {
        setSourceSelected(true);
      }
      if (destinationValue.trim() !== "") {
        setDestinationSelected(true);
      }
    }
  }, [sourceValue, destinationValue]);

  //calculating fare evertime distance changes
  useEffect(() => {
    const Fareresult = calculateFare(distance);
    setFareRange(Fareresult);
  }, [distance]);

  //prevent error on first render
  useEffect(() => {
    setSourceError(false);
    setDestinationError(false);
    setSourceTouched(false);
    setDestinationTouched(false);
    setCabCategory(""); //new booking no cab category
    setCashPay(true); //for new booking cash default
    setBooking(false); //for new booking no booking
    if (typeof window !== "undefined") {
      const navEntry = performance.getEntriesByType("navigation")[0];
      if (navEntry) {
        setNavType(navEntry.type);
      }
    }
    setIsSourceFocused(false);
    setIsDestinationFocused(false);
  }, []);

  useAutocomplete({
    value: sourceValue,
    skipRef: skipSourceSearchRef,
    setSuggestions: setSourceSuggestions,
    setShowDropdown: setShowSourceDropdown,
    touched: sourceTouched,
    setError: setSourceError,
    coordinates: sourceCoordinates,
    setCoordinates: setSourceCoordinates,
    distance: distance,
    naviType: navType || null,
    isFocused: isSourceFocused,
  });

  useAutocomplete({
    value: destinationValue,
    skipRef: skipDestinationSearchRef,
    setSuggestions: setDestinationSuggestions,
    setShowDropdown: setShowDestinationDropdown,
    touched: destinationTouched,
    setError: setDestinationError,
    coordinates: destinationCoordinates,
    setCoordinates: setDestinationCoordinates,
    distance: distance,
    naviType: navType || null,
    isFocused: isDestinationFocused,
  });

  // book now button
  function handleBookNow() {
    if (!sourceSelected && !destinationSelected && distance === "") {
      setSourceError(true);
      setDestinationError(true);
      router.push("/book-now#ip");
      return;
    } else if (!sourceSelected && distance === "") {
      setSourceError(true);
      setDestinationError(false);
      router.push("/book-now#ip");
      return;
    } else if (!destinationSelected && distance === "") {
      setDestinationError(true);
      setSourceError(false);
      router.push("/book-now#ip");
      return;
    } else if (cabCategory === "" && isIntercity === false) {
      router.push("/book-now#cabCat");
      toast("Please Choose Your Ride !", {
        icon: "🚙",
        style: {
          backgroundColor: "#FFF7E5",
          color: "#000000",
          fontWeight: "800",
          boxShadow: "8px 8px 0px #000",
          border: "4px solid #FFC233",
          borderRadius: "8px",
        },
      });
      return;
    } else if (cabCategory === "" && isIntercity === true) {
      router.push("/book-now#cabCat2");
      toast("Please Choose Your Ride !", {
        icon: "🚙",
        style: {
          backgroundColor: "#FFF7E5",
          color: "#000000",
          fontWeight: "800",
          boxShadow: "8px 8px 0px #000",
          border: "4px solid #FFC233",
          borderRadius: "8px",
        },
      });
      return;
    } else {
      setSourceError(false);
      setDestinationError(false);
      router.push("/pay");
    }
  }

  return (
    <>
      <h1 className="sm:text-4xl text-2xl font-extrabold text-center bg-yellow-300 pb-2 pt-2 border-b-2 border-gray-900 border-dotted">
        Tap N Zoom 💨
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-full">
        {/* bada wala div */}

        {/* choice aur booking wala div */}
        <div
          className={`order-2 md:order-1 grid grid-cols-1 ${isIntercity ? "gap-4 md:gap-4" : "gap-6"} p-5 items-start`}
        >
          {/* Input wala div */}
          <div
            className={`bg-violet-100 max-w-full p-8 border-4 border-dashed border-black hover:border-4 hover:border-solid hover:border-black hover:shadow-[8px_8px_0px_#000] hover:bg-yellow-100 grid grid-cols-1 gap-6 p-5 active:border-black active:shadow-[8px_8px_0px_#000] active:bg-yellow-100
              ${isActive ? "bg-yellow-100 shadow-[4px_4px_0px_#000]" : "bg-violet-100"}`}
            id="ip"
          >
            {/* pickup input */}
            <div
              onClick={(e) => {
                setShowSourceDropdown(false);
                e.stopPropagation();
              }}
              className="flex items-center gap-4
                      bg-[#f4f4f4] text-black p-4 
                      border-black rounded-none border-2
                      hover:shadow-[4px_4px_0px_#000]
                      active:shadow-[4px_4px_0px_#000]
                      focus-within:border-sky-400 
                      focus-within:border-4 
                      focus-within:shadow-[4px_4px_0px_#000]
                      transition-all duration-200"
            >
              <Image
                src={assets.pickupIcon}
                alt="pickup icon"
                width={15}
                height={15}
              />

              <InputField
                value={sourceValue}
                onChange={(e) => {
                  setSourceValue(e.target.value);
                  setSourceSelected(false);
                }}
                onFocus={() => {
                  if (sourceValue.trim() === "") {
                    setDistance("");
                  }
                  setIsSourceFocused(true);
                  setSourceTouched(true);
                }}
                placeholder="Enter Pickup Location"
                suggestions={sourceSuggestions}
                onSelect={(desc) => {
                  skipSourceSearchRef.current = true;
                  setSourceValue(desc);
                  setSourceSuggestions([]);
                  setShowSourceDropdown(false);
                  setSourceSelected(true);
                }}
                showDropdown={showSourceDropdown}
                onTouchStart={() => setIsActive(true)} //for mobile
                onBlur={() => setIsActive(false)} //for mobile
              />
            </div>
            {/* pickup errer */}
            {sourceError && (
              <p className="text-center font-bold text-red-700 shadow-[4px_4px_0px_#FF0000] bg-white border-red rounded-none border-2">
                {" "}
                ☝️ Please Select A Pickup Location
              </p>
            )}

            {/* dropoff input */}
            <div
              onClick={(e) => {
                setShowDestinationDropdown(false);
                e.stopPropagation();
              }}
              className="flex items-center gap-4
                      bg-[#f4f4f4] text-black p-4 
                      border-black rounded-none border-2
                      hover:shadow-[4px_4px_0px_#000] 
                      active:shadow-[4px_4px_0px_#000]
                      focus-within:border-green-400 
                      focus-within:border-4 
                      focus-within:shadow-[4px_4px_0px_#000] 
                      transition-all duration-200"
            >
              <Image
                src={assets.dropoffIcon}
                alt="dropoff icon"
                width={20}
                height={20}
              />

              <InputField
                value={destinationValue}
                onChange={(e) => {
                  setDestinationValue(e.target.value);
                  setDestinationSelected(false);
                }}
                onFocus={() => {
                  if (destinationValue.trim() === "") {
                    setDistance("");
                  }
                  setIsDestinationFocused(true);
                  setDestinationTouched(true);
                }}
                placeholder="Enter Dropoff Location"
                suggestions={destinationSuggestions}
                onSelect={(desc) => {
                  skipDestinationSearchRef.current = true;
                  setDestinationValue(desc);
                  setDestinationSuggestions([]);
                  setShowDestinationDropdown(false);
                  setDestinationSelected(true);
                }}
                showDropdown={showDestinationDropdown}
                onTouchStart={() => setIsActive(true)}
                onBlur={() => setIsActive(false)}
              />
            </div>

            {/* dropofff errer */}
            {destinationError && (
              <p className="text-center font-bold text-red-700 shadow-[4px_4px_0px_#FF0000] bg-white border-red rounded-none border-2">
                {" "}
                ☝️ Please Select A Dropoff Location
              </p>
            )}

            {/* distance div */}
            {isdistanceLoading ? (
              <div className="flex justify-start pl-2 items-center">
                <DistanceLoading />
              </div>
            ) : distance ? (
              <div className="flex gap-0 items-center">
                <h1 className="font-extrabold bg-blue-500 text-white p-2 shadow-[4px_4px_0px_#000]">
                  Distance
                </h1>
                <h1 className="font-bold bg-amber-500 p-2 shadow-[4px_4px_0px_#000]">
                  {distance} Km
                </h1>
              </div>
            ) : null}
          </div>
          {/* pricing details wala div */}
          <div>
            <div
              className={`flex gap-4 flex-wrap items-center justify-between bg-black border-black border-2 rounded-none border-2 hover:shadow-[4px_4px_0px_#D6F527] hover:border-[#D6F527] hover:border-2 hover:rounded-none hover:border-dashed transition-all duration-200 ease-out active:shadow-[4px_4px_0px_#D6F527] active:border-[#D6F527] active:border-2 active:rounded-none active:border-dashed  ${isIntercity ? "mt-1 md:-mt-25" : ""}`}
            >
              <div className="pl-5 pr-5 md:pr-0 w-full md:w-[40%] transition-all duration-200 ease-out">
                <h1 className="font-bold text-white text-center md:text-left transition-all duration-200 ease-out">
                  Puzzeled With Pricing ??
                </h1>
              </div>
              <div className="bg-rose-700 pr-5 pl-5 text-white hover:bg-blue-700 hover:cursor-pointer w-full md:w-[30%] h-full transition-all duration-200 ease-out active:bg-blue-700">
                <h1
                  className="font-extrabold hover:text-yellow-300 text-center transition-all duration-200 ease-out"
                  onClick={() => setShowPricing(true)}
                >
                  Click Here
                </h1>
              </div>
            </div>
          </div>
          {!isIntercity && (
            <div>
              {/* category wala div */}
              {category.map((item) => (
                <div
                  key={item.name}
                  className={`flex flex-wrap items-center justify-between w-full pl-4 pr-5 
                      transition-all duration-200 ease-in-out 
                      ${cabCategory === item.tag ? "w-[99.9%] border-4 border-solid border-black shadow-[8px_8px_0px_#000] bg-amber-400 scale-[1.01] rounded-md" : "hover:bg-yellow-300"} 
                      hover:w-[99.9%] hover:border-4 hover:border-solid hover:border-black hover:shadow-[8px_8px_0px_#000] hover:cursor-pointer 
                      ${item.name === "Lux" ? "" : cabCategory === item.tag ? "" : "border-b-4 border-gray-200"}
                    `}
                  id="cabCat"
                  onClick={() =>
                    setCabCategory(cabCategory === item.tag ? "" : item.tag)
                  }
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={100}
                      height={100}
                    />
                    <div className="grid grid-cols-1 gap-6">
                      <h1 className="font-extrabold">{item.name}</h1>
                      <p className="font-semibold text-gray-700">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="sm:ml-0 ml-30  sm:pb-0 pb-2 ">
                    <h1 className="font-extrabold sm:text-center">Price</h1>
                    <p className="font-bold">
                      {fareRange?.[item.tag]
                        ? `₹. ${fareRange[item.tag].min} - ₹. ${fareRange[item.tag].max}`
                        : `₹. ${priceConfig[item.tag]?.baseFare}`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
          {isIntercity && (
            <div>
              {/* Intercity wala div */}
              <div
                className={`flex flex-wrap items-center justify-between w-full pl-4 pr-5 hover:w-[99.9%] hover:border-4 hover:border-solid hover:border-black hover:shadow-[8px_8px_0px_#000] hover:bg-yellow-300 transition-all duration-200 ease-in-out mt-1 md:-mt-45
                  ${cabCategory === "Intercity" ? "w-[99.9%] border-4 border-solid border-black shadow-[8px_8px_0px_#000] bg-amber-400 scale-[1.01] rounded-md" : ""}`}
                id="cabCat2"
                onClick={() =>
                  setCabCategory(cabCategory === "Intercity" ? "" : "Intercity")
                }
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={assets.interCity}
                    alt="intercity"
                    width={100}
                    height={100}
                  />
                  <div className="grid grid-cols-1 gap-6">
                    <h1 className="font-extrabold">InterCity</h1>
                    <p className="font-semibold text-gray-700">
                      “Far. Fast. Fearless.”
                    </p>
                  </div>
                </div>

                <div className="sm:ml-0 ml-30  sm:pb-0 pb-2 ">
                  <h1 className="font-extrabold sm:text-center">Price</h1>
                  <p className="font-bold text-center">
                    {fareRange?.Intercity
                      ? `₹. ${fareRange.Intercity.min} - ₹. ${fareRange.Intercity.max}`
                      : `₹. ${priceConfig.Intercity?.baseFare}`}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* map wala div */}
        <div className="order-1 md:order-2 grid grid-cols-1 gap-12 p-5 min-h-screen bg-sky-300 border-b-2 border-solid border-black md:border-b-0 md:border-l-2 md:border-black md:border-solid">
          <Map />
        </div>
      </div>
      <button
        onClick={handleBookNow}
        className="w-full bg-violet-600 text-sm sm:text-base text-white font-extrabold p-4 border-2 border-black border-solid hover:border-4 hover:border-black hover:border-solid hover:text-black hover:shadow-[4px_4px_0px_#000] hover:bg-yellow-300 active:bg-yellow-500 transition-all duration-100 rounded-none cursor-pointer rounded-sm hover:w-[99.9%]  font-extrabold"
      >
        Summon the Wheels 🚗
      </button>

      {/* pricing details modal */}
      {showPricing && (
        <div
          className="transition-all duration-300 ease-in-out fixed inset-0 backdrop-blur-sm flex items-center justify-center z-[1100] bg-purple-500/80"
          onClick={() => {
            setShowPricing(false);
          }}
        >
          <div
            className="p-6 rounded-lg relative z-[1101]"
            onClick={(e) => e.stopPropagation()}
          >
            {showPricing && <PricingDetails />}
          </div>
        </div>
      )}
    </>
  );
}

export default Page;
