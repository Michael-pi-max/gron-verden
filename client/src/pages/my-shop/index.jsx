import React from 'react';
import CreateShop from './create-shop';
import MyShop from './my-shop/MyShop';
import ShopHeader from '../shop/shop-header';
import ShopBanner from '../shop/shop-banner';
import Footer from '../../components/footer';

import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Spin } from 'antd';

const ShopAdmin = (props) => {
  const dispatch = useDispatch();

  const { shops, page, limit, total, fetchShopsLoading } = useSelector(
    (state) => state.shop
  );

  const { user: userObject, fetchUserLoading } = useSelector(
    (state) => state.user
  );

//   console.log(shops);
  console.log(userObject.userRole);

  return (
    <div>
      <ShopHeader />
      <ShopBanner />
      {
        userObject.userRole === 'user' ? (
          <CreateShop />
        ) : (
          <MyShop shops={shops} />
        )
        // (userObject.userRole !== "user") ? <CreateShop/> : <MyShop />
      }

      <Footer />
    </div>
  );
};

export default ShopAdmin;
