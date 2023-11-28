import { DataGrid } from "@mui/x-data-grid";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { fetchPlayersPage } from '../features/playerSlice'
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { setPlayerInfo } from "../features/infoPlayerSlice";

import { getClubByID, getLeagueByID, getNationsByID } from "../features/api";

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
  let navigate = useNavigate();
  const dispatch = useDispatch()

  const [page,setPage] = useState(0);

  const [data,setData] = useState([]);
  const [update,setUpdate] = useState(false);

  const playersData = useSelector((state) => state.players.playersData)

  useEffect(() => {
    if (playersData.length == 0 ){ // first time loading page
      dispatch(fetchPlayersPage(1))
      dispatch(fetchPlayersPage(2))
    }

    if (playersData.length/20 == page+1) {
      dispatch(fetchPlayersPage(page+2))
    }

  }, [page]);

  useEffect(() => {
    // o que acontece é que é feita uma copia do array
    // mas dps os elementos que ja estavam no array continuam a ser imutaveis
    // o que esta a seguir resolve -> optimizar

    const tmp = []
    playersData.forEach((val,index) => {
      tmp[index] = {...val}

      getClubByID(tmp[index].club).then((res) => {
        tmp[index].club=res.data.club.name
      })

      getLeagueByID(tmp[index].league).then((res) => {
        tmp[index].league=res.data.league.name
      })

      getNationsByID(tmp[index].nation).then((res) => {
        tmp[index].nation=res.data.nation.name 
      })

      setUpdate(true)
      setData(tmp)

    })

  
  }, [playersData]);

  useEffect(() => {
    if (update){

      setTimeout(() => {
        setData([...data])
      }, 1000);

      setTimeout(() => {
        setData([...data])
      }, 2000);

      setUpdate(false)
    }

  }, [data])



  const handleRowClick = (params) => {
    dispatch(setPlayerInfo(params.row))
    navigate("/PlayerInfoPage/"+params.row.id);
  };

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{ borderRadius: "10px", height: "35vw" }}
      >
        <DataGrid
          rows={data}
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
    </>
  );
}