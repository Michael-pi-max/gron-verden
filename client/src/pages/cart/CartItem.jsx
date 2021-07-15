import React from 'react';

function CartItem(props) {
  return (
    <tr class="align-items-center">
      <td class="d-flex align-items-center border-top-0 border-bottom px-0 py-6">
        <div class="imgHolder">
          <img
            src="http://placehold.it/70x80"
            alt="image description"
            class="img-fluid"
          />
        </div>
        <span class="title pl-2">
          <a href="shop-detail.html">Pellentesque aliquet</a>
        </span>
      </td>
      <td class="fwEbold border-top-0 border-bottom px-0 py-6">180.00 $</td>
      <td class="border-top-0 border-bottom px-0 py-6">
        <input type="number" disabled placeholder="1" />
      </td>
      <td class="fwEbold border-top-0 border-bottom px-0 py-6">
        180.00 ${' '}
        <a href="javascript:void(0);" class="fas fa-times float-right"></a>
      </td>
    </tr>
  );
}

export default CartItem;
