'use client'
import { create } from 'zustand'
import { persist } from 'zustand/middleware';
import cookieStorage from '../utils/cookieStorage.js';

const useCabCategoryStore = create(persist((set) => ({

//intercity check
  isIntercity: false,
  setisIntercity: (val) => set({ isIntercity: val }),

  //cab category
  cabCategory: '',
  setCabCategory: (val) => set({ cabCategory: val }),

  //fare range
  fareRange: {},
  setFareRange: (val) => set({ fareRange: val })
}),
    {
      name: 'cab-category',
      storage: cookieStorage,
    })
);

export default useCabCategoryStore