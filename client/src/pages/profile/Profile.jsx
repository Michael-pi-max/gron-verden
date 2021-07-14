import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import { Upload, message, DatePicker } from 'antd';
import { UploadOutlined, UserOutlined } from '@ant-design/icons';import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';



const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};



function ProfileForm(props) {
    const [form] = Form.useForm();

//   const onGenderChange = (value) => {
//     switch (value) {
//       case 'male':
//         form.setFieldsValue({ note: 'Hi, man!' });
//         return;
//       case 'female':
//         form.setFieldsValue({ note: 'Hi, lady!' });
//         return;
//       case 'other':
//         form.setFieldsValue({ note: 'Hi there!' });
//     }
//   };

  const onFinish = (values) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };


  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      
      <Form.Item name="firstName" label="First Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="lastName" label="Last Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="userName" label="Username" rules={[{ required: true }]}>
        <Input
            placeholder="Enter your username"
            prefix={<UserOutlined className="site-form-item-icon" />}
            />
        </Form.Item>

      <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
        <Select
          placeholder="Gender"
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>
      <Form.Item name="dateOfBirth" label="DatePicker">
          <DatePicker />
        </Form.Item>
      {/* <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
      >
        {({ getFieldValue }) =>
          getFieldValue('gender') === 'other' ? (
            <Form.Item name="customizeGender" label="Customize Gender" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item> */}
       <Form.Item name="email" label="Email" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="phoneNumber" label="Phone Number" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
       <Form.Item name="city" label="City" rules={[{ required: true }]}>
        <Input />
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