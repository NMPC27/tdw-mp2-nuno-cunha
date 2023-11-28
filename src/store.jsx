import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./features/navbarSlice";
import playersReducer from './features/playerSlice';
import infoPlayerReducer from './features/infoPlayerSlice';
import teamNameReducer from './features/teamNameSlice';
import leagueNameReducer from "./features/leagueNameSlice";
import nationNameReducer from "./features/nationNameSlice";
import teamImgReducer from "./features/teamImgSlice";
import leagueImgReducer from "./features/leagueImgSlice";
import nationImgReducer from "./features/nationImgSlice";
import playerImgReducer from "./features/playerImgSlice";


export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    players: playersReducer,
    infoPlayer:  infoPlayerReducer,
    teamName: teamNameReducer,
    leagueName: leagueNameReducer,
    nationName: nationNameReducer,
    teamImg: teamImgReducer,
    leagueImg: leagueImgReducer,
    nationImg: nationImgReducer,
    playerImg: playerImgReducer
  },
});
