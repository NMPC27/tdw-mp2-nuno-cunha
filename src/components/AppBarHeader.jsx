import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setNavbarValue } from "../features/navbarSlice";
import * as React from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function AppBarHeader() {
  const navbar = useSelector((state) => state.navbar.value);
  const dispatch = useDispatch();

  let navigate = useNavigate();

  const [text, setText] = React.useState("");

  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "#1F2937", borderRadius: "30px", marginBottom: "1vw" }}
    >
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              ml: "0.5vw",
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
            onClick={() => {
              dispatch(setNavbarValue("home"));
              navigate("/");
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              sx={{
                my: 2,
                color: "white",
                bgcolor: navbar == "players" && "#111827",
                "&:hover":
                  navbar == "players"
                    ? { bgcolor: "#111827" }
                    : { bgcolor: "#374151" },
                marginRight: "1vw",
              }}
              onClick={() => {
                dispatch(setNavbarValue("players"));
                navigate("/PlayersPage");
              }}
            >
              Players
            </Button>
            <Button
              sx={{
                my: 2,
                color: "white",
                bgcolor: navbar == "teams" && "#111827",
                "&:hover":
                  navbar == "teams"
                    ? { bgcolor: "#111827" }
                    : { bgcolor: "#374151" },
                marginRight: "1vw",
              }}
              onClick={() => {
                dispatch(setNavbarValue("teams"));
                navigate("/TeamsPage");
              }}
            >
              Teams
            </Button>
            <Button
              sx={{
                my: 2,
                color: "white",
                bgcolor: navbar == "about" && "#111827",
                "&:hover":
                  navbar == "teams"
                    ? { bgcolor: "#111827" }
                    : { bgcolor: "#374151" },
                marginRight: "1vw",
              }}
              onClick={() => {
                dispatch(setNavbarValue("about"));
                navigate("/AboutPage");
              }}
            >
              About
            </Button>
          </Box>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  navigate("/search?q=" + text);
                }
              }}
            />
          </Search>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
