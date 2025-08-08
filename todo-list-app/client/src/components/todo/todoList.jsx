import React from "react";
import { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import Pagination from "@mui/material/Pagination";
import TodoListItem from "./todoListItems";

const TodoList = ({todos, totalPages, handlePageChange}) => {
    return (
        <>
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
            <Stack sx={{ display:"flex", justifyContent:"space-between", alignItems:"center", my:2 }} spacing={2}>
                <Pagination count={totalPages} variant="outlined" shape="rounded" onChange={handlePageChange}/>
            </Stack>
        </>
    )
}

export default TodoList;