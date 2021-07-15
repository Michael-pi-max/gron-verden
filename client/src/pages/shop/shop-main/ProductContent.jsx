import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

const ProductContent = ({ plants }) => {
  const params = useParams();

  const { shop: shopObject, fetchShopLoading } = useSelector(
    (state) => state.shop
  );

  const shop = shopObject[params.id];
  console.log(plants);
  let shopPlants = [];
  shop.shopProducts.plants.forEach((p) => {
    plants.forEach((q) => {
      if (p === q._id) {
        shopPlants.push(q);
      }
    });
  });

  return (
    <div class="col-12 col-lg-9 order-lg-3">
      <article id="content">
        <header class="show-head d-flex flex-wrap justify-content-between mb-7">
          <div class="sortGroup">
            <div class="d-flex flex-nowrap align-items-center">
              <h1 class="mr-2">List of Plants</h1>
            </div>
          </div>
        </header>
        <div class="row">
          {shopPlants &&
            shopPlants.map((plant) => {
              return (
                <div class="col-12 col-sm-6 col-lg-4 featureCol mb-7">
                  <div class="border">
                    <div class="imgHolder position-relative w-100 overflow-hidden">
                      <img
                        src={`http://localhost:8000/${plant.plantImage}`}
                        alt="image description"
                        class="img-fluid w-100"
                      />
                      <ul class="list-unstyled postHoverLinskList d-flex justify-content-center m-0">
                        <li class="mr-2 overflow-hidden">
                          <a
                            href="javascript:void(0);"
                            class="icon-heart d-block"
                          ></a>
                        </li>
                        <li class="mr-2 overflow-hidden">
                          <a
                            href="javascript:void(0);"
                            class="icon-cart d-block"
                          ></a>
                        </li>
                        <li class="mr-2 overflow-hidden">
                          <Link
                            to={`/product/${plant._id}`}
                            class="icon-eye d-block"
                          ></Link>
                        </li>
                        <li class="overflow-hidden">
                          <a
                            href="javascript:void(0);"
                            class="icon-arrow d-block"
                          ></a>
                        </li>
                      </ul>
                    </div>
                    <div class="text-center py-5 px-4">
                      <span class="title fwEbold d-block mb-1">
                        <Link to={`/product/${plant._id}`}>
                          {plant.plantName}
                        </Link>
                      </span>
                      <span class="price d-block fwEbold">
                        Plant price: {plant.plantPrice}br
                      </span>
                      <span class="hotOffer fwEbold text-white position-absolute d-block">
                        {plant.plantLength}cm
                      </span>
                      <span class="hotOffer green fwEbold text-uppercase text-white position-absolute d-block ml-8">
                        Size
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          <div class="col-12 pt-3 mb-lg-0 mb-md-6 mb-3">
            <ul class="list-unstyled pagination d-flex justify-content-center align-items-end">
              <li>
                <a href="javascript:void(0);">
                  <i class="fas fa-chevron-left"></i>
                </a>
              </li>
              <li class="active">
                <a href="javascript:void(0);">1</a>
              </li>
              <li>
                <a href="javascript:void(0);">2</a>
              </li>
              <li>...</li>
              <li>
                <a href="javascript:void(0);">
                  <i class="fas fa-chevron-right"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProductContent;
