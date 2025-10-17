import { useEffect } from 'react';
import useCabCategoryStore from '../app/store/CabCategory.js';
import useCabStore from '../app/store/CabStore.js';
import useMapStore from '../app/store/MapStore.js';
import getDistance from '../app/utils/getDistance.js';
import isSameCity from '../app/utils/isSameCity.js';
import { toast } from "sonner";

 function useIntercityCheck() {
  const { sourceValue, destinationValue, sourceSelected, destinationSelected, setDistance, setisDistanceLoading } = useCabStore();
  const { sourceCoordinates, destinationCoordinates } = useMapStore();
  const { setisIntercity } = useCabCategoryStore();

  useEffect(() => {
    const checkIntercity = async () => {
      if (!sourceValue || !destinationValue || !sourceCoordinates || !destinationCoordinates || !sourceSelected || !destinationSelected ) return;

      const sameCityCheck = await isSameCity(sourceValue, destinationValue);

      
      setisDistanceLoading(true); //distance loading animation start

      //distance calculation
      const distance = await getDistance(
        sourceCoordinates.lat,
        sourceCoordinates.lng,
        destinationCoordinates.lat,
        destinationCoordinates.lng
      );

      //distance error handling
      if (typeof distance === 'object' && distance.error) {
        toast(distance.message, {
          icon: "❗",
          style: {
            backgroundColor: "#FFE5E5",
            color: "#000",
            fontWeight: "800",
            boxShadow: "8px 8px 0px #000",
            border: "4px solid #FF4D4D",
            borderRadius: "8px",
          },
        });
        return;
      }else{
        setDistance(distance);
        setisDistanceLoading(false); //distance loading animation end
      }
      

      //intercity error handling
      if (sameCityCheck === null){
        toast("Whoops Error Occured! Please Try Again", {
          icon: "❗",
          style: {
            backgroundColor: "#FFF7E5",
            color: "#000000",
            fontWeight: "800",
            boxShadow: "8px 8px 0px #000",
            border: "4px solid #FFC233",
            borderRadius: "8px",
          },
        });
      }
      
      const intercity =
        sameCityCheck === false || sameCityCheck === null || distance >= 50;

      setisIntercity(intercity);
    };

    checkIntercity();
  }, [sourceValue, destinationValue, sourceCoordinates, destinationCoordinates,sourceSelected, destinationSelected]);
}

export default useIntercityCheck