import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getClubByID } from "./api";

const initialState = {
  value: null,
};

export const fetchTeamName = createAsyncThunk(
  "team/getTeamName",
  async (teamID) => {
    const response = await getClubByID(teamID);
    return response.data.club.name;
  },
);

const teamNameSlice = createSlice({
  name: "teamName",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchTeamName.fulfilled, (state, action) => {
      // Add user to the state array

      state.value = action.payload;
    });
  },
});

export default teamNameSlice.reducer;
