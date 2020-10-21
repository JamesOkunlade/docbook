import {
    REQUEST_SPECIALTIES,
    RECEIVE_SPECIALTIES,
    ERROR_REQUESTING_SPECIALTIES,
  } from "../actions";
  
  const initialState = {
    specialties: [],
    isFetching: false,
    error: null,
    lastUpdated: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case REQUEST_SPECIALTIES: {
        return {
          ...state,
          isFetching: true
        }
      }
      case RECEIVE_SPECIALTIES: {
        return {
          ...state,
          isFetching: false,
          lastUpdated: action.receivedAt,
          specialties: [...state.specialties.slice(state.specialties.length), ...action.specialties],
        };
      }
      case ERROR_REQUESTING_SPECIALTIES: {
        return {
          ...state,
          isFetching: false,
          error:action.error
        }
      }
      default: {
        return state;
      }
    }
  };
  
  export default reducer;
  