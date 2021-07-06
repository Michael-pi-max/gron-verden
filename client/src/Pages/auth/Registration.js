import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../../components/FormikControl';

//auth and redux
import { connect } from 'react-redux';
import { signupUser } from '../../redux/actions/userAction';
import { useHistory } from 'react-router-dom';


function Registration({signupUser}) {
    const history = useHistory();

    const options = [
        { key: 'User', value: 'user'},
        { key: 'Provider', value: 'provider'},
        { key: 'gardner', value: 'gardner'}
    ]

    const initialValues = {
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
        email: '',
        userRole: '',
        shopName: '',
        phoneNumber: '',
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Required'),
        password: Yup.string().required('Password field is required!'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Password must match ').required('Password field is required!'),
        userRole: Yup.string().required('Required'),
        shopName: Yup.string().when('userRole', {
            is: 'provider',
            then: Yup.string().required('Required')
        }),
        phoneNumber: Yup.string().when('userRole', {
            is: 'gardner',
            then: Yup.string().required('Required')
        })
    })

    const onSubmit = (values, {setFieldError, setSubmitting}) => {
        signupUser(values, history, setFieldError, setSubmitting)
        console.log('Form data', values)
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                formik => {
                    return <Form>
                          <FormikControl 
                            control='input'
                            type='text'
                            label='First Name'
                            name='firstName'
                        />
                        <FormikControl 
                            control='input'
                            type='text'
                            label='Last Name'
                            name='lastName'
                        />
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
                        <FormikControl 
                            control='input'
                            type='password'
                            label='Confirm Password'
                            name='confirmPassword'
                        />
                        <FormikControl 
                            control='radio'
                            label='User Role'
                            name='userRole'
                            options={options}
                        />
                        <FormikControl 
                            control='input'
                            type='text'
                            label='Shop Name'
                            name='shopName'
                        />
                        <FormikControl 
                            control='input'
                            type='text'
                            label='Phone Number'
                            name='phoneNumber'
                        />
                        <button type='submit' disabled={!formik.isValid}>
                            Submit
                        </button>
                    </Form>
                }
            }
        </Formik>
    );
}

export default connect(null, {signupUser})(Registration);