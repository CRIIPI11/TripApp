import { createSlice } from "@reduxjs/toolkit";

const initialState = { info: { name: "", img: "", desc: "" } };

export const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    setInfo: (state, actions) => {
      state.info = actions.payload;
    },
  },
});

export const { setInfo } = infoSlice.actions;

export default infoSlice.reducer;
