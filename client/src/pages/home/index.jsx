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

  const {
    plants,
    page: pagePlant,
    limit: limitPlant,
    total: totalPlant,
    fetchPlantsLoading,
  } = useSelector((state) => state.plant);

  console.log(userObject);

  useEffect(() => {
    console.log('At App level');
    dispatch(fetchShopsAsync(page, limit));
    dispatch(fetchPlantsAsync(pagePlant, limitPlant));
    dispatch(fetchUserAsync());
  }, []);

  if (fetchShopsLoading || !shops || fetchPlantsLoading || !plants) {
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

  console.log(plants);
  // object
  const plantObject = {
    indoorPlant: 0,
    housePlant: 0,
    cactusPlant: 0,
    tableTreePlant: 0,
    officePlant: 0,
  };

  const plantTypeName = [
    'indoorPlant',
    'housePlant',
    'cactusPlant',
    'tableTreePlant',
    'officePlant',
  ];
  plants.forEach((p) => {
    plantTypeName.forEach((pName) => {
      if (p.plantType === pName) {
        plantObject[pName] += 1;
      }
    });
  });

  // console.log(plantObject);
  // console.log(shops);
  // const ratedShops = [];
  // shops.forEach((s, index) => {
  //   if(s[index].shopProducts.length < )
  //   // console.log(index);
  // });

  return (
    <div id="pageWrapper">
      <Header />
      <Intro />
      <ChooseUs />
      <PlantCategories plantTypes={plantObject} />
      <Banner />
      <ShopCategory shopsProp={shops} user={userObject} />
      <Footer />
    </div>
  );
};

export default Home;
