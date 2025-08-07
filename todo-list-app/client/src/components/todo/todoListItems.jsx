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
import Divider from "@mui/material/Divider";

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

export default TodoListItem;