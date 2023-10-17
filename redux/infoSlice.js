import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  place: null,
  rating: null,
  desc: null,
  vicinity: null,
  types: null,
  location: null,
  img: null,
};

export const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    setInfo: (state, actions) => {
      state.place = actions.payload.place;
      state.rating = actions.payload.rating;
      state.desc = actions.payload.desc;
      state.vicinity = actions.payload.vicinity;
      state.types = actions.payload.types;
      state.location = actions.payload.location;
      state.img = actions.payload.img;
    },
  },
});

export const { setInfo } = infoSlice.actions;

export default infoSlice.reducer;
