import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./features/navbarSlice";
import playersReducer from './features/playerSlice'

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    players: playersReducer
  },
});
