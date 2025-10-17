"use client";
import Image from "next/image";
import assets from "./assets/assets.js";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import InputField from "./components/inputFeild.js";
import { useAutocomplete } from "../hooks/useAutocomplete.js";
import useCabStore from "../app/store/CabStore.js";
import useMapStore from "../app/store/MapStore.js";
import useIntercityCheck from "../hooks/useIntercityCheck.js";
import DownloadApp from "./components/Home Sections/DownloadApp.js";
import JexiLoading from "./components/loading screens/Jexi Loading/JexiLoading.js";
import OurOfferings from "./components/Home Sections/OurOfferings.js";
import IntercitySection from "./components/Home Sections/IntercitySection.js"
import { toast } from "sonner";

export default function Home() {
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
    isSourceFocused,
    setIsSourceFocused,
    isDestinationFocused,
    setIsDestinationFocused,
    tempSourceValue,
    setTempSourceValue,
    tempDestinationValue,
    setTempDestinationValue,
    cookiesAcknowledged,
    setCookiesAcknowledged,
  } = useCabStore();

  const {
    sourceCoordinates,
    setSourceCoordinates,
    destinationCoordinates,
    setDestinationCoordinates,
  } = useMapStore();

  const [isActive, setIsActive] = useState(false); //for mobile

  const [loading, setLoading] = useState(true); // controls splash screen animation
  const router = useRouter();
  useIntercityCheck();

  //checking if page is reloaded
  const [navType, setNavType] = useState(null);

  //prevent error on first render
  useEffect(() => {
    setSourceError(false);
    setDestinationError(false);
    setSourceTouched(false);
    setDestinationTouched(false);

    if (typeof window !== "undefined") {
      const navEntry = performance.getEntriesByType("navigation")[0];
      if (navEntry) {
        setNavType(navEntry.type);
      }
    }
  }, []);

  //splash screen logic
  useEffect(() => {
    // Modern navigation timing API
    const navEntries = performance.getEntriesByType("navigation");
    const isReload = navEntries.length > 0 && navEntries[0].type === "reload";

    if (isReload) {
      sessionStorage.removeItem("visited Home");
    }

    const isVisited = sessionStorage.getItem("visited Home");
    // console.log("isVisited", isVisited);

    if (!isVisited) {
      sessionStorage.setItem("visited Home", "true");
      setLoading(true);

      const timer = setTimeout(() => {
        setLoading(false);
      }, 1500);

      return () => clearTimeout(timer); // cleanup
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    //cookies acknowledgement
    if (cookiesAcknowledged === false && loading === false){
      console.log("cookies acknowledged reached")
      toast("Cookies make everything better — even websites! We use them to keep things sweet and smooth 😎", {
        icon: '🍪',
        duration: Infinity, //  stays until dismissed manually
        action: (
          <button
            onClick={() => {
              setCookiesAcknowledged(true);
              toast.dismiss(); //  manually dismiss toast
            }}
            style={{
              backgroundColor: '#000000',
              color: '#F9FFE0',
              fontWeight: '800',
              fontSize: '8px',
              padding: '8px 16px',
              borderRadius: '6px',
              boxShadow: '4px 4px 0px #FFD64A',
              cursor: 'pointer',
              minWidth: '70px',
              textAlign: 'center',
            }}
          >
            OKAY !
          </button>
        ),
        style: {
          backgroundColor: '#FFF7E5',
          color: '#000000',
          fontWeight: '800',
          boxShadow: '8px 8px 0px #000',
          border: '4px solid #FFC233',
          borderRadius: '8px',
        },
      });


    }
  },[cookiesAcknowledged, loading]);

  //managing distance visbility
  useEffect(() => {
    if (!sourceValue || !destinationValue) {
      if (sourceValue.trim() !== "") {
        setSourceSelected(true);
      }
      if (destinationValue.trim() !== "") {
        setDestinationSelected(true);
      }
    }
  }, [tempSourceValue, tempDestinationValue]);

  useAutocomplete({
    value: tempSourceValue,
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
    value: tempDestinationValue,
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
    if (!sourceSelected && !destinationSelected) {
      setSourceError(true);
      setDestinationError(true);
      return;
    } else if (!sourceSelected) {
      setSourceError(true);
      setDestinationError(false);
      return;
    } else if (!destinationSelected) {
      setDestinationError(true);
      setSourceError(false);
      return;
    } else {
      setSourceError(false);
      setDestinationError(false);
      router.push("/book-now");
    }
  }

  return (
    <>
      {loading && <JexiLoading />}

      {/* Banner Section */}
      {!loading && (
        <>
          <div
            className="h-full bg-cover bg-center border-b-8 border-black"
            style={{ backgroundImage: `url(${assets.bgBanner.src})` }}
          >
            <div className="flex justify-center items-center p-4 sm:p-8">
              {/* banner text */}
              <h1 className="sm:text-7xl text-4xl font-extrabold mt-10 sm:mt-10 text-center hover:shadow-[8px_8px_0px_#000] hover:bg-gray-950 hover:text-white hover:border-2 hover:border-black active:shadow-[8px_8px_0px_#000] active:bg-gray-950 active:text-white active:border-2 active:border-black transition-all duration-100 ease-in-out">
                YOUR{" "}
                <span className="sm:text-7xl text-4xl font-extrabold hover:text-cyan-200 active:text-cyan-200">
                  SMART
                </span>{" "}
                <span className="sm:text-7xl text-4xl font-extrabold hover:text-yellow-200 active:text-yellow-200">
                  TAXI !
                </span>
              </h1>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-stretch pl-4 sm:pl-10 pr-4 sm:pr-10 pb-10 pt-10 mb-8">
              {/* Input & image section */}
              <div
                className={`bg-violet-100 max-w-full border-4 border-dashed border-black hover:border-4 hover:border-solid hover:border-black hover:shadow-[8px_8px_0px_#000] hover:bg-yellow-100 grid grid-cols-1 gap-6 p-4 sm:p-6 md:p-8 active:border-black active:shadow-[8px_8px_0px_#000] active:bg-yellow-100
            ${isActive ? "bg-yellow-100 shadow-[4px_4px_0px_#000]" : "bg-violet-100"}`}
              >
                <div className="grid grid-cols-1 gap-12 p-2 sm:p-5 h-full">
                  {/* Title */}
                  <h2 className="sm:text-4xl text-2xl font-extrabold text-center">
                    Ride in a Flash ⚡
                  </h2>

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
                      value={tempSourceValue}
                      onChange={(e) => {
                        setTempSourceValue(e.target.value);
                        setSourceValue(e.target.value);
                        setSourceSelected(false); // ✅ reset
                      }}
                      onFocus={() => {
                        if (tempSourceValue.trim() === "") {
                          setDistance("");
                        }
                        setIsSourceFocused(true);
                        setSourceTouched(true);
                      }}
                      placeholder="Enter Pickup Location"
                      suggestions={sourceSuggestions}
                      onSelect={(desc) => {
                        skipSourceSearchRef.current = true;
                        setTempSourceValue(desc);
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
                      value={tempDestinationValue}
                      onChange={(e) => {
                        setTempDestinationValue(e.target.value);
                        setDestinationValue(e.target.value);
                        setDestinationSelected(false);
                      }}
                      onFocus={() => {
                        if (tempDestinationValue.trim() === "") {
                          setDistance("");
                        }
                        setIsDestinationFocused(true);
                        setDestinationTouched(true);
                      }}
                      placeholder="Enter Dropoff Location"
                      suggestions={destinationSuggestions}
                      onSelect={(desc) => {
                        skipDestinationSearchRef.current = true;
                        setTempDestinationValue(desc);
                        setDestinationValue(desc);
                        setDestinationSuggestions([]);
                        setShowDestinationDropdown(false);
                        setDestinationSelected(true);
                      }}
                      showDropdown={showDestinationDropdown}
                      onTouchStart={() => setIsActive(true)} //for mobile
                      onBlur={() => setIsActive(false)} //for mobile
                    />
                  </div>

                  {/* dropofff errer */}
                  {destinationError && (
                    <p className="text-center font-bold text-red-700 shadow-[4px_4px_0px_#FF0000] bg-white border-red rounded-none border-2">
                      {" "}
                      ☝️ Please Select A Dropoff Location
                    </p>
                  )}

                  <button
                    onClick={handleBookNow}
                    className="bg-blue-600 text-sm sm:text-base text-white font-extrabold p-4 hover:border-2 hover:border-black hover:text-black hover:shadow-[4px_4px_0px_#000] hover:bg-yellow-300 active:bg-yellow-500 transition-all duration-100 rounded-none cursor-pointer rounded-sm active:border-2 active:border-black active:text-black active:shadow-[4px_4px_0px_#000] active:bg-yellow-300 mb-3 sm:mb-0"
                  >
                    Book Now
                  </button>
                </div>
              </div>

              {/* car image right syde */}
              <div className="ml-0 relative w-full max-w-full lg:max-w-[600px]">
                {/* Use a fixed height on small screens */}
                <div className="relative w-full h-[400px] sm:h-[400px] md:h-[500px] lg:h-[540px]">
                  <Image
                    src={assets.h1}
                    alt="banner image"
                    fill
                    style={{ objectFit: "cover" }}
                    className="object-cover object-center border-black sm:object-center border-4 shadow-[2px_2px_0px_#000] hover:shadow-[4px_4px_0px_#000] hover:border-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <OurOfferings />
          </div>
          <div>
            <IntercitySection />
          </div>
          <div>
            <DownloadApp />
          </div>
        </>
      )}
    </>
  );
}
