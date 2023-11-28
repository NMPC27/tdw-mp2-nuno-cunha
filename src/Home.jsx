import AppBarHeader from "./components/AppBarHeader";
import { useSelector, useDispatch } from "react-redux";
import { setNavbarValue } from "./features/navbarSlice";
import React, { useState, useEffect } from 'react';


export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNavbarValue("home"));
  }, []);

  return (
    <>
      <AppBarHeader />
      <h1>Home</h1>
    </>
  );
}
