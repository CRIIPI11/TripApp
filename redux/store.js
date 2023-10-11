import { configureStore } from "@reduxjs/toolkit";
import infoSlice from "./infoSlice";
import filterSlice from "./filterSlice";
import { locationSlice } from "./location/locationSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    info: infoSlice,
    filter: filterSlice,
    location: locationSlice.reducer,
    user: userSlice,
  },
});
