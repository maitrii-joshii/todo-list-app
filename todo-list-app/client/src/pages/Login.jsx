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
import { useAuth } from "../context/AuthContext";

const validationSchema = Yup.object({
    email: Yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: Yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            const result = await fetch("http://localhost:3000/api/v1/users/login", {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const response = await result.json();
            const token = response.token;
            login(token);
            navigate("/todos");
        },
    });

    return (
        <Container sx={{display:"flex", justifyContent:"center", alignItems:"center", my:"auto", height:'100%'}}>
            <Paper sx={{width:'50%'}} elevation={5}>
                <form onSubmit={formik.handleSubmit}>
                    <Stack padding={7} spacing={5}>
                        <Typography variant="h5">
                            Login to your account
                        </Typography>
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
                            Login
                        </Button>
                    </Stack>
                </form>
            </Paper>
        </Container>
    )
}

export default Login;