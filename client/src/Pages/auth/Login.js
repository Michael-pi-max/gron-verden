import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../../components/FormikControl';

//auth and redux
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions/userAction';
import { useHistory } from 'react-router-dom';

function Login({loginUser}) {

    const history = useHistory();

    const initialValues = {
        email: '',
        password: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Email field is required'),
        password: Yup.string().required('Password Field is required')
    })
    const onSubmit = (values, { setSubmitting, setFieldError}) => {
        console.log('Form data', values);
        loginUser(values, history, setFieldError, setSubmitting);

    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                formik => {
                    return <Form>
                        <FormikControl 
                            control='input'
                            type='email'
                            label='Email'
                            name='email'
                        />
                        <FormikControl 
                            control='input'
                            type='password'
                            label='Password'
                            name='password'
                        />
                        <button type="submit" disabled={!formik.isValid}>Submit</button>
                    </Form>
                }
            }
        </Formik>
    );
}

export default connect(null, {loginUser})(Login);