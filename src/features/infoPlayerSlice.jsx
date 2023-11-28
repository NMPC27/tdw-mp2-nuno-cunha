import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null, // home, players, about, null, null
};

export const infoPlayerSlice = createSlice({
  name: "playerInfo",
  initialState,
  reducers: {
    setPlayerInfo: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setPlayerInfo } = infoPlayerSlice.actions;

export default infoPlayerSlice.reducer;
