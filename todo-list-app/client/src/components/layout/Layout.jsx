import React from "react";
import {
  Typography,
  Box,
  Button
} from "@mui/material";
import { Outlet } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router";

const Layout = () => {

    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    }

    return (
        <>
            <header>
                <Box sx={{ display:"flex", justifyContent:"space-between", alignItems:"center", py:2, borderBottom: 1, boxShadow: 1, px: 2, borderColor: 'grey.500' }}>
                    <Typography variant='h3'>
                        Donezo
                    </Typography>
                    <Button color="primary" variant="contained" onClick={handleLogout}>Logout</Button>
                </Box>
            </header>
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </>
    );
}

export default Layout;