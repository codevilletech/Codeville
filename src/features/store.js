import { configureStore } from "@reduxjs/toolkit";
import { mobileMenuSlice } from "./slices/mobileMenuSlice";

export const store = configureStore({
  reducer: {
    mobileMenu: mobileMenuSlice.reducer,
  },
});
