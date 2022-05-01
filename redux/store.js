import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favorites/favoriteSlice";

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
  devTools: true,
});

export default store;
