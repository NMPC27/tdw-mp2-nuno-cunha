import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import React, { useState, useEffect } from 'react';

const rating = 99;

const hexCodes = [
    "#ED1717", 
    "#F24D11", 
    "#F6830C", 
    "#FBB806", 
    "#FFEE00", 
    "#FEFB01",
    "#CEFB02", 
    "#87FA00", 
    "#3AF901", 
    "#00ED01"
  ];

export default function PlayerStats() {
    

    return(
        <Grid container spacing={2}>
            <Grid item xs={6}>
            <Stack spacing={2}>
                <Stack spacing={2} direction={"row"}>
                    <h3>Rating:</h3>
                    <Button variant="contained" style={{ backgroundColor: hexCodes[Math.floor(rating/10)] }} >{rating}</Button>
                </Stack>

                <h3>Pace:</h3>
                <h3>Shooting:</h3>
                <h3>Passing:</h3>
                <h3>Dribbling:</h3>
                <h3>Defending:</h3>
                <h3>Physical:</h3>
            </Stack>
            </Grid>

            <Grid item xs={6}>
            <Stack spacing={2}>
                <h3>Position: CAM</h3>
                <Stack spacing={2} direction={"row"}>
                    <h3>Skill Moves:</h3>
                    <Rating name="read-only" value={4} readOnly />
                </Stack>
                <Stack spacing={2} direction={"row"}>
                    <h3>Weak Foot:</h3>
                    <Rating name="read-only" value={4} readOnly />
                </Stack>
                <h3>Foot:</h3>
            </Stack>
            </Grid>
        </Grid>
    )
}