import React from "react";
import { useState, useEffect } from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import Divider from "@mui/material/Divider";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";

const todos = [
    {
        id: 1,
        title: "My first todo",
        description: "This is my first todo task",
        isCompleted: false
    },
    {
        id: 2,
        title: "My second todo",
        description: "This is my second todo task",
        isCompleted: false
    },
    {
        id: 3,
        title: "My third todo",
        description: "This is my third todo task",
        isCompleted: false
    },
    {
        id: 4,
        title: "My fourth todo",
        description: "This is my fourth todo task",
        isCompleted: false
    },
    {
        id: 5,
        title: "My first todo",
        description: "This is my fifth todo task",
        isCompleted: false
    }
];

const Todos = () => {
    return (
        <Container>
            <Box sx={{ display:"flex", justifyContent:"space-between", alignItems:"center", my:2 }}>
                <Typography variant='h5'>
                    Todos List
                </Typography>
                <FormControl variant="outlined">
                    <InputLabel htmlFor="search">Search</InputLabel>
                    <OutlinedInput
                        id="search"
                        type="text"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="search"
                                    //onClick={handleClickShowPassword}
                                    edge="end"
                                >
                                    <SearchIcon/>
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Search"
                    />
                </FormControl>
            </Box>
            <Stack spacing={2}>
                {
                    todos.map((todo) => <TodoListItem key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        description={todo.description}
                        isCompleted={todo.isCompleted}
                    />)
                }
            </Stack>
        </Container>
    )
}

const TodoListItem = ({id, title, description, isCompleted}) => {
    return (
        <Box sx={{ p: 2, border: '1px solid black', borderRadius: 2, width: '100%' }}>
            <Stack direction={"row"} spacing={2}>
                <Box sx={{width:'5%'}}><Checkbox/></Box>
                <Box sx={{width:'20%', display:"flex", justifyContent:"start", alignItems:"center"}}>{title}</Box>
                <Box sx={{width:'50%', display:"flex", justifyContent:"start", alignItems:"center"}}>{description}</Box>
                <Box sx={{width:'10%', display:"flex", justifyContent:"start", alignItems:"center"}}>2025-08-01</Box>
                <Box sx={{width:'15%', display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
                        <EditIcon/><VisibilityIcon/><DeleteRoundedIcon/>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}

export default Todos;