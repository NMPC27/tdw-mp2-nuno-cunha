import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getPlayersPage, getClubByID, getLeagueByID, getNationsByID } from './api'

const initialState = {
  playersData: [],
}

export const fetchPlayersPage = createAsyncThunk(
  'players/getPlayersPage',
  async (page ,thunkAPI) => {
    const response = await getPlayersPage(page)
    return response
  }
)

const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchPlayersPage.fulfilled, (state, action) => {


      let tmp = action.payload.data.items




      tmp.forEach( (element,idx) => {
        console.log(element)
        tmp[idx].nation = getNationsByID(element.nation).then(
            (res) => {
                return res.data.nation.name
            }
        )
        
        tmp[idx].league = getLeagueByID(element.league).then(
            (res) => {
                return res.data.league.name
            }
        )

        tmp[idx].club = getClubByID(element.club).then(
            (res) => {
                return res.data.club.name
            }
        )
      })

      state.playersData = tmp
      console.log(state.playersData)
    })
  },
})

// Action creators are generated for each case reducer function
export const { } = playersSlice.actions

export default playersSlice.reducer