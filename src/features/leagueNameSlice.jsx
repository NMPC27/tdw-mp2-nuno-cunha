import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getLeagueByID } from './api'

const initialState = {
  value: null,
}

export const fetchLeagueName = createAsyncThunk(
  'league/getLeagueName',
  async (leagueID ,thunkAPI) => {
    const response = await getLeagueByID(leagueID)
    return response.data.league.name
  }
)

const leagueNameSlice = createSlice({
  name: 'leagueName',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchLeagueName.fulfilled, (state, action) => {
      // Add user to the state array

      state.value = action.payload

    })
  },
})

// Action creators are generated for each case reducer function
export const { } = leagueNameSlice.actions

export default leagueNameSlice.reducer