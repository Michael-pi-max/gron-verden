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

// import { createEventAsync, clearCreateEventSuccess } from "../../../store/event/action";
import {
  createEventAsync,
  clearCreateEventSuccess,
} from '../../store/event/action';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const EventCreate = ({ createEvent }) => {
  const dispatch = useDispatch();
  const { createEventLoading, createEventError, createEventSuccess } =
    useSelector((state) => state.event);

  const [form, setForm] = useState({
    file: null,
    fileList: [],
  });

  // const { user: userObject, fetchUserLoading } = useSelector(
  //   (state) => state.user
  // );

  useEffect(() => {
    if (createEventSuccess) {
      message.success('Event Created Succesfully');
      dispatch(clearCreateEventSuccess());
      // dispatch(fetchUserAsync());
    }
  }, [createEventSuccess]);

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

  const [createEventForm] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
    const {
      eventName,
      eventDescription,
      eventGoal,
      eventStartDate,
      eventEndDate,
      eventTotalParticipants,
    } = values;
    if (!form.file) {
      message.error('Event logo is required');
    } else if (!isJpgOrPng(form.file)) {
      message.error('Event logo can only be JPG or PNG file');
    } else {
      const formData = new FormData();
      formData.append('eventName', eventName);
      formData.append('eventDescription', eventDescription);
      formData.append('eventGoal', eventGoal);
      formData.append('eventStartDate', eventStartDate);
      formData.append('eventEndDate', eventEndDate);
      formData.append('eventTotalParticipants', eventTotalParticipants);
      formData.append('eventLogo', form.file);

      dispatch(createEventAsync(formData));
    }
  };
  const onReset = () => {
    createEventForm.resetFields();
  };

  return (
    <>
      <Form
        {...layout}
        form={createEventForm}
        name="control-hooks"
        onFinish={onFinish}
      >
        <Form.Item name="eventLogo" label="Profile Picture">
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
          name="eventName"
          label="Event Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="eventGoal"
          label="Event Goal"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="eventStartDate"
          label="StartDate"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="eventEndDate"
          label="EndDate"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="eventDescription" label="Description">
          <Input.TextArea />
        </Form.Item>

        <Form.Item name="eventTotalParticipants" label="Total Participants">
          <Input.TextArea />
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

export default EventCreate;
