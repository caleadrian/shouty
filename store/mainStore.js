import { create } from "zustand";
import * as Device from "expo-device";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const date = new Date();

export default useMainStore = create((set, get) => ({
  isInitiallyLoaded: false,
  setIsInitiallyLoaded: (state) => {
    set({ isInitiallyLoaded: state });
  },
}));

export const usePostStore = create((set, get) => ({
  shouts: [],
  setShouts: () => set((state) => ({ shouts: [shouts, ...state] })),
  getShoutsLength: () => {
    console.log(`${get().shouts.length}`);
  },
  fetchShouts: async () => {
    set({ isFetchingShouts: true });
    const _shouts = [];
    const querySnapshot = await getDocs(collection(db, "shouts"));
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      _shouts.push({
        ...data,
        id: doc.id,
        dateCreated: data.dateCreated?.toDate(),
      });
    });
    set({
      shouts: _shouts,
    });
    set({ isFetchingShouts: false });
  },

  isFetchingShouts: false,
}));
