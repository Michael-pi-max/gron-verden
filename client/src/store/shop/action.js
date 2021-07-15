import { ShopActionTypes } from './types';
import axios from 'axios';

export let plantVariableGlobal;

export const fetchShopsStart = () => ({
  type: ShopActionTypes.SHOPS_FETCH_START,
});

export const fetchShopsSuccess = (shops, page, limit, total) => ({
  type: ShopActionTypes.SHOPS_FETCH_SUCCESS,
  payload: {
    shops,
    page,
    limit,
    total,
  },
});

export const fetchShopsError = (error) => ({
  type: ShopActionTypes.SHOPS_FETCH_ERROR,
  payload: {
    error,
  },
});

/**
 * Fetch shop actions
 * @returns Action
 */

export const fetchShopStart = () => ({
  type: ShopActionTypes.SHOP_FETCH_START,
});

export const fetchShopSuccess = (id, shop) => ({
  type: ShopActionTypes.SHOP_FETCH_SUCCESS,
  payload: {
    id,
    shop,
  },
});

export const fetchShopError = (error) => ({
  type: ShopActionTypes.SHOP_FETCH_ERROR,
  payload: {
    error,
  },
});

/**
 * Create shop actions
 * @returns Action
 */

export const createShopStart = () => ({
  type: ShopActionTypes.SHOP_CREATE_START,
});

export const createShopSuccess = (shop) => ({
  type: ShopActionTypes.SHOP_CREATE_SUCCESS,
  payload: {
    shop,
  },
});

export const createShopError = (error) => ({
  type: ShopActionTypes.SHOP_CREATE_ERROR,
  payload: {
    error,
  },
});

export const createCartStart = () => ({
  type: ShopActionTypes.CART_POST_START,
});

export const createCartSuccess = (cart) => ({
  type: ShopActionTypes.CART_POST_SUCCESS,
  payload: {
    cart,
  },
});

export const createCartError = (error) => ({
  type: ShopActionTypes.CART_POST_ERROR,
  payload: {
    error,
  },
});

export const clearCreateShopSuccess = () => ({
  type: ShopActionTypes.CLEAR_SHOP_CREATE_SUCCESS,
});

/**
 * Update shop actions
 * @returns Action
 */

export const updateShopStart = () => ({
  type: ShopActionTypes.SHOP_UPDATE_START,
});

export const updateShopSuccess = (id, shop) => ({
  type: ShopActionTypes.SHOP_UPDATE_SUCCESS,
  payload: {
    id,
    shop,
  },
});

export const updateShopError = (error) => ({
  type: ShopActionTypes.SHOP_UPDATE_ERROR,
  payload: {
    error,
  },
});

// Identify Plant
export const createIdentifyPlantStart = () => ({
  type: ShopActionTypes.IDENTIFYPLANT_CREATE_START,
});

export const createIdentifyPlantSuccess = (shop) => ({
  type: ShopActionTypes.IDENTIFYPLANT_CREATE_SUCCESS,
  payload: {
    shop,
  },
});

export const createIdentifyPlantError = (error) => ({
  type: ShopActionTypes.IDENTIFYPLANT_CREATE_ERROR,
  payload: {
    error,
  },
});

export const clearCreateIdentifyPlantSuccess = () => ({
  type: ShopActionTypes.CLEAR_IDENTIFYPLANT_CREATE_SUCCESS,
});

/**
 * Async Action Types
 */

export const fetchShopsAsync = (page, limit) => {
  return async (dispatch, getState) => {
    const {
      user: { token },
    } = getState();
    try {
      dispatch(fetchShopsStart());
      const response = await axios.get(
        `http://localhost:8000/api/v1/shops/all`,
        {
          params: {
            page,
            limit,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(
        fetchShopsSuccess(
          response.data.shops,
          response.data.page,
          response.data.limit,
          response.data.total
        )
      );
    } catch (err) {
      dispatch(fetchShopsError(err));
    }
  };
};

export const fetchShopAsync = (id) => {
  return async (dispatch, getState) => {
    const {
      user: { token },
    } = getState();
    try {
      dispatch(fetchShopStart());
      const response = await axios.get(
        `http://localhost:8000/api/v1/shops/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(fetchShopSuccess(id, response.data.shop));
    } catch (err) {
      dispatch(fetchShopError(err));
    }
  };
};

// USER AND TOKEN COULD BE FIND SIMPLY
export const createShopAsync = (formData) => {
  return async (dispatch, getState) => {
    const {
      user: { user, token },
    } = getState();

    try {
      dispatch(createShopStart());
      console.log(token);
      const response = await axios.post(
        `http://localhost:8000/api/v1/shops/new`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log(
        `aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa ${response.data.shop}`
      );
      dispatch(createShopSuccess(response.data.shop));
    } catch (err) {
      dispatch(createShopError(err));
    }
  };
};

// USER AND TOKEN COULD BE FIND SIMPLY
export const createCartAsync = (formData) => {
  return async (dispatch, getState) => {
    const {
      user: { user, token },
    } = getState();

    try {
      dispatch(createCartStart());
      console.log(token);
      const response = await axios.post(
        `http://localhost:8000/api/v1/shops/new`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log(
        `aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa ${response.data.shop}`
      );
      dispatch(createCartSuccess(response.data.shop));
    } catch (err) {
      dispatch(createCartError(err));
    }
  };
};

export const updateShopAsync = (id, form) => {
  return async (dispatch, getState) => {
    const {
      user: { token },
    } = getState();
    try {
      dispatch(updateShopStart());
      const response = await axios.patch(
        `http://localhost:8000/shops/${id}`,
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(updateShopSuccess(id, response.data.shop));
    } catch (err) {
      dispatch(updateShopError(err));
    }
  };
};

export const createIdentifyPlantAsync = (formFile) => {
  return async (dispatch, getState) => {
    const {
      user: { user, token },
    } = getState();

    try {
      dispatch(createIdentifyPlantStart());

      const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
        });
      };
      const identifyPlants = [];
      const identifyPlant = await getBase64(formFile);
      identifyPlants.push(identifyPlant.slice(23));
      // console.log(identifyPlants)

      const data = {
        api_key: 'OPqsAGXEmtJFsuYWjUn9GiTZCCYddcza0CzmljN5nOMIYbt3WK',
        images: identifyPlants,
        modifiers: ['crops_fast', 'similar_images'],
        plant_language: 'en',
        plant_details: [
          'common_names',
          'url',
          'name_authority',
          'wiki_description',
          'taxonomy',
          'synonyms',
        ],
      };

      axios
        .post('https://api.plant.id/v2/identify', data)
        .then((res) => {
          // dispatch(createIdentifyPlantSuccess(res.data.shop));
          // console.log('Success:', res.data);
          plantVariableGlobal = res.data;
          console.log(plantVariableGlobal);
        })
        .catch((error) => {
          console.error('Error: ', error);
        });
    } catch (err) {
      dispatch(createIdentifyPlantError(err));
    }
  };
};
