import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getNationsImgByID } from './api'

const initialState = {
  value: null,
}

export const fetchNationImg = createAsyncThunk(
  'nation/getNationImg',
  async (nationID ,thunkAPI) => {
    const response = await getNationsImgByID(nationID)
    return response
  }
)

const nationImgSlice = createSlice({
  name: 'nationImg',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchNationImg.fulfilled, (state, action) => {
      // Add user to the state array

      state.value = action.payload

    })
  },
})

// Action creators are generated for each case reducer function
export const { } = nationImgSlice.actions

export default nationImgSlice.reducer