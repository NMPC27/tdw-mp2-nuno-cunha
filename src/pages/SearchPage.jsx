import AppBarHeader from "../components/AppBarHeader";
import Grid from "@mui/material/Grid";
import { useSearchParams } from "react-router-dom";
import Box from "@mui/material/Box";
import SearchByName from "../data/SearchByName";
import { useDispatch } from "react-redux";
import { setNavbarValue } from "../features/navbarSlice";
import { useEffect } from "react";
import SearchResults from "../components/SearchResults";

export default function SearchPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNavbarValue(null));
  }, []);

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const playersIDs = SearchByName(query.toLowerCase());

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
              Search for {query}
            </h2>
          </Grid>

          <Grid item xs={12}>
              <SearchResults playersIDs={playersIDs} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
