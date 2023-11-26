import AppBarHeader from "../components/AppBarHeader";
import Box from "@mui/material/Box";
import { useParams } from 'react-router-dom';
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';

import playerImg from '/player.png';
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
                <Stack spacing={2} direction={"row"}>
                  <img src={playerImg} height={256}/>
                    <Stack spacing={3}>
                      <h3>Name: Kevin De Bruyne AAAAAAAAAAAA</h3>
                      <h3>Height:</h3>
                      <h3>Weight:</h3>
                      <h3>Gender:</h3>
                      <h3>Birthdate:</h3>
                      <h3>Age:</h3>
                    </Stack>
                </Stack>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Stack spacing={2}>
                      <h3>Rating:</h3>
                      <h3>Pace:</h3>
                      <h3>Shooting:</h3>
                      <h3>Passing:</h3>
                      <h3>Dribbling:</h3>
                      <h3>Defending:</h3>
                      <h3>Physical:</h3>
                    </Stack>
                  </Grid>

                  <Grid item xs={6}>
                    <Stack spacing={2}>
                      <h3>Position: CAM</h3>
                      <Stack spacing={2} direction={"row"}>
                        <h3>Skill Moves:</h3>
                        <Rating name="read-only" value={4} readOnly />
                      </Stack>
                      <Stack spacing={2} direction={"row"}>
                      <h3>Weak Foot:</h3>
                        <Rating name="read-only" value={4} readOnly />
                      </Stack>
                      <h3>Foot:</h3>
                    </Stack>
                  </Grid>
                </Grid>
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
