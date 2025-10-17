'use client'
import { create } from "zustand";
import { persist } from "zustand/middleware";
import cookieStorage from "../utils/cookieStorage.js";

const useCabStore = create(
  persist(
    (set) => ({
      // Auth modals
      showSignIn: false,
      showSignUp: false,
      setShowSignIn: (val) => set({ showSignIn: val }),
      setShowSignUp: (val) => set({ showSignUp: val }),

      // source
      sourceValue: "",
      sourceSuggestions: [],
      showSourceDropdown: false,
      sourceError: false,
      sourceTouched: false,
      sourceSelected: false,
      setSourceValue: (val) => set({ sourceValue: val }),
      setSourceSuggestions: (val) => set({ sourceSuggestions: val }),
      setShowSourceDropdown: (val) => set({ showSourceDropdown: val }),
      setSourceError: (val) => set({ sourceError: val }),
      setSourceTouched: (val) => set({ sourceTouched: val }),
      setSourceSelected: (val) => set({ sourceSelected: val }),
      isSourceFocused: false,
      setIsSourceFocused: (val) => set({ isSourceFocused: val }),

      //temp source & desti value for getting current location & homepage input volatile
      tempSourceValue: "",
      setTempSourceValue: (val) => set({ tempSourceValue: val }),
      tempDestinationValue: "",
      setTempDestinationValue: (val) => set({ tempDestinationValue: val }),

      // destination
      destinationValue: "",
      destinationSuggestions: [],
      showDestinationDropdown: false,
      destinationError: false,
      destinationTouched: false,
      destinationSelected: false,
      setDestinationValue: (val) => set({ destinationValue: val }),
      setDestinationSuggestions: (val) => set({ destinationSuggestions: val }),
      setShowDestinationDropdown: (val) =>
        set({ showDestinationDropdown: val }),
      setDestinationError: (val) => set({ destinationError: val }),
      setDestinationTouched: (val) => set({ destinationTouched: val }),
      setDestinationSelected: (val) => set({ destinationSelected: val }),
      isDestinationFocused: false,
      setIsDestinationFocused: (val) => set({ isDestinationFocused: val }),

      // refs
      skipSourceSearchRef: { current: false },
      skipDestinationSearchRef: { current: false },

      //distance
      distance: "",
      setDistance: (val) => set({ distance: val }),
      //distance loading animation
      isdistanceLoading: false,
      setisDistanceLoading: (val) => set({ isdistanceLoading: val }),

      //pricing modals
      showPricing: false,
      setShowPricing: (val) => set({ showPricing: val }),

      //payment choice
      paymentChoice: "",
      setPaymentChoice: (val) => set({ paymentChoice: val }),

      //cash or card
      cashPay: true,
      setCashPay: (val) => set({ cashPay: val }),

      //otp
      otp: "",
      setOtp: (val) => set({ otp: val }),

      //booking
      booking: false,
      setBooking: (val) => set({ booking: val }),

      //cookies acknowledgement
      cookiesAcknowledged: false,
      setCookiesAcknowledged: (val) => set({ cookiesAcknowledged: val }),

      //disable signup & signin buttons
      disableSignUpSignIn: false,
      setDisableSignUpSignIn: (val) => set({ disableSignUpSignIn: val }),
      
    }),
    {
      name: "cab-store",
      storage: cookieStorage,

      // only persist these keys
      partialize: (state) => ({
        sourceValue: state.sourceValue,
        destinationValue: state.destinationValue,
        distance: state.distance,
        paymentChoice: state.paymentChoice,
        otp: state.otp,
        cashPay: state.cashPay,
        booking: state.booking,
        cookiesAcknowledged: state.cookiesAcknowledged,
      }),
    },
  ),
);

export default useCabStore;
