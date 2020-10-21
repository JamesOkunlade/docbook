import { 
    REQUEST_APPOINTMENT_BY_ID, 
    RECEIVE_APPOINTMENT_BY_ID, 
    ERROR_REQUESTING_APPOINTMENT_BY_ID 
} from '../actions';


const initialState = {
    appointment: {},
    appointmentFetchStatus: null,
    isFetching: false,
    error: null,
}


const reducer = (state=initialState, action) =>  {
    switch (action.type) {
        case REQUEST_APPOINTMENT_BY_ID: {
          return {
              ...state,
              appointment: {},
              isFetching: true
          }
        }
        case RECEIVE_APPOINTMENT_BY_ID: {
          return {
            ...state,
            isFetching: false,
            appointmentFetchStatus: action.fetchStatus,
            appointment: {...action.appointment},
          };
        }
        case ERROR_REQUESTING_APPOINTMENT_BY_ID: {
            return {
                ...state,
                isFetching: false,
                error: action.error,
                appointmentFetchStatus: action.fetchStatus
            }
        }
        default: {
          return state;
        }
      }

}

export default reducer;