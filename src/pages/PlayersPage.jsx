import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import AppBarHeader from "../components/AppBarHeader";
import PlayerTable from "../components/PlayerTable";
import { useDispatch } from "react-redux";
import { setNavbarValue } from "../features/navbarSlice";
import { useEffect } from "react";

export default function PlayersPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNavbarValue("players"));
  }, []);

  return (
    <>
      <AppBarHeader />
      <Box sx={{ ml: "2vw", mr: "2vw" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h2
              style={{
                color: "#273746",
                marginTop: "0vw",
                marginBottom: "0vw",
              }}
            >
              Players
            </h2>
          </Grid>

          <Grid item xs={12}>
            <PlayerTable />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
