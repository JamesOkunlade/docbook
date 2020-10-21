import { 
    REQUEST_DOCTOR_BY_ID, 
    RECEIVE_DOCTOR_BY_ID, 
    ERROR_REQUESTING_DOCTOR_BY_ID 
} from '../actions';


const initialState = {
    doctor: {},
    isFetching: false,
    error: null,
}


const reducer = (state=initialState, action) =>  {
    switch (action.type) {
        case REQUEST_DOCTOR_BY_ID: {
          return {
              ...state,
              doctor: {},
              isFetching: true
          }
        }
        case RECEIVE_DOCTOR_BY_ID: {
          return {
            ...state,
            isFetching: false,
            doctor: {...action.doctor},
          };
        }
        case ERROR_REQUESTING_DOCTOR_BY_ID: {
            return {
                ...state,
                isFetching: false,
                error: action.error,
                doctorFetchStatus: action.fetchStatus
            }
        }
        default: {
          return state;
        }
      }

}

export default reducer;