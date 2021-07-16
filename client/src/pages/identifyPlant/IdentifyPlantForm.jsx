import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Form,
  Input,
  Button,
  Select,
  Upload,
  Modal,
  Row,
  Col,
  Space,
  message,
  DatePicker,
} from 'antd';
import { UserOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { createIdentifyPlantAsync } from '../../store/shop/action';
import { plantVariableGlobal } from '../../store/shop/action';
import IdentifyPlantCard from './IdentifyPlantCard';

const layout = {
  labelCol: { span: 9 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function IdentifyPlantForm(props) {
  const dispatch = useDispatch();

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

  const [identifyPlantFormInstance] = Form.useForm();
  const onFinish = async (values) => {
    if (!form.file) {
      message.error('Shop logo is required');
    } else if (!isJpgOrPng(form.file)) {
      message.error('Shop logo can only be JPG or PNG file');
    } else {
      // const formData = new FormData();
      // formData.append("identfyPlant", form.file);
      // formData.append("identfyPlant", form.file);
      dispatch(createIdentifyPlantAsync(form.file));
      // setTimeout(3000, () => {
      //   setPlantIdentify(plantVariableGlobal);
      // });
    }
  };
  const onReset = () => {
    identifyPlantFormInstance.resetFields();
  };

  return (
    <>
      <div className="container card my-1 py-2">
        <Form
          {...layout}
          form={identifyPlantFormInstance}
          name="control-hooks"
          onFinish={onFinish}
        >
          {' '}
          <h1 className="text-center playfair">Upload an image</h1>
          <p className="text-center playfair font-weight-bold">
            Here is our plant detection part... you can upload and find a better
            knowledge and data about the plant. <br /> Explore and find out
            more.
          </p>
          <Form.Item name="identifyPlant" label="Identify Plant">
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

        <div className="container mt-2">
          <Row>
            {plantVariableGlobal &&
              plantVariableGlobal.suggestions.map((p) => {
                return (
                  <>
                    <Col className="mb-2" span={8}>
                      <IdentifyPlantCard
                        image={p.similar_images[0].url}
                        scientificName={p.plant_name}
                        url={p.plant_details.url}
                        wikiDescription={p.plant_details.wiki_description.value}
                        similarProbability={
                          p.similar_images[0].similarity.toFixed(2) * 100
                        }
                      />
                    </Col>
                  </>
                );
              })}
          </Row>
        </div>
      </div>
    </>
  );
}

export default IdentifyPlantForm;
