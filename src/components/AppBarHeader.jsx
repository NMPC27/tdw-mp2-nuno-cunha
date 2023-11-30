import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Alert from "@mui/material/Alert";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

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

  let navigate = useNavigate();

  const [text, setText] = useState("");

  const [showError, setShowError] = useState(false);

  return (
    <>
      <AppBar
        position="static"
        sx={{ bgcolor: "#1F2937", borderRadius: "30px", marginBottom: "1vw" }}
      >
        <Container maxWidth="xl">
          <Toolbar>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                sx={{
                  my: 2,
                  color: "white",
                  bgcolor: navbar == "home" && "#111827",
                  "&:hover":
                    navbar == "home"
                      ? { bgcolor: "#111827" }
                      : { bgcolor: "#374151" },
                  marginRight: "1vw",
                }}
                onClick={() => {
                  navigate("/");
                }}
              >
                HOME
              </Button>
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
                  navigate("/PlayersPage");
                }}
              >
                Players
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
                    if (text.length >= 3) {
                      navigate("/search?q=" + text);
                    } else {
                      setShowError(true);
                      setTimeout(() => {
                        setShowError(false);
                      }, 3000);
                    }
                  }
                }}
              />
            </Search>
          </Toolbar>
        </Container>
      </AppBar>
      {showError && (
        <div style={{ right: "1vw", position: "absolute" }}>
          <Alert severity="error" variant="filled" sx={{ width: "20vw" }}>
            Insert at least 3 leters to search!
          </Alert>
        </div>
      )}
    </>
  );
}
