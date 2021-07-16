import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import { Upload, message, DatePicker } from 'antd';
import { UploadOutlined, UserOutlined } from '@ant-design/icons';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function ProfileForm({user}) {
  console.log(user)
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item
        name="firstName"
        label="First Name"
        rules={[{ required: true }]}
      >
        
        <Input placeholder={user.firstName}/>
      </Form.Item>
      <Form.Item name="lastName" label="Last Name" rules={[{ required: true }]}>
        <Input placeholder={user.lastName}/>
      </Form.Item>
      <Form.Item name="userName" label="Username" rules={[{ required: true }]}>
        <Input
          placeholder={user.userName}
          prefix={<UserOutlined className="site-form-item-icon" />}
        />
      </Form.Item>

      {/* <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
        <Select placeholder={user.gender} allowClear>
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
        </Select>
      </Form.Item> */}
      {/* <Form.Item name="dateOfBirth" label="DatePicker">
        <DatePicker className="w-100" placeholder={user.dateOfBirth}/>
      </Form.Item> */}
      <Form.Item name="email" label="Email" rules={[{ required: true }]}>
        <Input placeholder={user.email}/>
      </Form.Item>
      <Form.Item
        name="phoneNumber"
        label="Phone Number"
        rules={[{ required: true }]}
      >
        <Input placeholder={user.phoneNumber}/>
      </Form.Item>
      <Form.Item name="city" label="City" rules={[{ required: true }]}>
        <Input placeholder={user.city}/>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
}

export default ProfileForm;
