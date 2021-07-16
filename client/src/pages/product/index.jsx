import React, { useEffect } from 'react';
import Footer from '../../components/footer';
import ShopBanner from '../shop/shop-banner';
import ShopHeader from '../shop/shop-header';
import ProductMain from './product-main';
import useScript from '../../customHook/importScript';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { useDispatch } from 'react-redux';

import { Spin } from 'antd';

import { fetchPlantsAsync } from '../../store/plant/action';

function Product(props) {
  useScript('/js/jquery-3.4.1.min.js');
  useScript('/js/popper.min.js');
  useScript('/js/bootstrap.min.js');
  useScript('/js/jqueryCustome.js');
  const dispatch = useDispatch();
  const params = useParams();

  const { plants, page, limit, total, fetchPlantsLoading } = useSelector(
    (state) => state.plant
  );

  useEffect(() => {
    dispatch(fetchPlantsAsync());
  }, []);

  if (fetchPlantsLoading || !plants) {
    return (
      <>
        <div
          style={{
            width: '100%',
            height: '200px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Spin tip="Loading data..." />
        </div>
      </>
    );
  }

  const plant = plants.filter((p) => {
    return p._id === params.id;
  });

  console.log(plant);

  return (
    <div id="pageWrapper">
      <ShopHeader />
      <ShopBanner bannerTitle="Plant Details" />
      <ProductMain plant={plant[0]} plants={plants} />
      <Footer />
    </div>
  );
}

export default Product;
