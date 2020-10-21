import {
    REQUEST_DOCTORS,
    RECEIVE_DOCTORS,
    ERROR_REQUESTING_DOCTORS,
  } from "../actions";
  
  const initialState = {
    doctors: [],
    isFetching: false,
    error: null,
    lastUpdated: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case REQUEST_DOCTORS: {
        return {
          ...state,
          isFetching: true
        }
      }
      case RECEIVE_DOCTORS: {
        return {
          ...state,
          isFetching: false,
          lastUpdated: action.receivedAt,
          doctors: [...state.doctors.slice(state.doctors.length), ...action.doctors],
        };
      }
      case ERROR_REQUESTING_DOCTORS: {
        return {
          ...state,
          isFetching: false,
          doctorsFetchStatus: action.fetchStatus,
          error:action.error
        }
      }
      default: {
        return state;
      }
    }
  };
  
  export default reducer;
  