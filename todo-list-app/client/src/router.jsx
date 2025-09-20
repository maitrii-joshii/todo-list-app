import React from "react";
import { createBrowserRouter } from "react-router";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TodoForm from "./pages/TodoForm";
import Todos from "./pages/Todos";
import ProtectedRoute from "./components/common/ProtectedRoutes";
import PublicRoute from "./components/common/PublicRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        element: <PublicRoute />,
        children: [
            {
                path: "/login",
                element: <Login/>,
            },
            {
                path: "/signup",
                element: <Signup/>,
            }
        ]
    },
    {
        element: <ProtectedRoute />,
        children: [
            {
                element: <Layout />,
                children:[
                    {
                        path: "/todos/:todoId",
                        element: <TodoForm/>,
                    },
                    {
                        path: "/todos",
                        element: <Todos/>,
                    }
                ]
            }
        ]
    }
])

export default router;