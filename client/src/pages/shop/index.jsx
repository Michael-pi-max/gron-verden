import React, { useEffect } from 'react';
import Footer from '../../components/footer';
import ShopHeader from './shop-header';
import ShopBanner from './shop-banner';
import ShopMain from './shop-main';
import ShopStat from '../../components/stat';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Spin } from 'antd';

import { fetchShopAsync } from '../../store/shop/action';

const Shop = (props) => {
  const dispatch = useDispatch();
  const params = useParams();
  const { user } = useSelector((state) => state.user);

  const { shop: shopObject, fetchShopLoading } = useSelector(
    (state) => state.shop
  );
  const shop = shopObject[params.id];

  useEffect(() => {
    dispatch(fetchShopAsync(params.id));
  }, []);

  if (fetchShopLoading || !shop) {
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

  return (
    <div id="pageWrapper">
      <ShopHeader />
      <ShopBanner bannerTitle="Shop" />
      <ShopStat totalPlants={shop.shopProducts.plants.length} />
      <ShopMain />
      <Footer />
    </div>
  );
};

export default Shop;
