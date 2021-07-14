// For a specific shop - shop-admin

import React from 'react';
import ShopPlantCategory from '../../categories/shopPlantCategory';

import { useSelector } from 'react-redux';
import DrawerForm from './DrawerForm';

function PlantList({ plants }) {
    // const { shops, page, limit, total, fetchShopsLoading } = useSelector(
    //     (state) => state.shop
    // );
    console.log(plants)

    return (
        <div>
            {(plants.length === 0) ? <DrawerForm /> : <ShopPlantCategory plants={plants}/>}
        </div>
    );
}

export default PlantList;