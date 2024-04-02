import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  imageUrl: {},
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    addImageUrl(state, action) {
      state.imageUrl = action.payload;
    },
  },
});

export const { addImageUrl } = homeSlice.actions;

export default homeSlice.reducer;

export const getImageUrl = (state) => state.home.imageUrl;
