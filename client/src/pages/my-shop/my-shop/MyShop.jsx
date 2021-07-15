import React from 'react';
import DrawerForm from './DrawerForm';
import PlantList from './PlantList';
import { Spin } from 'antd';

// React-Redux
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShopsAsync } from '../../../store/shop/action';
import { fetchUserAsync } from '../../../store/user/action';
import { fetchPlantsAsync } from '../../../store/plant/action';

const MyShop = ({ shopsProp }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { shops, page, limit, total, fetchShopsLoading } = useSelector(
    (state) => state.shop
  );

  const { user: userObject, fetchUserLoading } = useSelector(
    (state) => state.user
  );
  useEffect(() => {
    console.log('At App level');
    dispatch(fetchShopsAsync(page, limit));
    dispatch(fetchPlantsAsync(page, limit));
    dispatch(fetchUserAsync());
  }, []);

  if (fetchShopsLoading || !shops) {
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

  const myShop = shops.filter((s) => {
    return s.shopOwner[0] === userObject._id;
  });
  // console.log(myShop);
  console.log(myShop[0]);

  return (
    <>
      <div class="row">
        <header class="col-12 mainHeader mb-10 text-center">
          <h1 class="headingIV playfair fwEblod mt-7">{myShop[0].shopName}</h1>
          <p>{myShop[0].shopDescription}</p>
        </header>
      </div>
      <PlantList plantsId={myShop[0].shopProducts.plants} />
    </>
  );
};

export default MyShop;
