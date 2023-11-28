import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getNationsByID } from "./api";

const initialState = {
  value: null,
};

export const fetchNationName = createAsyncThunk(
  "nation/getNationName",
  async (nationID) => {
    const response = await getNationsByID(nationID);
    return response.data.nation.name;
  },
);

const nationNameSlice = createSlice({
  name: "nationName",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchNationName.fulfilled, (state, action) => {
      // Add user to the state array

      state.value = action.payload;
    });
  },
});

export default nationNameSlice.reducer;
