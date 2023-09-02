import { configureStore } from "@reduxjs/toolkit";
import infoSlice from "./infoSlice";
import filterSlice from "./filterSlice";

export const store = configureStore({
  reducer: {
    info: infoSlice,
    filter: filterSlice,
  },
});
