import { create } from 'zustand'

const useMapStore = create((set) => ({

  // source
  sourceCoordinates: { lng: '', lat: '' },
  setSourceCoordinates: (val) => set({ sourceCoordinates: val }),
  
  // destination
  destinationCoordinates: { lng: '', lat: '' },
  setDestinationCoordinates: (val) => set({ destinationCoordinates: val }),

  
}));


export default useMapStore;