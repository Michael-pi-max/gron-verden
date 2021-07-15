import { useEffect } from 'react';
import { Card, Form, Input, Button, Typography, Alert } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync } from '../../store/user/action';
import { fetchUserAsync } from '../../store/user/action';

import './style.css';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { loginLoading, loginError, token } = useSelector(
    (state) => state.user
  );

  const { user: userObject, fetchUserLoading } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (token) {
      dispatch(fetchUserAsync());
      history.push('/');
    }
  }, [token]);

  const handleSubmit = (values) => {
    const { email, password } = values;
    dispatch(loginAsync(email, password));
  };

  return (
    <div
      style={{
        backgroundImage: "url('/login-background.jpg')",
        backgroundSize: '100% 100%',
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: '300px',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Card style={{ width: '500px' }} className="box-shadow">
        <img src="images/logo.png" alt="Grøn Verden" className="img-fluid mx-auto" />
        <h4 style={{ textAlign: 'center' }}>Login</h4>
        {loginError && loginError.response ? (
          <Alert
            message={loginError.response.data.message}
            type="error"
            closable
            style={{
              marginTop: 5,
              marginBottom: 5,
            }}
          />
        ) : null}

        <Form initialValues={{}} onFinish={handleSubmit}>
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input size="large" placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password size="large" placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: '200px' }}
                loading={loginLoading}
                disabled={loginLoading}
              >
                Login
              </Button>
            </div>
          </Form.Item>
          <Form.Item>
            <Typography.Text>
              Don't have account? <Link to="/register">Sign Up</Link>
            </Typography.Text>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
export default Login;
