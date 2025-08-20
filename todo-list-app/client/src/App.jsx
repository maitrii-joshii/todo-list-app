import React from "react";
import { RouterProvider } from "react-router";
import { SnackbarProvider } from "notistack";
import router from "./router";
import { AuthProvider } from "./context/AuthContext";

const App = () => {

    return (
        <SnackbarProvider>
            <AuthProvider>
                <RouterProvider router={router}></RouterProvider>
            </AuthProvider>
        </SnackbarProvider>
    )
}

export default App;