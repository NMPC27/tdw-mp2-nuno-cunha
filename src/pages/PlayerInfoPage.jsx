import AppBarHeader from "../components/AppBarHeader";
import Box from "@mui/material/Box";
import { useParams } from 'react-router-dom';
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import PlayerBasicInfo from "../components/PlayerBasicInfo";
import PlayerStats from "../components/PlayerStats";

import clubImg from '/club.png';
import leagueImg from '/league.png';
import nationImg from '/nation.png';

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
                PlayerInfo {playerID}
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
                <img src={clubImg} height={"160vh"}/>
                <h3>Club</h3>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item sx={{textAlign: 'center'}}>
                <img src={leagueImg} height={"160vh"}/>
                <h3>leagueImg</h3>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item sx={{textAlign: 'center'}}>
                <img src={nationImg} height={"160vh"}/>
                <h3>nationImg</h3>
              </Item>
            </Grid>
          </Grid>
      </Box>
    </>
  );
}
