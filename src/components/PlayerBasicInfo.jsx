import Stack from "@mui/material/Stack";
import { useSelector, useDispatch } from "react-redux";
import { fetchPlayerImg } from "../features/playerImgSlice";
import { useEffect } from "react";

export default function PlayerBasicInfo() {
  const dispatch = useDispatch();

  const infoPlayer = useSelector((state) => state.infoPlayer.value);

  const playerImg = useSelector((state) => state.playerImg.value);

  useEffect(() => {
    if (infoPlayer){
      dispatch(fetchPlayerImg(infoPlayer.id));
    }
  }, [infoPlayer]);  


  return (
    <Stack spacing={2} direction={"row"}>
      <img src={playerImg && playerImg} height={256} />
      <Stack spacing={3}>
        <h3>Name: {infoPlayer && infoPlayer.firstName + " " + infoPlayer.lastName} </h3>
        <h3>Height: {infoPlayer && infoPlayer.height} cm</h3>
        <h3>Weight: {infoPlayer && infoPlayer.weight} kg</h3>
        <h3>Gender: {infoPlayer && infoPlayer.gender} </h3>
        <h3>Birthdate: {infoPlayer && infoPlayer.birthDate} </h3>
        <h3>Age: {infoPlayer && infoPlayer.age} </h3>
      </Stack>
    </Stack>
  );
}
