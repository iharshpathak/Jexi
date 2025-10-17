import { useEffect } from "react";
import { fetchPredictions } from "../app/utils/fetchPredictions";
import { fetchCoordinates } from "../app/utils/fetchCoordinates";
import { toast } from "sonner";

export function useAutocomplete({
  value,
  skipRef,
  setSuggestions,
  setShowDropdown,
  touched,
  setError,
  coordinates,
  setCoordinates,
  distance,
  naviType,
  isFocused,
}) {
  useEffect(() => {
    const debounceTimer = setTimeout(async () => {
      if (skipRef.current) {
        skipRef.current = false;
        return;
      }

      if (value.trim() !== "") {
        //preventing re firing on passing values to booknow
        if (!touched && distance !== "" || naviType === "navigation") {
          const coordinates = await fetchCoordinates(value);
          setCoordinates(coordinates);
          setShowDropdown(false);
          setError(false);
          return;
        }

        //onloation fetching don't show dropdown
        if(coordinates.lng && coordinates.lat){
          setShowDropdown(false);
          setError(false);
          return;
        }
        
        //preventing re firing on page reload
        if (naviType === "reload" && !touched && distance != "") {
          setShowDropdown(false);
          setError(false);
          return;
        } else {
          const { error, predictions } = await fetchPredictions(value);
          if (error) {
            toast(error, {
              icon: "🚨",
              style: {
                backgroundColor: "#FAFAFA",
                color: "#000000",
                fontWeight: "800",
                boxShadow: "8px 8px 0px #000",
                border: "4px solid #FF3333",
                borderRadius: "8px",
              },
            });
          }
          setSuggestions(predictions);
          setShowDropdown(true);
          setError(false);

          const coordinatesVal = await fetchCoordinates(value);
          setCoordinates(coordinatesVal);
        }
      } else {
        setCoordinates({});
        setSuggestions([]);
        setShowDropdown(false);

        if (touched && !isFocused) {
          setError(true);
        } else {
          setError(false);
        }
      }
      
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [value, touched]);
}
