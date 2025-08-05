import React from "react";
import {createBrowserRouter} from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TodoForm from "./pages/TodoForm";
import Todos from "./pages/Todos";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/signup",
        element: <Signup/>,
    },
    {
        path: "/todo",
        element: <TodoForm/>,
    },
    {
        path: "/todos",
        element: <Todos/>,
    }
])

export default router;