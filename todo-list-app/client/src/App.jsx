import React from "react";
import { RouterProvider } from "react-router";
import { SnackbarProvider } from "notistack";
import router from "./router";

const App = () => {
    return (
        <SnackbarProvider>
            <RouterProvider router={router}></RouterProvider>
        </SnackbarProvider>
    )
}

export default App;