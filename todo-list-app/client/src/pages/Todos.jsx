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
import Pagination from "@mui/material/Pagination";

const todos = [
{
        id: 1,
        title: "Setup development environment",
        description: "Install VSCode, Node.js, and Git",
        isCompleted: true
    },
    {
        id: 2,
        title: "Create project structure",
        description: "Initialize project with folder structure",
        isCompleted: false
    },
    {
        id: 3,
        title: "Learn JavaScript basics",
        description: "Cover variables, functions, and loops",
        isCompleted: true
    },
    {
        id: 4,
        title: "Understand async in JS",
        description: "Explore promises, async/await",
        isCompleted: false
    },
    {
        id: 5,
        title: "Practice DOM manipulation",
        description: "Build a simple counter using HTML/JS",
        isCompleted: true
    },
    {
        id: 6,
        title: "Buy groceries",
        description: "Milk, Bread, Eggs, and Fruits",
        isCompleted: true
    },
    {
        id: 7,
        title: "Read a book",
        description: "Read 20 pages of a novel",
        isCompleted: false
    },
    {
        id: 8,
        title: "Workout",
        description: "Complete 30 minutes of cardio",
        isCompleted: true
    },
    {
        id: 9,
        title: "Pay bills",
        description: "Pay electricity and internet bills",
        isCompleted: false
    },
    {
        id: 10,
        title: "Call parents",
        description: "Talk to parents for at least 15 minutes",
        isCompleted: true
    },
    {
        id: 11,
        title: "Clean room",
        description: "Organize wardrobe and clean the floor",
        isCompleted: false
    },
    {
        id: 12,
        title: "Learn JavaScript",
        description: "Practice JavaScript functions and loops",
        isCompleted: true
    },
    {
        id: 13,
        title: "Write blog post",
        description: "Draft a blog post on career transition",
        isCompleted: false
    },
    {
        id: 14,
        title: "Check emails",
        description: "Respond to important emails",
        isCompleted: true
    },
    {
        id: 15,
        title: "Attend meeting",
        description: "Project sync-up at 11 AM",
        isCompleted: true
    },
    {
        id: 16,
        title: "Plan weekend trip",
        description: "Research places and make a list",
        isCompleted: false
    },
    {
        id: 17,
        title: "Watch a tutorial",
        description: "Watch React JS crash course on YouTube",
        isCompleted: false
    },
    {
        id: 18,
        title: "Update resume",
        description: "Add latest project and update skills",
        isCompleted: true
    },
    {
        id: 19,
        title: "Backup files",
        description: "Backup important work files to cloud",
        isCompleted: false
    },
    {
        id: 20,
        title: "Refactor code",
        description: "Improve code structure in the Todo app",
        isCompleted: false
    },
    {
        id: 21,
        title: "Walk the dog",
        description: "Evening walk for 20 minutes",
        isCompleted: true
    },
    {
        id: 22,
        title: "Fix bugs",
        description: "Resolve UI issues in task management module",
        isCompleted: true
    },
    {
        id: 23,
        title: "Write unit tests",
        description: "Add test cases for user services",
        isCompleted: false
    },
    {
        id: 24,
        title: "Prepare presentation",
        description: "Slides for Monday’s team review",
        isCompleted: false
    },
    {
        id: 25,
        title: "Reflect on the day",
        description: "Write down what went well today",
        isCompleted: true
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
            <Stack sx={{ display:"flex", justifyContent:"space-between", alignItems:"center", my:2 }} spacing={2}>
                <Pagination count={5} variant="outlined" shape="rounded"/>
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