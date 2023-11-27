import Stack from '@mui/material/Stack';

import playerImg from '/player.png';

export default function PlayerBasicInfo() {

    return(
        <Stack spacing={2} direction={"row"}>
            <img src={playerImg} height={256}/>
            <Stack spacing={3}>
                <h3>Name: Kevin De Bruyne AAAAAAAAAAAA</h3>
                <h3>Height:</h3>
                <h3>Weight:</h3>
                <h3>Gender:</h3>
                <h3>Birthdate:</h3>
                <h3>Age:</h3>
            </Stack>
        </Stack>
    )
}