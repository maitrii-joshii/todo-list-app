import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Checkbox,
  Box,
  Stack,
  Divider,
  IconButton
} from "@mui/material";
import { useSnackbar } from "notistack";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router";
import apiRequest from "../../utils/apiClient";

const TodoListItem = ({id, title, description, isCompleted, onDelete}) => {
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();

    const handleDeleteClick = async () => {
        await apiRequest(`/todos/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        enqueueSnackbar('Todo deleted successfully', { variant:'success' });
        if (onDelete) {
            onDelete();
        }
    }

    const handleEditClick = () => {
        navigate(`${id}`);
    }

    return (
        <Box sx={{ p: 2, border: '1px solid black', borderRadius: 2, width: '100%' }}>
            <Stack direction={"row"} spacing={2}>
                <Box sx={{width:'5%'}}><Checkbox/></Box>
                <Box sx={{width:'20%', display:"flex", justifyContent:"start", alignItems:"center"}}>{title}</Box>
                <Box sx={{width:'50%', display:"flex", justifyContent:"start", alignItems:"center"}}>{description}</Box>
                <Box sx={{width:'10%', display:"flex", justifyContent:"start", alignItems:"center"}}>2025-08-01</Box>
                <Box sx={{width:'15%', display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
                        <IconButton onClick={handleEditClick}>
                            <EditIcon/>
                        </IconButton>
                        <IconButton onClick={handleDeleteClick}>
                            <DeleteRoundedIcon/>
                        </IconButton>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}

export default TodoListItem;