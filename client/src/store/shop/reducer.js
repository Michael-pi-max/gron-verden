import { ShopActionTypes } from "./types";

const INITIAL_STATE = {
    fetchshopsLoading: false,
    fetchshopLoading: false,
    createshopLoading: false,
    createshopSuccess: false,
    updateshopLoading: false,
    shops: null,
    shop: {
      
    },
    page: 1,
    limit: 15,
    total: 0,
    updateshopError: null,
    createshopError: null,
    fetchshopError: null,
    fetchshopsError: null,
  };


  const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case ShopActionTypes.SHOPS_FETCH_START:
        return {
          ...state,
          fetchshopsLoading: true,
          fetchshopsError: null,
        };
      case ShopActionTypes.SHOPS_FETCH_SUCCESS:
        return {
          ...state,
          fetchShopsLoading: false,
          shops: action.payload.shops,
          page: action.payload.page,
          limit: action.payload.limit,
          total: action.payload.total,
        };
      case ShopActionTypes.SHOPS_FETCH_ERROR:
        return {
          ...state,
          fetchShopsLoading: false,
          fetchShopsError: action.payload.error,
        };
      case ShopActionTypes.SHOP_FETCH_START:
        return {
          ...state,
          fetchShopLoading: true,
          fetchShopError: null,
        };
      case ShopActionTypes.SHOP_FETCH_SUCCESS:
        return {
          ...state,
          fetchShopLoading: false,
          shop: {
            ...state.shop,
            [action.payload.id]: action.payload.shop,
          },
        };
      case ShopActionTypes.SHOP_FETCH_ERROR:
        return {
          ...state,
          fetchShopLoading: false,
          fetchShopError: action.payload.error,
        };
      case ShopActionTypes.SHOP_CREATE_START:
        return {
          ...state,
          createShopLoading: true,
          createShopError: null,
        };
      case ShopActionTypes.SHOP_CREATE_SUCCESS:
        return {
          ...state,
          createShopLoading: false,
          createShopSuccess: true,
          shops: [action.payload.shop, ...state.shops],
        };
      case ShopActionTypes.SHOP_CREATE_ERROR:
        return {
          ...state,
          createShopLoading: false,
          createShopError: action.payload.error,
        };
      case ShopActionTypes.CLEAR_SHOP_CREATE_SUCCESS:
        return {
          ...state,
          createShopSuccess: false,
        };
  
      case ShopActionTypes.SHOP_UPDATE_START:
        return {
          ...state,
          updateShopLoading: true,
          updateShopError: null,
        };
      case ShopActionTypes.SHOP_UPDATE_SUCCESS:
        return {
          ...state,
          updateShopLoading: false,
          shop: {
            ...state.shop,
            [action.payload.id]: action.payload.shop,
          },
        };
      case ShopActionTypes.SHOP_UPDATE_ERROR:
        return {
          ...state,
          updateShopLoading: false,
          updateShopError: action.payload.error,
        };
      default:
        return state;
    }
  };
  
  export default reducer;