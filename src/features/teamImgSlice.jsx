import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getClubImgByID } from './api'

const initialState = {
  value: null,
}

export const fetchTeamImg = createAsyncThunk(
  'team/getTeamImg',
  async (teamID ,thunkAPI) => {
    const response = await getClubImgByID(teamID)
    return response
  }
)

const teamImgSlice = createSlice({
  name: 'teamImg',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchTeamImg.fulfilled, (state, action) => {
      // Add user to the state array

      state.value = action.payload

    })
  },
})

// Action creators are generated for each case reducer function
export const { } = teamImgSlice.actions

export default teamImgSlice.reducer