import { DataGrid } from "@mui/x-data-grid";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { fetchPlayersPage } from '../features/playerSlice'
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useEffect } from 'react';

import { getPlayersPage } from '../features/api';

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 200 },
  { field: "lastName", headerName: "Last name", width: 200 },
  { field: "age", headerName: "Age", width: 100 },
  { field: "position", headerName: "Position", width: 100 },
  { field: "rating", headerName: "Rating", width: 100 },
  { field: "gender", headerName: "Gender", width: 100 },
  { field: "nation", headerName: "Nation", width: 150 },
  { field: "league", headerName: "League", width: 200 },
  { field: "club", headerName: "Club", width: 200 },
];


export default function PlayerTable() {

  const [page,setPage] = useState(0);

  const playersData = useSelector((state) => state.players.playersData)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log("useEffect_PAGE")
    dispatch(fetchPlayersPage(page+1))
    console.log(playersData)
  }, [page]);

  useEffect(() => {
    setInterval(() => {
      console.log(playersData)
     },2000);
  }, []);




  const handleRowClick = (params) => {
    console.log(params.row);
  };

  return (
    <TableContainer
      component={Paper}
      sx={{ borderRadius: "10px", height: "35vw" }}
    >
      <DataGrid
        rows={playersData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 20 },
          },
        }}
        onRowClick={handleRowClick}
        pageSizeOptions={[20]}
        onPaginationModelChange={(params) => {setPage(params.page)}}
      />
    </TableContainer>
  );
}
