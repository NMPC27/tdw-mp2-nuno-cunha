import { DataGrid } from "@mui/x-data-grid";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { fetchPlayersPage } from "../features/playerSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setPlayerInfo } from "../features/infoPlayerSlice";

import { getPlayerInfoByID, getClubByID, getLeagueByID, getNationsByID } from "../features/api";

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

export default function SearchResults(props) {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {

    let tmp = [];
    props.playersIDs.forEach((val,idx) => {

        getPlayerInfoByID(val).then((res) => {
            
            tmp = [...tmp, res.data.player ]

            getClubByID(res.data.player.club).then((res) => {
                tmp[idx].club = res.data.club.name;
            });
    
            getLeagueByID(res.data.player.league).then((res) => {
                tmp[idx].league = res.data.league.name;
            });
    
            getNationsByID(res.data.player.nation).then((res) => {
                tmp[idx].nation = res.data.nation.name;
            });

            setData(tmp);
        });

        setUpdate(true)
    });

  }, [props.playersIDs]);

  useEffect(() => {
    if (data.length == props.playersIDs.length && update) {

        setTimeout(() => {
            setData([...data]);
        }, 1000);

        setTimeout(() => {
            setData([...data]);
        }, 2000);

        setUpdate(false)
    }
  }, [data]);

  const handleRowClick = (params) => {
    dispatch(setPlayerInfo(params.row));
    navigate("/PlayerInfoPage/" + params.row.id);
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
        />
      </TableContainer>
    </>
  );
}
