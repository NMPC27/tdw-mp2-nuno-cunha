import AppBarHeader from "../components/AppBarHeader";
import { useSearchParams } from "react-router-dom";
import Box from "@mui/material/Box";
import SearchByName from "../data/SearchByName";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const playerID = SearchByName(query);

  console.log(playerID);

  return (
    <>
      <AppBarHeader />
      <Box sx={{ ml: "2vw", mr: "2vw" }}>
        <h1>Search for {query}</h1>
      </Box>
    </>
  );
}
