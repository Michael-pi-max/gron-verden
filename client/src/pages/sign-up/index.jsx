import { useEffect, useState } from 'react';
import { Card, Form, Input, Button, Typography, Alert, Modal } from 'antd';
import { Select } from 'antd';
import { Upload, message, DatePicker } from 'antd';
import { UploadOutlined, UserOutlined } from '@ant-design/icons';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { signUpAsync } from '../../store/user/action';
import './style.css';

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const SignUp = () => {
  const [registrationForm] = Form.useForm();
  const [form, setForm] = useState({
    file: null,
    fileList: [],
  });
  const [preview, setPreview] = useState({
    previewVisible: false,
    previewImage: '',
    previewTitle: '',
  });
  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreview({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    });
  };
  const beforeUpload = (file) => {
    if (!isJpgOrPng(file)) {
      message.error('Book cover can only be JPG/PNG file!');
    }
    return false;
  };

  const isJpgOrPng = (file) => {
    return (
      file.type === 'image/jpeg' ||
      file.type === 'image/jpg' ||
      file.type === 'image/png'
    );
  };
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  const handleChange = ({ fileList, file }) =>
    setForm({ ...form, file, fileList });

  const dispatch = useDispatch();
  const history = useHistory();
  const { signUpLoading, signUpError, token } = useSelector(
    (state) => state.user
  );

  console.log(signUpLoading);

  useEffect(() => {
    if (token === 'gotu') {
      history.push('/login');
    } else if (token) {
      history.push('/');
    }
  }, [token]);

  const handleSubmit = (values) => {
    const {
      firstName,
      lastName,
      email,
      password,
      userName,
      phoneNumber,
      gender,
      dateOfBirth,
      city,
    } = values;
    if (!form.file) {
      message.error('Profile Picture is required');
    } else if (!isJpgOrPng(form.file)) {
      message.error('Profile picture can only be JPG or PNG file');
    } else {
      console.log(form.file);
      const formData = new FormData();
      formData.append('firstName', firstName);
      formData.append('lastName', lastName);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('userName', userName);
      formData.append('phoneNumber', phoneNumber);
      formData.append('gender', gender);
      formData.append('dateOfBirth', dateOfBirth);
      formData.append('city', city);
      formData.append('profilePicture', form.file);
      formData.append('userRole', 'user');

      dispatch(signUpAsync(formData));

      if (signUpLoading) {
        <Redirect to="/login" />;
      }
    }
  };
  const onReset = () => {
    registrationForm.resetFields();
  };

  return (
    <div
      style={{
        backgroundImage: "url('/login-background.jpg')",
        backgroundSize: '100% 100%',
        height: '100vh',
        overflowY: 'hidden',
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: '300px',
        alignItems: 'center',
      }}
    >
      <Card
        style={{ width: '500px', height: '100vh', position: 'relative' }}
        className="box-shadow"
      >
        <h4 style={{ textAlign: 'center' }}>Sign Up</h4>
        {signUpError && signUpError.response ? (
          <Alert
            message={signUpError.response.data.message}
            type="error"
            closable
            style={{
              marginTop: 5,
              marginBottom: 5,
            }}
          />
        ) : null}
        <Form
          {...layout}
          form={registrationForm}
          name="control-hooks"
          onFinish={handleSubmit}
        >
          <img
            src="images/logo.png"
            alt="Grøn Verden"
            className="img-fluid float-right"
          />
          <Form.Item name="profile" label="Profile Picture">
            <Upload
              listType="picture-card"
              fileList={form.fileList}
              onPreview={handlePreview}
              onChange={handleChange}
              beforeUpload={beforeUpload}
            >
              {form.fileList.length === 1 ? null : uploadButton}
            </Upload>
          </Form.Item>

          <Form.Item
            name="firstName"
            label="First Name"
            rules={[{ required: true }]}
          >
            <Input placeholder="First name" />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[{ required: true }]}
          >
            <Input placeholder="Last name" />
          </Form.Item>
          <Form.Item
            name="userName"
            label="Username"
            rules={[{ required: true }]}
          >
            <Input
              placeholder="Enter your username"
              prefix={<UserOutlined className="site-form-item-icon" />}
            />
          </Form.Item>

          <Form.Item name="gender" label="Gender">
            <Select placeholder="Gender" allowClear>
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="dateOfBirth"
            label="Date Of Birth"
            rules={[{ required: true }]}
          >
            <DatePicker placeholder="Select birth date" className="w-100" />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true }]}>
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true }]}
          >
            <Input placeholder="Password" />
          </Form.Item>
          <Form.Item
            name="phoneNumber"
            label="Phone Number"
            rules={[{ required: true }]}
          >
            <Input placeholder="Phone number" />
          </Form.Item>
          <Form.Item name="city" label="City" rules={[{ required: true }]}>
            <Input placeholder="City" />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
          </Form.Item>
          <Form.Item>
            <Typography.Text>
              Already have account? <Link to="/login">Log in</Link>
            </Typography.Text>
          </Form.Item>
        </Form>
        <Modal
          visible={preview.previewVisible}
          title={preview.previewTitle}
          footer={null}
          onCancel={() => setPreview({ previewVisible: false })}
        >
          <img
            alt="example"
            style={{ width: '100%' }}
            src={preview.previewImage}
          />
        </Modal>
      </Card>
    </div>
  );
};
export default SignUp;
