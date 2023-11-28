import AppBarHeader from "../components/AppBarHeader";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { setNavbarValue } from "../features/navbarSlice";
import { useEffect } from "react";

export default function AboutPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNavbarValue("about"));
  }, []);

  return (
    <>
      <AppBarHeader />
      <Box sx={{ ml: "2vw", mr: "2vw" }}>
        <h1>AboutPage</h1>
      </Box>
    </>
  );
}
