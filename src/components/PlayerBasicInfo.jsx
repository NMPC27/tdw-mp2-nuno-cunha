import Stack from "@mui/material/Stack";
import { useSelector, useDispatch } from "react-redux";
import { fetchPlayerImg } from "../features/playerImgSlice";
import { useEffect } from "react";

export default function PlayerBasicInfo() {
  const dispatch = useDispatch();

  const infoPlayer = useSelector((state) => state.infoPlayer.value);

  const playerImg = useSelector((state) => state.playerImg.value);

  useEffect(() => {
    dispatch(fetchPlayerImg(infoPlayer.id));
  }, []);

  return (
    <Stack spacing={2} direction={"row"}>
      <img src={playerImg} height={256} />
      <Stack spacing={3}>
        <h3>Name: {infoPlayer.firstName + " " + infoPlayer.lastName} </h3>
        <h3>Height: {infoPlayer.height} cm</h3>
        <h3>Weight: {infoPlayer.weight} kg</h3>
        <h3>Gender: {infoPlayer.gender} </h3>
        <h3>Birthdate: {infoPlayer.birthDate} </h3>
        <h3>Age: {infoPlayer.age} </h3>
      </Stack>
    </Stack>
  );
}
