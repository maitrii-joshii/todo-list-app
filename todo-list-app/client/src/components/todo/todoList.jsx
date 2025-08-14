import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Stack,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl,
  IconButton,
  Pagination,
  Button
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router";
import TodoListItem from "./todoListItems";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [searchVal, setSearchVal] = useState("");
    const navigate = useNavigate();
    
    const handleSearchClick = () => {
        fetchTodos(1, searchVal);
    }

    const handleCreateTodoClick = () => {
        navigate("/todos/new");
    }
    
    const fetchTodos = async (page=1, search="") => {
        const response = await fetch(`http://localhost:3000/api/v1/todos?page=${page}&title=${search}&description=${search}`);
        const result = await response.json();
        setTodos(result.items);
        setTotalPages(result.totalPages);
    }

    const handlePageChange = (event, page) => {
        fetchTodos(page, searchVal);
    }

    useEffect(() => {
        fetchTodos()
    }, [])

    const onTodoDelete = async () => {
        setSearchVal("");
        await fetchTodos();
    }
    
    return (
        <>
            <Box sx={{ display:"flex", justifyContent:"space-between", alignItems:"center", my:2 }}>
                <Typography variant='h5'>
                    Todos List
                </Typography>
                <FormControl variant="outlined">
                    <InputLabel htmlFor="search">Search</InputLabel>
                    <OutlinedInput
                        onChange={(event) => {setSearchVal(event.target.value)}}
                        id="search"
                        type="text"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="search"
                                    onClick={handleSearchClick}
                                    edge="end"
                                >
                                    <SearchIcon/>
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Search"
                    />
                </FormControl>
                <Button color="primary" variant="contained" onClick={handleCreateTodoClick}>Create Todo</Button>
            </Box>
            <Stack spacing={2}>
                {
                    todos.map((todo) => <TodoListItem key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        description={todo.description}
                        isCompleted={todo.isCompleted}
                        onDelete={onTodoDelete}
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