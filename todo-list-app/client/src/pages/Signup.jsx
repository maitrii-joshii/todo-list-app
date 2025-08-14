import React from "react";
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
import { useNavigate, useParams } from "react-router";

const validationSchema = Yup.object({
    email: Yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: Yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    firstName: Yup
        .string('Enter your first name')
        .max(20, 'First name should not exceed 20 characters length')
        .required('First name is required'),
    lastName: Yup
        .string('Enter your last name')
        .max(20, 'Last name should not exceed 20 characters length')
        .required('Last name is required'),
});

const Signup = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            firstName: '',
            lastName: ''
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            await fetch("http://localhost:3000/api/v1/users/login", {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            navigate("/todos/new");
        },
    });

    return (
        <Container sx={{display:"flex", justifyContent:"center", alignItems:"center", my:"auto", height:"100%"}}>
            <Paper sx={{width:'50%'}} elevation={5}>
                <form onSubmit={formik.handleSubmit}>
                    <Stack padding={7} spacing={5}>
                        <Typography variant='h5'>
                            Create your account
                        </Typography>
                        <TextField
                            fullWidth
                            variant="outlined"
                            id="firstName"
                            name="firstName"
                            label="First Name"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                            helperText={formik.touched.firstName && formik.errors.firstName}
                        />
                        <TextField
                            fullWidth
                            variant="outlined"
                            id="lastName"
                            name="lastName"
                            label="Last Name"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                            helperText={formik.touched.lastName && formik.errors.lastName}
                        />
                        <TextField
                            fullWidth
                            variant="outlined"
                            id="email"
                            name="email"
                            label="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                        <TextField
                            fullWidth
                            variant="outlined"
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                        <Button color="primary" variant="contained" fullWidth type="submit">
                            Signup
                        </Button>
                    </Stack>
                </form>
            </Paper>
        </Container>
    )
}

export default Signup;