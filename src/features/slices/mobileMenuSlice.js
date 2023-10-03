import { createSlice } from "@reduxjs/toolkit";

export const mobileMenuSlice = createSlice({
  name: "mobileMenuSlice",

  initialState: {
    showMainMenu: false,
  },

  reducers: {
    setShowMainMenu: (state) => {
      state.showMainMenu = !state.showMainMenu;
    },
  },
});
