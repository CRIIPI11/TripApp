import { configureStore } from "@reduxjs/toolkit";
import infoSlice from "./infoSlice";
import filterSlice from "./filterSlice";
import { locationSlice } from "./location/locationSlice";

export const store = configureStore({
  reducer: {
    info: infoSlice,
    filter: filterSlice,
    location: locationSlice.reducer,
  },
});
