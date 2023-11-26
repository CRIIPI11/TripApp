import { createSlice } from "@reduxjs/toolkit";

const initialState = { active: false, trip: null };

export const activeSlice = createSlice({
  name: "active",
  initialState,
  reducers: {
    onSetTrip: (state, action) => {
      state.active = true;
      state.trip = action.payload;
    },
    onEnd: (state, action) => {
      state.active = false;
      state.trip = null;
    },
  },
});

export const { onSetTrip, onEnd } = activeSlice.actions;
