import AppBarHeader from "../components/AppBarHeader";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { setNavbarValue } from "../features/navbarSlice";
import { useEffect } from "react";
import Grid from "@mui/material/Grid";
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

export default function AboutPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNavbarValue("about"));
  }, []);

  return (
    <>
      <AppBarHeader />
      <Box sx={{ ml: "2vw", mr: "2vw" }}>
        <Grid container spacing={2}>
          <Grid item xs={1}></Grid>
          <Grid item xs={11}>
            <h2
              style={{
                color: "#273746",
                marginTop: "0vw",
                marginBottom: "0vw",
              }}
            >
              About
            </h2>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={4}>
            <img src="me.jpg" width="100%" style={{ borderRadius:"10px" }} />
          </Grid>
          <Grid item xs={6}>
            <Item>
              <h1 >Nuno Cunha</h1>
              <p>Hi, I{"'"}m Nuno Cunha! I{"'"}m a 5th year Informatics Engineering student at the University of Aveiro. I{"'"}m passionate about web development and internet of things. I{"'"}m also an avid soccer fan, and I{"'"}m always looking for ways to combine my interests. I hope you enjoy this project!</p>
              <p>Within the realm of my Technologies and Web Development course, I{"'"}m engrossed in an ambitious project. Fueled by React, this dynamic dashboard taps into external APIs, delivering real-time FIFA player data. Covering player essentials, detailed metrics, and affiliations with clubs, leagues, and nations, the platform promises a rich, immersive experience. The addition of a user-friendly search function enhances accessibility, catering to both casual users and dedicated FIFA enthusiasts. Join me on this journey as I delve into the intricacies of web development, API integration, and the fascinating world of player statistics!</p>
              <p>Crafting the FIFA Players Dashboard for my Technologies and Web Development course has been a condensed crash course in React, API integration, and continuous integration. This hands-on experience has sharpened my UI design skills, solidified my understanding of real-time data updates, and streamlined my development workflow.</p>
              <p>Ready to explore? ⚽🎮</p>
            </Item>
          </Grid>
        </Grid>
        
      </Box>

    </>
  );
}
