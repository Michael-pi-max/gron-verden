import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Form,
  Input,
  Button,
  Select,
  Upload,
  Modal,
  message,
  DatePicker,
} from 'antd';
import {
  UploadOutlined,
  UserOutlined,
  LoadingOutlined,
  PlusOutlined,
} from '@ant-design/icons';

import {
  createShopAsync,
  clearCreateShopSuccess,
} from '../../../store/shop/action';
import { fetchUserAsync } from '../../../store/user/action';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 12 },
};

const CreateShop = ({ createShop }) => {
  const dispatch = useDispatch();
  const { createShopLoading, createShopError, createShopSuccess } = useSelector(
    (state) => state.shop
  );

  const [form, setForm] = useState({
    file: null,
    fileList: [],
  });

  const { user: userObject, fetchUserLoading } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (createShopSuccess) {
      message.success('Shop Created Succesfully');
      userObject.userRole = 'provider';
      dispatch(clearCreateShopSuccess());
      dispatch(fetchUserAsync());
    }
  }, [createShopSuccess]);
  if (!fetchUserLoading) {
    console.log(userObject);
  } else {
    console.log('still');
  }
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

  const [createShopForm] = Form.useForm();
  const onFinish = (values) => {
    const { shopName, startingHour, closingHour, shopDescription } = values;
    if (!form.file) {
      message.error('Shop logo is required');
    } else if (!isJpgOrPng(form.file)) {
      message.error('Shop logo can only be JPG or PNG file');
    } else {
      const formData = new FormData();
      formData.append('shopName', shopName);
      formData.append('shopDescription', shopDescription);
      formData.append('startingHour', startingHour);
      formData.append('closingHour', closingHour);
      formData.append('shopLogo', form.file);

      dispatch(createShopAsync(formData));
    }
  };
  const onReset = () => {
    createShopForm.resetFields();
  };

  return (
    <>
      <Form
        {...layout}
        form={createShopForm}
        name="control-hooks"
        onFinish={onFinish}
        className="pt-4"
      >
        <h1 className="text-center">Create Shop</h1>
        <Form.Item name="shopLogo" label="Profile Picture">
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
          name="shopName"
          label="Shop Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="startingHour"
          label="Starting Hour"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="closingHour"
          label="Closing Hour"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="shopDescription" label="Description">
          <Input.TextArea />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <span className="pr-4"></span>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
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
    </>
  );
};

export default CreateShop;
