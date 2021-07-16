import React from 'react';
import { Card, Avatar } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';

import './style.css';

const { Meta } = Card;

function IdentifyPlantCard({
  image,
  scientificName,
  url,
  wikiDescription,
  similarProbability,
}) {
  return (
    <>
      <Card
        style={{ width: 400 }}
        cover={<img alt="example" src={image} />}
        className="box-shadow"
      >
        <h2 className="playfair float-left mr-5">{scientificName}</h2>
        <div className="d-flex circleBase type3 px-1 py-2 font-weight-bold text-white">
          {similarProbability}%
        </div>
        <br />

        <div className="float-left text-dark text-justify">
          <br />
          {wikiDescription}
          <br />
          <a href={url} className="m-5">Learn More</a>
        </div>
      </Card>
    </>
  );
}

export default IdentifyPlantCard;
