import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Intro from '../../components/carousel';
import ChooseUs from '../../components/chooseUs';
import Banner from '../../components/banner';
import ShopCategory from '../categories/ShopCategory';
import PlantCategories from '../categories/PlantCategory';
import { Spin } from 'antd';
// TODO

// React-Redux
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShopsAsync } from '../../store/shop/action';
import { fetchUserAsync } from '../../store/user/action';
import { fetchPlantsAsync } from '../../store/plant/action';

const Home = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { shops, page, limit, total, fetchShopsLoading } = useSelector(
    (state) => state.shop
  );

  const { user: userObject, fetchUserLoading } = useSelector(
    (state) => state.user
  );

  console.log(userObject);

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

  return (
    <div id="pageWrapper">
      <Header />
      <Intro />
      <ChooseUs />
      <PlantCategories />
      <Banner />
      <ShopCategory shopsProp={shops} user={userObject} />
      <Footer />
    </div>
  );
};

export default Home;
