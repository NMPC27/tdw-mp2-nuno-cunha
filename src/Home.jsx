import AppBarHeader from "./components/AppBarHeader";
import { useDispatch } from "react-redux";
import { setNavbarValue } from "./features/navbarSlice";
import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "left",
  color: theme.palette.text.secondary,
  borderRadius: "10px",
}));

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNavbarValue("home"));
  }, []);

  return (
    <>
      <AppBarHeader />
      <Box>
        <Container maxWidth="sm" sx={{ marginBottom: "3vw" }}>
          <h1 style={{ textAlign: "center" }}>FIFA Players</h1>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Welcome to the epicenter of virtual soccer brilliance! Ready to
            elevate your FIFA experience? Let{"'"}s play! ⚽🎮
          </Typography>
        </Container>
      </Box>
      <Grid container spacing={5}>
        <Grid item xs={1.5}></Grid>
        <Grid item xs={3}>
          <Item style={{ height: "17vw" }}>
            <h3
              style={{
                marginTop: "0.5vw",
                marginBottom: "0.5vw",
                textAlign: "center",
              }}
            >
              Players Info
            </h3>
            <p>
              Peel back the layers of your favorite players with our concise
              player info section. Uncover the essentials - from the name that
              echoes on the pitch to the birthdate that marks their soccer
              journey. Height, weight, gender - every detail at your fingertips.
              It{"'"}s more than data; it{"'"}s the human touch behind the game.
              Ready to explore? ⚽🔍
            </p>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item style={{ height: "17vw" }}>
            <h3
              style={{
                marginTop: "0.5vw",
                marginBottom: "0.5vw",
                textAlign: "center",
              }}
            >
              Players Stats
            </h3>
            <p>
              Dive into the heart of player performance with our comprehensive
              stats breakdown. From the overall rating that defines excellence
              to the nuances of pace, shooting, passing, dribbling, defending,
              and physicality, every facet of their game is laid bare. Explore
              their preferred position, dominant foot, and skill moves that set
              them apart. With details on their weak foot, get ready to analyze
              the complete picture of your favorite player{"'"}s prowess. Stats
              aficionados, your playground awaits! ⚽📈
            </p>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item style={{ height: "17vw" }}>
            <h3
              style={{
                marginTop: "0.5vw",
                marginBottom: "0.5vw",
                textAlign: "center",
              }}
            >
              Players Trifecta
            </h3>
            <p>
              Unlock the allegiance of your favorite players with our concise
              breakdown. Discover the club where they weave magic, the league
              where battles are fought, and the nation they proudly represent.
              It{"'"}s the ultimate trifecta encapsulating a player{"'"}s
              journey from local arenas to international glory. Dive into the
              heart of football loyalty – club, league, nation – their soccer
              story in three powerful words. Ready to explore the player{"'"}s
              world? ⚽🏟️🌍
            </p>
          </Item>
        </Grid>
        <Grid item xs={1.5}></Grid>
      </Grid>
    </>
  );
}
