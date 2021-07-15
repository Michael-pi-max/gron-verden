import { PlantActionTypes } from "./types";
import axios from "axios";

export const fetchPlantsStart = () => ({
  type: PlantActionTypes.PLANTS_FETCH_START,
});

export const fetchPlantsSuccess = (plants, page, limit, total) => ({
  type: PlantActionTypes.PLANTS_FETCH_SUCCESS,
  payload: {
    plants,
    page,
    limit,
    total,
  },
});

export const fetchPlantsError = (error) => ({
  type: PlantActionTypes.PLANTS_FETCH_ERROR,
  payload: {
    error,
  },
});

/**
 * Fetch plant actions
 * @returns Action
 */

export const fetchPlantStart = () => ({
  type: PlantActionTypes.PLANT_FETCH_START,
});

export const fetchPlantSuccess = (id, plant) => ({
  type: PlantActionTypes.PLANT_FETCH_SUCCESS,
  payload: {
    id,
    plant,
  },
});

export const fetchPlantError = (error) => ({
  type: PlantActionTypes.PLANT_FETCH_ERROR,
  payload: {
    error,
  },
});

/**
 * Create plant actions
 * @returns Action
 */

export const createPlantStart = () => ({
  type: PlantActionTypes.PLANT_CREATE_START,
});

export const createPlantSuccess = (plant) => ({
  type: PlantActionTypes.PLANT_CREATE_SUCCESS,
  payload: {
    plant,
  },
});

export const createPlantError = (error) => ({
  type: PlantActionTypes.PLANT_CREATE_ERROR,
  payload: {
    error,
  },
});

export const clearCreatePlantSuccess = () => ({
  type: PlantActionTypes.CLEAR_PLANT_CREATE_SUCCESS,
});

/**
 * Update plant actions
 * @returns Action
 */

export const updatePlantStart = () => ({
  type: PlantActionTypes.PLANT_UPDATE_START,
});

export const updatePlantSuccess = (id, plant) => ({
  type: PlantActionTypes.PLANT_UPDATE_SUCCESS,
  payload: {
    id,
    plant,
  },
});

export const updatePlantError = (error) => ({
  type: PlantActionTypes.PLANT_UPDATE_ERROR,
  payload: {
    error,
  },
});

/**
 * Async Action Types
 */

export const fetchPlantsAsync = (page, limit) => {
  return async (dispatch, getState) => {
    const {
      user: { token },
    } = getState();
    try {
      dispatch(fetchPlantsStart());
      const response = await axios.get(
        `http://localhost:8000/api/v1/plants/all`,
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
        fetchPlantsSuccess(
          response.data.plants,
          response.data.page,
          response.data.limit,
          response.data.total
        )
      );
    } catch (err) {
      dispatch(fetchPlantsError(err));
    }
  };
};

export const fetchPlantAsync = (id) => {
  return async (dispatch, getState) => {
    const {
      user: { token },
    } = getState();
    try {
      dispatch(fetchPlantStart());
      const response = await axios.get(
        `http://localhost:8000/api/v1/plants/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      dispatch(fetchPlantSuccess(id, response.data.plant));
    } catch (err) {
      dispatch(fetchPlantError(err));
    }
  };
};

// USER AND TOKEN COULD BE FIND SIMPLY
export const createPlantAsync = (formData) => {

  return async (dispatch, getState) => {
    const {
      user: { user,token },
    } = getState();
  
    try {
      
      dispatch(createPlantStart());
      const response = await axios.post(
        `http://localhost:8000/api/v1/plants/new`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          }
        }
      );
      dispatch(createPlantSuccess(response.data.plant));
    } catch (err) {
      dispatch(createPlantError(err));
    }
  };
};

export const updatePlantAsync = (id, form) => {
  return async (dispatch, getState) => {
    const {
      user: { token },
    } = getState();
    try {
      dispatch(updatePlantStart());
      const response = await axios.patch(
        `http://localhost:8000/plants/${id}`,
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(updatePlantSuccess(id, response.data.plant));
    } catch (err) {
      dispatch(updatePlantError(err));
    }
  };
};