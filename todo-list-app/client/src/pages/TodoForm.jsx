import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

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
    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <Container sx={{display:"flex", justifyContent:"center", alignItems:"center", my:"auto", height:"100%"}}>
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
        </Container>
    )
}

export default TodoForm;