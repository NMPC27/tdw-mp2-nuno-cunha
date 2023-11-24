import { useState } from "react";


import AppBarHeader from "./components/AppBarHeader"

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppBarHeader />
      <h1>Home</h1>
    </>
  );
}
