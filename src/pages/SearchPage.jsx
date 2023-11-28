import AppBarHeader from "../components/AppBarHeader";
import { useSearchParams } from "react-router-dom";
import Box from "@mui/material/Box";
import SearchByName from "../data/SearchByName";
import { useSelector, useDispatch } from "react-redux";
import { setNavbarValue } from "../features/navbarSlice";
import React, { useState, useEffect } from 'react';

export default function SearchPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNavbarValue(null));
  }, []);


  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const playersIDs = SearchByName(query);

  console.log(playersIDs)

  return (
    <>
      <AppBarHeader />
      <Box sx={{ ml: "2vw", mr: "2vw" }}>
        <h1>Search for {query}</h1>
      </Box>
    </>
  );
}
