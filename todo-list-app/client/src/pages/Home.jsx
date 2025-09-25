import React from "react";
import {
  Container,
  Typography,
  Box,
  Stack,
  Divider,
  Button
} from "@mui/material";
import { Link } from "react-router";

const Home = () => {
    return (
        <Container>
            <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", my:"auto", h:1}}>
                <Stack>
                    <Typography variant="h1">
                        Donezo
                    </Typography>
                    <Stack justifyContent="space-evenly" direction="row" divider={<Divider orientation="vertical" flexItem />}spacing={2}>
                        <Button variant="outlined" component={Link} to={'/login'}>Login</Button>
                        <Button variant="contained" component={Link} to={'/signup'}>Sign Up</Button>
                    </Stack>
                </Stack>
            </Box>
        </Container>
    )
}

export default Home;