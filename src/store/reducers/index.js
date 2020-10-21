import { combineReducers } from 'redux';

import appointment from './appointment';
import appointments from './appointments';
import doctor from './doctor';
import doctors from './doctors';
import specialties from './specialties';
import category from './category';
import userProfile from './userProfile';

const rootReducer = combineReducers({
    appointment: appointment,
    appointments: appointments,
    doctor: doctor,
    doctors: doctors,
    specialties: specialties,
    category: category,
    userProfile: userProfile
})


export default rootReducer;









