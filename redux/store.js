import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favorites/favoriteSlice";
import modalSlice from "./modal/modalSlice";

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    modal: modalSlice,
  },
  devTools: true,
});

export default store;
