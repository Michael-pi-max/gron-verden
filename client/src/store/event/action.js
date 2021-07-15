import { EventActionTypes } from "./types";
import axios from "axios";

export const fetchEventsStart = () => ({
  type: EventActionTypes.EVENTS_FETCH_START,
});

export const fetchEventsSuccess = (events, page, limit, total) => ({
  type: EventActionTypes.EVENTS_FETCH_SUCCESS,
  payload: {
    events,
    page,
    limit,
    total,
  },
});

export const fetchEventsError = (error) => ({
  type: EventActionTypes.EVENTS_FETCH_ERROR,
  payload: {
    error,
  },
});

/**
 * Fetch event actions
 * @returns Action
 */

export const fetchEventStart = () => ({
  type: EventActionTypes.EVENT_FETCH_START,
});

export const fetchEventSuccess = (id, event) => ({
  type: EventActionTypes.EVENT_FETCH_SUCCESS,
  payload: {
    id,
    event,
  },
});

export const fetchEventError = (error) => ({
  type: EventActionTypes.EVENT_FETCH_ERROR,
  payload: {
    error,
  },
});

/**
 * Create event actions
 * @returns Action
 */

export const createEventStart = () => ({
  type: EventActionTypes.EVENT_CREATE_START,
});

export const createEventSuccess = (event) => ({
  type: EventActionTypes.EVENT_CREATE_SUCCESS,
  payload: {
    event,
  },
});

export const createEventError = (error) => ({
  type: EventActionTypes.EVENT_CREATE_ERROR,
  payload: {
    error,
  },
});

export const clearCreateEventSuccess = () => ({
  type: EventActionTypes.CLEAR_EVENT_CREATE_SUCCESS,
});

// Apply to an event
export const createEventApplyStart = () => ({
  type: EventActionTypes.EVENTAPPLY_CREATE_START,
});

export const createEventApplySuccess = (event) => ({
  type: EventActionTypes.EVENTAPPLY_CREATE_SUCCESS,
  payload: {
    event,
  },
});

export const createEventApplyError = (error) => ({
  type: EventActionTypes.EVENTAPPLY_CREATE_ERROR,
  payload: {
    error,
  },
});

export const clearCreateEventApplySuccess = () => ({
  type: EventActionTypes.CLEAR_EVENTAPPLY_CREATE_SUCCESS,
});


/**
 * Update event actions
 * @returns Action
 */

export const updateEventStart = () => ({
  type: EventActionTypes.EVENT_UPDATE_START,
});

export const updateEventSuccess = (id, event) => ({
  type: EventActionTypes.EVENT_UPDATE_SUCCESS,
  payload: {
    id,
    event,
  },
});

export const updateEventError = (error) => ({
  type: EventActionTypes.EVENT_UPDATE_ERROR,
  payload: {
    error,
  },
});

/**
 * Async Action Types
 */

export const fetchEventsAsync = (page, limit) => {
  return async (dispatch, getState) => {
    const {
      user: { token },
    } = getState();
    try {
      dispatch(fetchEventsStart());
      const response = await axios.get(
        `http://localhost:8000/api/v1/events/all`,
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
        fetchEventsSuccess(
          response.data.events,
          response.data.page,
          response.data.limit,
          response.data.total
        )
      );
    } catch (err) {
      dispatch(fetchEventsError(err));
    }
  };
};

export const fetchEventAsync = (id) => {
  return async (dispatch, getState) => {
    const {
      user: { token },
    } = getState();
    try {
      dispatch(fetchEventStart());
      const response = await axios.get(
        `http://localhost:8000/api/v1/events/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      dispatch(fetchEventSuccess(id, response.data.event));
    } catch (err) {
      dispatch(fetchEventError(err));
    }
  };
};

// USER AND TOKEN COULD BE FIND SIMPLY
export const createEventAsync = (formData) => {

  return async (dispatch, getState) => {
    const {
      user: { user,token },
    } = getState();
  
    try {
      
      dispatch(createEventStart());
      const response = await axios.post(
        `http://localhost:8000/api/v1/events/new`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          }
        }
      );
      dispatch(createEventSuccess(response.data.event));
    } catch (err) {
      dispatch(createEventError(err));
    }
  };
};

// USER AND TOKEN COULD BE FIND SIMPLY
export const createEventApplyAsync = (eventId) => {

  return async (dispatch, getState) => {
    const {
      user: { user,token },
    } = getState();
    console.log(token);
    try { 
      dispatch(createEventApplyStart());
      const response = await axios.post(
        `http://localhost:8000/api/v1/events/apply/${eventId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      );
      console.log(response)
      dispatch(createEventApplySuccess(response.data.event));
    } catch (err) {
      dispatch(createEventApplyError(err));
    }
  };
};

export const updateEventAsync = (id, form) => {
  return async (dispatch, getState) => {
    const {
      user: { token },
    } = getState();
    try {
      dispatch(updateEventStart());
      const response = await axios.patch(
        `http://localhost:8000/events/${id}`,
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(updateEventSuccess(id, response.data.event));
    } catch (err) {
      dispatch(updateEventError(err));
    }
  };
};