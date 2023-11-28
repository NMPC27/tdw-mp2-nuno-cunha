import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPlayersPage } from "./api";

const initialState = {
  playersData: [],
};

export const fetchPlayersPage = createAsyncThunk(
  "players/getPlayersPage",
  async (page) => {
    const response = await getPlayersPage(page);
    return response.data.items;
  },
);

const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchPlayersPage.fulfilled, (state, action) => {
      // Add user to the state array

      action.payload.forEach((val) => {
        state.playersData.push(val);
      });
    });
  },
});

export default playersSlice.reducer;
