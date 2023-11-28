import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import Home from "./Home.jsx";
import PlayerInfoPage from "./pages/PlayerInfoPage.jsx";
import PlayersPage from "./pages/PlayersPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import SearchPage from "./pages/SearchPage.jsx";

import { store } from "./store";
import { Provider } from "react-redux";

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
    path: "/AboutPage",
    element: <AboutPage />,
  },
  {
    path: "/PlayerInfoPage/:playerID",
    element: <PlayerInfoPage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>

      <RouterProvider router={router} />

  </Provider>,
);
