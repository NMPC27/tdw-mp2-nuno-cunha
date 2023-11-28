import AppBarHeader from "./components/AppBarHeader";
import { useDispatch } from "react-redux";
import { setNavbarValue } from "./features/navbarSlice";
import { useEffect } from "react";

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
