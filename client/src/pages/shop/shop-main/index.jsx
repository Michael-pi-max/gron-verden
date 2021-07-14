import React from 'react';
import ProductContent from './ProductContent';
import ProductFilter from './ProductFilter';
import { Spin } from 'antd';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlantsAsync } from '../../../store/plant/action';

function ShopMain(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const { plants, page, limit, total, fetchPlantsLoading } = useSelector(
    (state) => state.plant
  );
  const { shops, fetchShopsLoading } = useSelector((state) => state.shop);

  const { user: userObject, fetchUserLoading } = useSelector(
    (state) => state.user
  );

  const myShop = shops.filter((s) => {
    return s.shopOwner[0] === userObject._id;
  });
  useEffect(() => {
    console.log('At App level');
    dispatch(fetchPlantsAsync(page, limit));
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
          <Spin tip="Loadin books..." />
        </div>
      </>
    );
  }

  return (
    <>
      <div class="twoColumns container pt-10">
        <div class="row">
          <ProductFilter />
          <ProductContent plants={plants} />
        </div>
      </div>
    </>
  );
}

export default ShopMain;
