import { PlantActionTypes } from './types';

const INITIAL_STATE = {
  fetchplantsLoading: false,
  fetchplantLoading: false,
  createplantLoading: false,
  createplantSuccess: false,
  updateplantLoading: false,
  plants: null,
  plant: {},
  page: 1,
  limit: 15,
  total: 0,
  updateplantError: null,
  createplantError: null,
  fetchplantError: null,
  fetchplantsError: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PlantActionTypes.PLANTS_FETCH_START:
      return {
        ...state,
        fetchplantsLoading: true,
        fetchplantsError: null,
      };
    case PlantActionTypes.PLANTS_FETCH_SUCCESS:
      return {
        ...state,
        fetchPlantsLoading: false,
        plants: action.payload.plants,
        page: action.payload.page,
        limit: action.payload.limit,
        total: action.payload.total,
      };
    case PlantActionTypes.PLANTS_FETCH_ERROR:
      return {
        ...state,
        fetchPlantsLoading: false,
        fetchPlantsError: action.payload.error,
      };
    case PlantActionTypes.PLANT_FETCH_START:
      return {
        ...state,
        fetchPlantLoading: true,
        fetchPlantError: null,
      };
    case PlantActionTypes.PLANT_FETCH_SUCCESS:
      return {
        ...state,
        fetchPlantLoading: false,
        plant: {
          ...state.plant,
          [action.payload.id]: action.payload.plant,
        },
      };
    case PlantActionTypes.PLANT_FETCH_ERROR:
      return {
        ...state,
        fetchPlantLoading: false,
        fetchPlantError: action.payload.error,
      };
    case PlantActionTypes.PLANT_CREATE_START:
      return {
        ...state,
        createPlantLoading: true,
        createPlantError: null,
      };
    case PlantActionTypes.PLANT_CREATE_SUCCESS:
      return {
        ...state,
        createPlantLoading: false,
        createPlantSuccess: true,
        plants: [action.payload.plant, ...state.plants],
      };
    case PlantActionTypes.PLANT_CREATE_ERROR:
      return {
        ...state,
        createPlantLoading: false,
        createPlantError: action.payload.error,
      };
    case PlantActionTypes.CLEAR_PLANT_CREATE_SUCCESS:
      return {
        ...state,
        createPlantSuccess: false,
      };

    case PlantActionTypes.PLANT_UPDATE_START:
      return {
        ...state,
        updatePlantLoading: true,
        updatePlantError: null,
      };
    case PlantActionTypes.PLANT_UPDATE_SUCCESS:
      return {
        ...state,
        updatePlantLoading: false,
        plant: {
          ...state.plant,
          [action.payload.id]: action.payload.plant,
        },
      };
    case PlantActionTypes.PLANT_UPDATE_ERROR:
      return {
        ...state,
        updatePlantLoading: false,
        updatePlantError: action.payload.error,
      };
    default:
      return state;
  }
};

export default reducer;
