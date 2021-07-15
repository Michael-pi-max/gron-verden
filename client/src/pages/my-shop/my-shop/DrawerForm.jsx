import { useState, useEffect } from 'react';
import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  DatePicker,
  InputNumber,
} from 'antd';
import { Upload, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { useDispatch, useSelector } from 'react-redux';

import {
  createPlantAsync,
  clearCreatePlantSuccess,
} from '../../../store/plant/action';
const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const DrawerForm = ({ createPlant }) => {
  const dispatch = useDispatch();
  const { createPlantLoading, createPlantError, createPlantSuccess } =
    useSelector((state) => state.plant);
  const [visible, setVisible] = useState(false);

  const [shopPlantForm] = Form.useForm();

  const onReset = () => {
    shopPlantForm.resetFields();
  };

  useEffect(() => {
    if (createPlantSuccess) {
      message.success('Plant Created Succesfully');
      dispatch(clearCreatePlantSuccess());
    }
  }, [createPlantSuccess]);

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

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onFinish = (values) => {
    const { plantName, plantType, plantDescription, plantLength, plantPrice } =
      values;
    if (!form.file) {
      message.error('plant picture is required');
    } else if (!isJpgOrPng(form.file)) {
      message.error('plant picture can only be JPG or PNG file');
    } else {
      const formData = new FormData();
      formData.append('plantName', plantName);
      formData.append('plantType', plantType);
      formData.append('plantDescription', plantDescription);
      formData.append('plantLength', plantLength);
      formData.append('plantPrice', plantPrice);
      formData.append('plantImage', form.file);
      dispatch(createPlantAsync(formData));
      setVisible(false);
    }
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        <PlusOutlined /> New plant
      </Button>
      <Drawer
        title="Create a new plant"
        width={720}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
      >
        <Form
          {...layout}
          form={shopPlantForm}
          name="control-hooks"
          onFinish={onFinish}
        >
          <Form.Item name="plantImage" label="Profile Picture">
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
            name="plantName"
            label="Plant Name"
            rules={[{ required: true }]}
          >
            <Input placeholder="Plant name" />
          </Form.Item>
          <Form.Item name="plantType" label="Type" rules={[{ required: true }]}>
            <Select placeholder="Plant Type" allowClear>
              <Option value="tableTreePlant">Table Tree Plant</Option>
              <Option value="indoorPlant">Indoor Plant</Option>
              <Option value="officePlant">Office Plant</Option>
              <Option value="housePlant">House Plant</Option>
              <Option value="cactusPlant">Cactus Plant</Option>
            </Select>
          </Form.Item>
          <Form.Item name="plantDescription" label="Description">
            <Input.TextArea placeholder="Plant Description..." />
          </Form.Item>
          <Form.Item
            name="plantLength"
            label="Plant Length"
            rules={[{ required: true }]}
          >
            <InputNumber
              min={1}
              max={300}
              defaultValue={25}
              className="w-100"
              placeholder="Plant length in cm"
            />
          </Form.Item>
          <Form.Item
            name="plantPrice"
            label="Plant Price"
            rules={[{ required: true }]}
          >
            <InputNumber
              min={20}
              max={50000}
              defaultValue={200}
              placeholder="Plant price"
              className="w-100"
            />
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
      </Drawer>
    </>
  );
};

export default DrawerForm;
