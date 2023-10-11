import { createSlice } from "@reduxjs/toolkit";

const initialState = { filter: undefined };

export const filterSlice = createSlice({
  name: "fliter",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      if (state.filter === action.payload) {
        state.filter = undefined;
      } else state.filter = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
