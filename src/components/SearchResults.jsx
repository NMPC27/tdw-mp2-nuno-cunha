import { DataGrid } from "@mui/x-data-grid";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setPlayerInfo } from "../features/infoPlayerSlice";
import PropTypes from "prop-types";

import {
  getPlayerInfoByID,
  getClubByID,
  getLeagueByID,
  getNationsByID,
  getPlayerImgByID,
} from "../features/api";

const columns = [
  {
    field: "resourceId",
    headerName: "Photo",
    width: 70,
    renderCell: (params) => <img src={params.value} width="100%" />,
  },
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

  useEffect(() => {
    let tmp = [];
    props.playersIDs.forEach((val) => {
      getPlayerInfoByID(val).then((result) => {
        getClubByID(result.data.player.club).then((res) => {
          result.data.player.club = res.data.club.name;

          getLeagueByID(result.data.player.league).then((res) => {
            result.data.player.league = res.data.league.name;

            getNationsByID(result.data.player.nation).then((res) => {
              result.data.player.nation = res.data.nation.name;

              getPlayerImgByID(result.data.player.id).then((res) => {
                result.data.player.resourceId = res;

                tmp = [...tmp, result.data.player];
                setData(tmp);
              });
            });
          });
        });
      });
    });
  }, [props.playersIDs]);

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

SearchResults.propTypes = {
  playersIDs: PropTypes.object.isRequired,
};
