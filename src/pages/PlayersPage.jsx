import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import AppBarHeader from "../components/AppBarHeader";
import PlayerTable from "../components/PlayerTable";

export default function PlayersPage() {
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
              PlayersPage
            </h2>
          </Grid>
          <Grid item xs={10}></Grid>

          <Grid item xs={12}>
            <PlayerTable />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
