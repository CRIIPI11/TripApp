import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: { location: undefined, permissions: undefined },
  errorMsg: undefined,
  loading: false,
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    onSetLoadingLocation: (state, action) => {
      state.loading = action.payload;
    },
    onLogin: (state, action) => {
      state.location = action.payload;
      state.loading = false;
    },
    onSetErrorMsg: (state, action) => {
      state.errorMsg = action.payload;
      state.loading = false;
    },
  },
});

export const { onLogin, onSetErrorMsg, onSetLoadingLocation } =
  locationSlice.actions;
