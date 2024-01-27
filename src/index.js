import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import "./firebase";

import NoAccesPage from "./Pages/NoAccessPage";
import EditProfilePage from "./Pages/EditProfilePage";
import LoginPage from "./Pages/LoginPage";
import MainPage from "./Pages/MainPage";
import ProfilePage from "./Pages/ProfilePage";
// import ReelsPage from "./Pages/ReelsPage";
import SignUpPage from "./Pages/SignUpPage";

const dayjs = require("dayjs");
require("dayjs/locale/ru");
dayjs.locale("ru");

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NoAccesPage />,
    children: [
      {
        errorElement: <NoAccesPage />,
        children: [
          {
            path: "",
            element: <MainPage />,
          },
          {
            path: ":userNickname",
            element: <ProfilePage />,
          },
        ],
      },
    ],
  },
  {
    path: "accounts",
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "emailsignup",
        element: <SignUpPage />,
      },
      { path: "edit", element: <EditProfilePage /> },
    ],
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

