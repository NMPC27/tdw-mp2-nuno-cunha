import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "home", // home, players, about, null, null
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setNavbarValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setNavbarValue } = navbarSlice.actions;

export default navbarSlice.reducer;
