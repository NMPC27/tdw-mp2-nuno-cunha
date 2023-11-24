import React from "react";
import ReactDOM from "react-dom/client";

import Home from "./Home.jsx";
import PlayerInfo from "./PlayerInfo.jsx";
import TeamsPage from "./TeamsPage.jsx";
import PlayersPage from "./PlayersPage.jsx";

import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/PlayersPage",
    element: <PlayersPage />,
  },
  {
    path: "/TeamsPage",
    element: <TeamsPage />,
  },
  {
    path: "/PlayerInfo",
    element: <PlayerInfo />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
