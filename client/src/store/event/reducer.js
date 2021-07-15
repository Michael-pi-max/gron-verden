import { EventActionTypes } from "./types";

const INITIAL_STATE = {
    fetcheventsLoading: false,
    fetcheventLoading: false,
    createeventLoading: false,
    createeventSuccess: false,
    updateeventLoading: false,
    events: null,
    event: {
      
    },
    page: 1,
    limit: 15,
    total: 0,
    updateeventError: null,
    createeventError: null,
    fetcheventError: null,
    fetcheventsError: null,
  };


  const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case EventActionTypes.EVENTS_FETCH_START:
        return {
          ...state,
          fetcheventsLoading: true,
          fetcheventsError: null,
        };
      case EventActionTypes.EVENTS_FETCH_SUCCESS:
        return {
          ...state,
          fetchEventsLoading: false,
          events: action.payload.events,
          page: action.payload.page,
          limit: action.payload.limit,
          total: action.payload.total,
        };
      case EventActionTypes.EVENTS_FETCH_ERROR:
        return {
          ...state,
          fetchEventsLoading: false,
          fetchEventsError: action.payload.error,
        };
      case EventActionTypes.EVENT_FETCH_START:
        return {
          ...state,
          fetchEventLoading: true,
          fetchEventError: null,
        };
      case EventActionTypes.EVENT_FETCH_SUCCESS:
        return {
          ...state,
          fetchEventLoading: false,
          event: {
            ...state.event,
            [action.payload.id]: action.payload.event,
          },
        };
      case EventActionTypes.EVENT_FETCH_ERROR:
        return {
          ...state,
          fetchEventLoading: false,
          fetchEventError: action.payload.error,
        };
      case EventActionTypes.EVENT_CREATE_START:
        return {
          ...state,
          createEventLoading: true,
          createEventError: null,
        };
      case EventActionTypes.EVENT_CREATE_SUCCESS:
        return {
          ...state,
          createEventLoading: false,
          createEventSuccess: true,
          events: [action.payload.event, ...state.events],
        };
      case EventActionTypes.EVENT_CREATE_ERROR:
        return {
          ...state,
          createEventLoading: false,
          createEventError: action.payload.error,
        };
      case EventActionTypes.CLEAR_EVENT_CREATE_SUCCESS:
        return {
          ...state,
          createEventSuccess: false,
        };
  
      case EventActionTypes.EVENT_UPDATE_START:
        return {
          ...state,
          updateEventLoading: true,
          updateEventError: null,
        };
      case EventActionTypes.EVENT_UPDATE_SUCCESS:
        return {
          ...state,
          updateEventLoading: false,
          event: {
            ...state.event,
            [action.payload.id]: action.payload.event,
          },
        };
      case EventActionTypes.EVENT_UPDATE_ERROR:
        return {
          ...state,
          updateEventLoading: false,
          updateEventError: action.payload.error,
        };
      default:
        return state;
    }
  };
  
  export default reducer;