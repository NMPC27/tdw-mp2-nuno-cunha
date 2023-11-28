import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getLeagueImgByID } from "./api";

const initialState = {
  value: null,
};

export const fetchLeagueImg = createAsyncThunk(
  "league/getLeagueImg",
  async (leagueID) => {
    const response = await getLeagueImgByID(leagueID);
    return response;
  },
);

const leagueImgSlice = createSlice({
  name: "leagueImg",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchLeagueImg.fulfilled, (state, action) => {
      // Add user to the state array

      state.value = action.payload;
    });
  },
});

export default leagueImgSlice.reducer;
