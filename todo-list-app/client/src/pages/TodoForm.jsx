import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  TextField,
  Container,
  Typography,
  Paper,
  Stack
} from "@mui/material";
import { useSnackbar } from "notistack";
import { useNavigate, useParams } from "react-router";
import Loader from "../components/common/loader";
import apiRequest from "../utils/apiClient";

const validationSchema = Yup.object({
    title: Yup
        .string('Enter title for your Todo task')
        .max(50, 'First name should not exceed 50 characters length')
        .required('Todo task title is required'),
    description: Yup
        .string('Enter description for your Todo task')
        .max(250, 'Description should not exceed 50 characters length')
        .nullable()
        .optional(),
});

const TodoForm = () => {
    const [loading, setLoading] = useState(true);
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const { todoId } = useParams();

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            let successText = " ";
            let result;
            if(todoId == 'new') {
                result = await apiRequest("/todos", {
                    method: "POST",
                    body: values,
                });
                successText = "Todo created successfully";
            }else {
                result = await apiRequest(`/todos/${todoId}`, {
                    method: "PUT",
                    body: values,
                });
                successText = "Todo updated successfully";
            }
            
            if (!(result.error)) {
                enqueueSnackbar(successText, { variant:'success' });
                navigate("/todos");
            }
        },
    });
    const { setFieldValue } = formik;
    
    useEffect(() => {
        const fetchTodo = async () => {
            if(todoId !== 'new') {
                const response = await apiRequest(`/todos/${todoId}`)
                const { title, description } = response.data;
                setFieldValue('title', title);
                setFieldValue('description', description);
                setLoading(false);
            }else {
                setLoading(false);
            }

        }
        fetchTodo();
    }, [todoId]);

    return (
        <Container sx={{display:"flex", justifyContent:"center", alignItems:"center", my:"auto", height:"100%"}}>
            {loading && <Loader/>}
            {!loading &&
                <Paper sx={{width:'50%'}} elevation={5}>
                    <form onSubmit={formik.handleSubmit}>
                        <Stack padding={7} spacing={5}>
                            <Typography variant='h5'>
                                Todo Task
                            </Typography>
                            <TextField
                                fullWidth
                                variant="outlined"
                                id="title"
                                name="title"
                                label="Title"
                                value={formik.values.title}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.title && Boolean(formik.errors.title)}
                                helperText={formik.touched.title && formik.errors.title}
                            />
                            <TextField
                                fullWidth
                                multiline
                                rows={5}
                                variant="outlined"
                                id="description"
                                name="description"
                                label="Description"
                                value={formik.values.description}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.description && Boolean(formik.errors.description)}
                                helperText={formik.touched.description && formik.errors.description}
                            />
                            <Button ccolor="primary" variant="contained" fullWidth type="submit">
                                Submit
                            </Button>
                        </Stack>
                    </form>
                </Paper>
            }
        </Container>
    )
}

export default TodoForm;