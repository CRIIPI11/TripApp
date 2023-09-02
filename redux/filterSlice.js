import { createSlice } from "@reduxjs/toolkit";

const initialState = { filter: [] };

export const filterSlice = createSlice({
  name: "fliter",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter =
        state.filter.find((e) => e === action.payload) === undefined
          ? [...state.filter, action.payload]
          : state.filter.filter((e) => e !== action.payload);
    },
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
