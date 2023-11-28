import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";

const hexCodes = [
  "#ED1717",
  "#F24D11",
  "#F6830C",
  "#FBB806",
  "#FFEE00",
  "#FEFB01",
  "#CEFB02",
  "#87FA00",
  "#3AF901",
  "#00ED01",
];

export default function PlayerStats() {
  const infoPlayer = useSelector((state) => state.infoPlayer.value);

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Grid container spacing={1}>
          <Grid item xs={8}>
            <h3 style={{ marginTop: "0.4vw", marginBottom: "0.4vw" }}>
              Rating:
            </h3>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              style={{
                backgroundColor: hexCodes[Math.floor(infoPlayer.rating / 10)],
              }}
            >
              {infoPlayer.rating}
            </Button>
          </Grid>
        </Grid>
        <Stack spacing={2}>
          <h3 style={{ marginTop: "1vw" }}>Position: {infoPlayer.position}</h3>
          <h3>Foot: {infoPlayer.foot}</h3>
        </Stack>

        <Grid container spacing={2} sx={{ marginTop: "0vw" }}>
          <Grid item xs={6}>
            <h3 style={{ marginTop: "0vw", marginBottom: "0vw" }}>
              Skill Moves:
            </h3>
          </Grid>
          <Grid item xs={6}>
            <Rating name="read-only" value={infoPlayer.skillMoves} readOnly />
          </Grid>
          <Grid item xs={6}>
            <h3 style={{ marginTop: "0vw", marginBottom: "0vw" }}>
              Weak Foot:
            </h3>
          </Grid>
          <Grid item xs={6}>
            <Rating name="read-only" value={infoPlayer.weakFoot} readOnly />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={6}>
        <Grid container spacing={1}>
          <Grid item xs={9}>
            <h3 style={{ marginTop: "0.4vw", marginBottom: "0.4vw" }}>Pace:</h3>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              style={{
                backgroundColor: hexCodes[Math.floor(infoPlayer.pace / 10)],
              }}
            >
              {infoPlayer.pace}
            </Button>
          </Grid>
          <Grid item xs={9}>
            <h3 style={{ marginTop: "0.4vw", marginBottom: "0.4vw" }}>
              Shooting:
            </h3>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              style={{
                backgroundColor: hexCodes[Math.floor(infoPlayer.shooting / 10)],
              }}
            >
              {infoPlayer.shooting}
            </Button>
          </Grid>
          <Grid item xs={9}>
            <h3 style={{ marginTop: "0.4vw", marginBottom: "0.4vw" }}>
              Passing:
            </h3>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              style={{
                backgroundColor: hexCodes[Math.floor(infoPlayer.passing / 10)],
              }}
            >
              {infoPlayer.passing}
            </Button>
          </Grid>
          <Grid item xs={9}>
            <h3 style={{ marginTop: "0.4vw", marginBottom: "0.4vw" }}>
              Dribbling:
            </h3>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              style={{
                backgroundColor:
                  hexCodes[Math.floor(infoPlayer.dribbling / 10)],
              }}
            >
              {infoPlayer.dribbling}
            </Button>
          </Grid>
          <Grid item xs={9}>
            <h3 style={{ marginTop: "0.4vw", marginBottom: "0.4vw" }}>
              Defending:
            </h3>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              style={{
                backgroundColor:
                  hexCodes[Math.floor(infoPlayer.defending / 10)],
              }}
            >
              {infoPlayer.defending}
            </Button>
          </Grid>
          <Grid item xs={9}>
            <h3 style={{ marginTop: "0.4vw", marginBottom: "0.4vw" }}>
              Physicality:
            </h3>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              style={{
                backgroundColor:
                  hexCodes[Math.floor(infoPlayer.physicality / 10)],
              }}
            >
              {infoPlayer.physicality}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
