import React from 'react';

function CartItem(props) {
  return (
    <tr class="align-items-center">
      <td class="d-flex align-items-center border-top-0 border-bottom px-0 py-6">
        <div class="imgHolder">
          <img
            src="http://localhost:8000/uploads/plant/1626422160237-img08.jpg"
            alt="image description"
            class="img-fluid"
          />
        </div>
        <span class="title pl-2">
          <a href="shop-detail.html">Fan Flower</a>
        </span>
      </td>
      <td class="fwEbold border-top-0 border-bottom px-0 py-6">2900br</td>
      <td class="border-top-0 border-bottom px-0 py-6">
        <input type="number" disabled placeholder="1" />
      </td>
      <td class="fwEbold border-top-0 border-bottom px-0 py-6">
        2900br{' '}
        <a href="javascript:void(0);" class="fas fa-times float-right"></a>
      </td>
    </tr>
  );
}

export default CartItem;
