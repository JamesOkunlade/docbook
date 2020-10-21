import {
    REQUEST_APPOINTMENTS,
    RECEIVE_APPOINTMENTS,
    ERROR_REQUESTING_APPOINTMENTS,
  } from "../actions";
  
  const initialState = {
    appointments: [],
    appointmentsFetchStatus: null,
    isFetching: false,
    error: null,
    lastUpdated: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case REQUEST_APPOINTMENTS: {
        return {
          ...state,
          isFetching: true
        }
      }
      case RECEIVE_APPOINTMENTS: {
        return {
          ...state,
          isFetching: false,
          lastUpdated: action.receivedAt,
          appointmentsFetchStatus: action.fetchStatus,
          appointments: [...state.appointments.slice(state.appointments.length), ...action.appointments],
        };
      }
      case ERROR_REQUESTING_APPOINTMENTS: {
        return {
          ...state,
          isFetching: false,
          appointmentsFetchStatus: action.fetchStatus,
          error:action.error
        }
      }
      default: {
        return state;
      }
    }
  };
  
  export default reducer;
  