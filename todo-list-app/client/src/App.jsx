import React from "react";
import router from "./router";
import { RouterProvider } from "react-router";

const App = () => {
    return (
        <>
        <RouterProvider router={router}></RouterProvider>
        </>
    )
}

export default App;