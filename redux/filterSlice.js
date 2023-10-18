import { createSlice } from "@reduxjs/toolkit";

const initialState = { filter: "museums" };

export const filterSlice = createSlice({
  name: "fliter",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
