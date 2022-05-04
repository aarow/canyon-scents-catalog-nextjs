import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState: { ids: [] },
  reducers: {
    toggleFavorite: (state, action) => {
      if (state.ids?.includes(action.payload)) {
        return {
          ...state,
          ids: state.ids.filter((favoriteId) => favoriteId !== action.payload),
        };
      } else {
        state.ids.push(action.payload);
      }
    },
    addFavorite: (state, action) => {
      state.ids.push(action.payload);
    },
    removeFavorite: (state, action) => {
      return {
        ...state,
        ids: state.ids.filter((favoriteId) => favoriteId !== action.payload),
      };
    },
  },
});

export const { toggleFavorite, addFavorite, removeFavorite } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;
