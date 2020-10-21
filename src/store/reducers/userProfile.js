import { 
    REQUEST_USER_BY_ID, 
    RECEIVE_USER_BY_ID, 
    ERROR_REQUESTING_USER_BY_ID 
} from '../actions';


const initialState = {
    user: {},
    isFetching: false,
    error: null,
}


const reducer = (state=initialState, action) =>  {
    switch (action.type) {
        case REQUEST_USER_BY_ID: {
          return {
              ...state,
              user: {},
              isFetching: true
          }
        }
        case RECEIVE_USER_BY_ID: {
          return {
            ...state,
            isFetching: false,
            user: {...action.user},
          };
        }
        case ERROR_REQUESTING_USER_BY_ID: {
            return {
                ...state,
                isFetching: false,
                error: action.error,
                userFetchStatus: action.fetchStatus
            }
        }
        default: {
          return state;
        }
      }

}

export default reducer;