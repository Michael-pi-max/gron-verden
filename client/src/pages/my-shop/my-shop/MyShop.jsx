import React from 'react';
import DrawerForm from './DrawerForm';
import PlantList from './PlantList';

import { useSelector } from 'react-redux';

const MyShop = ({ shops }) => {
  const { user: userObject, fetchUserLoading } = useSelector(
    (state) => state.user
  );

  const myShop = shops.filter((s) => {
    return s.shopOwner[0] === userObject._id;
  });
  console.log(myShop);
  //  console.log(myShop[0].shopProducts.plants)

  return (
    <>
      <div class="row">
        <header class="col-12 mainHeader mb-10 text-center">
          <h1 class="headingIV playfair fwEblod mt-7">{myShop[0].shopName}</h1>
          <p>{myShop[0].shopDescription}</p>
        </header>
      </div>
      <PlantList plants={myShop[0].shopProducts.plants} />
    </>
  );
};

export default MyShop;
