import AppBarHeader from "../components/AppBarHeader";
import Box from "@mui/material/Box";
import { useParams } from 'react-router-dom';
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import React, { useState, useEffect } from 'react';

import PlayerBasicInfo from "../components/PlayerBasicInfo";
import PlayerStats from "../components/PlayerStats";
import { useSelector, useDispatch } from "react-redux";
import { setNavbarValue } from "../features/navbarSlice";
import { fetchTeamName } from "../features/teamNameSlice"
import { fetchLeagueName } from "../features/leagueNameSlice";
import { fetchNationName } from "../features/nationNameSlice";
import { fetchTeamImg } from "../features/teamImgSlice";
import { fetchLeagueImg } from "../features/leagueImgSlice";
import { fetchNationImg } from "../features/nationImgSlice";

import { getPlayerInfoByID } from "../features/api";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  borderRadius: "10px"
}));

export default function PlayerInfoPage() {
  let { playerID } = useParams();

  const dispatch = useDispatch();

  const teamName = useSelector((state) => state.teamName.value)
  const leagueName = useSelector((state) => state.leagueName.value)
  const nationName = useSelector((state) => state.nationName.value)
  const teamImg = useSelector((state) => state.teamImg.value)
  const leagueImg = useSelector((state) => state.leagueImg.value)
  const nationImg = useSelector((state) => state.nationImg.value)
  

  useEffect(() => {
    dispatch(setNavbarValue(null));


    getPlayerInfoByID(playerID).then((res) => {
      const playerInfo = res.data.player
      dispatch(fetchTeamName(playerInfo.club));
      dispatch(fetchLeagueName(playerInfo.league));
      dispatch(fetchNationName(playerInfo.nation));
      dispatch(fetchTeamImg(playerInfo.club));
      dispatch(fetchLeagueImg(playerInfo.league));
      dispatch(fetchNationImg(playerInfo.nation));
    })



  }, []);

  return (
    <>
      <AppBarHeader />
      <Box sx={{ ml: "2vw", mr: "2vw" }}>
        <Grid container spacing={2}>
            <Grid item xs={2}>
              <h2
                style={{
                  color: "#273746",
                  marginTop: "0vw",
                  marginBottom: "0vw",
                }}
              >
                Player Info
              </h2>
            </Grid>
            <Grid item xs={10}></Grid>
            <Grid item xs={6}>
              <Item>
                <PlayerBasicInfo />
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <PlayerStats />
              </Item>
            </Grid>
            <Grid item xs={4}> 
              <Item sx={{textAlign: 'center'}}>
                <img src={teamImg} height={"160vh"}/>
                <h3>{teamName}</h3>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item sx={{textAlign: 'center'}}>
                <img src={leagueImg} height={"160vh"}/>
                <h3>{leagueName}</h3>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item sx={{textAlign: 'center'}}>
                <img src={nationImg} height={"160vh"}/>
                <h3>{nationName}</h3>
              </Item>
            </Grid>
          </Grid>
      </Box>
    </>
  );
}
