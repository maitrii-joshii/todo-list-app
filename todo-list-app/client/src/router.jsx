import React from "react";
import {createBrowserRouter} from "react-router";
import Login from "./pages/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>,
    }
])

export default router;