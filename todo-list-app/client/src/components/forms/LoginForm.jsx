import React from "react";
import {Form, FormItem, Input, SubmitButton} from "formik-antd/lib";
import { Formik } from 'formik';

const LoginForm = () => {
    return (
        <Formik
        initialValues={{ username: '', password: '' }}
        render={() => (
            <Form>
                <FormItem name="username" label="Username">
                    <Input name="username"></Input>
                </FormItem>
                <FormItem name="password" label="Password">
                    <Input.Password name="password"></Input.Password>
                </FormItem>
                <SubmitButton>Submit</SubmitButton>
            </Form>
        )}
    />
    )
}

export default LoginForm;