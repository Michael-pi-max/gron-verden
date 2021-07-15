import React from 'react';
import ShopHeader from '../shop/shop-header';
import ShopBanner from '../shop/shop-banner';
import Footer from '../../components/footer';
import ShopCategory from '../categories/ShopCategory';

// React-Redux
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchShopsAsync } from '../../store/shop/action';
import { fetchUserAsync } from '../../store/user/action';
import { fetchPlantsAsync } from '../../store/plant/action';

function ShopList(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const { shops, page, limit, total, fetchShopsLoading } = useSelector(
    (state) => state.shop
  );

  const {
    plants,
    page: pagePlant,
    limit: limitPlant,
    total: totalPlant,
    fetchPlantsLoading,
  } = useSelector((state) => state.plant);

  useEffect(() => {
    console.log('At App level');
    dispatch(fetchShopsAsync(page, limit));
    dispatch(fetchPlantsAsync(pagePlant, limitPlant));
    dispatch(fetchUserAsync());
  }, []);

  console.log(shops);

  return (
    <div>
      <ShopHeader />
      <ShopBanner bannerTitle="All Shops" />
      <div style={{ marginTop: '30px' }}>
        <ShopCategory shopsProp={shops} />
      </div>
      <Footer />
    </div>
  );
}

export default ShopList;
