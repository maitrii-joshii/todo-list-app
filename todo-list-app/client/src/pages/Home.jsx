import React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack";
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';


const Home = () => {
    return (
        <Container>
            <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", my:"auto", h:1}}>
                <Stack>
                    <Typography variant="h1">
                        Donezo
                    </Typography>
                    <Stack justifyContent="space-evenly" direction="row" divider={<Divider orientation="vertical" flexItem />}spacing={2}>
                        <Button variant="outlined">Login</Button>
                        <Button variant="contained">Sign Up</Button>
                    </Stack>
                </Stack>
            </Box>
        </Container>
    )
}

export default Home;