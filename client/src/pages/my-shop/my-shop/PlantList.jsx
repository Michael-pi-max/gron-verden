// For a specific shop - shop-admin

import React from 'react';
import ShopPlantCategory from '../../categories/shopPlantCategory';

import DrawerForm from './DrawerForm';

import { Spin } from 'antd';

// React-Redux
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchShopsAsync } from '../../../store/shop/action';
import { fetchUserAsync } from '../../../store/user/action';
import { fetchPlantsAsync } from '../../../store/plant/action';

function PlantList({ plantsId }) {
  const dispatch = useDispatch();
  const history = useHistory();

  //   const { shops, page, limit, total, fetchShopsLoading } = useSelector(
  //     (state) => state.shop
  //   );

  const { user: userObject, fetchUserLoading } = useSelector(
    (state) => state.user
  );
  const { plants, page, limit, total, fetchPlantsLoading } = useSelector(
    (state) => state.plant
  );
  useEffect(() => {
    console.log('At App level');
    // dispatch(fetchShopsAsync(page, limit));
    dispatch(fetchPlantsAsync(page, limit));
    dispatch(fetchUserAsync());
  }, []);

  if (fetchPlantsLoading || !plants) {
    return (
      <>
        <div
          style={{
            width: '100%',
            height: '100vh',
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

  console.log(plants); // id
  console.log(plantsId);
  const plantData = [];
  plants.forEach((p) => {
    plantsId.forEach((pId) => {
      if (p._id === pId) {
        plantData.push(p);
      }
    });
  });

  console.log(plantData);

  return (
    <div>
      {plantsId.length === 0 ? (
        <DrawerForm />
      ) : (
        <ShopPlantCategory plants={plantData} />
      )}
    </div>
  );
}

export default PlantList;
