import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getPlayerImgByID } from './api'

const initialState = {
  value: null,
}

export const fetchPlayerImg = createAsyncThunk(
  'player/getPlayerImg',
  async (playerID ,thunkAPI) => {
    const response = await getPlayerImgByID(playerID)
    return response
  }
)

const playerImgSlice = createSlice({
  name: 'playerImg',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchPlayerImg.fulfilled, (state, action) => {
      // Add user to the state array

      state.value = action.payload

    })
  },
})

// Action creators are generated for each case reducer function
export const { } = playerImgSlice.actions

export default playerImgSlice.reducer