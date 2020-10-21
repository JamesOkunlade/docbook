// import { URL } from './api';

export const REQUEST_SPECIALTIES = 'REQUEST_SPECIALTIES';
export const RECEIVE_SPECIALTIES = 'RECEIVE_SPECIALTIES';
export const ERROR_REQUESTING_SPECIALTIES = 'ERROR_REQUESTING_SPECIALTIES';

export const REQUEST_DOCTORS = 'REQUEST_DOCTORS';
export const RECEIVE_DOCTORS = 'RECEIVE_DOCTORS';
export const ERROR_REQUESTING_DOCTORS = 'ERROR_REQUESTING_DOCTORS';

export const REQUEST_DOCTOR_BY_ID = 'REQUEST_DOCTOR_BY_ID';
export const RECEIVE_DOCTOR_BY_ID = 'RECEIVE_DOCTOR_BY_ID';
export const ERROR_REQUESTING_DOCTOR_BY_ID = 'ERROR_REQUESTING_DOCTOR_BY_ID';

export const REQUEST_USER_BY_ID = 'REQUEST_USER_BY_ID';
export const RECEIVE_USER_BY_ID = 'RECEIVE_USER_BY_ID';
export const ERROR_REQUESTING_USER_BY_ID = 'ERROR_REQUESTING_USER_BY_ID';

export const REQUEST_APPOINTMENTS = 'REQUEST_APPOINTMENTS';
export const RECEIVE_APPOINTMENTS = 'RECEIVE_APPOINTMENTS';
export const ERROR_REQUESTING_APPOINTMENTS = 'ERROR_REQUESTING_APPOINTMENTS';

export const REQUEST_APPOINTMENT_BY_ID = 'REQUEST_APPOINTMENT_BY_ID';   
export const RECEIVE_APPOINTMENT_BY_ID = 'RECEIVE_APPOINTMENT_BY_ID';
export const ERROR_REQUESTING_APPOINTMENT_BY_ID = 'ERROR_REQUESTING_APPOINTMENT_BY_ID';

export const SET_CATEGORY = 'SET_CATEGORY';



// export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
// export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
// export const ERROR_REQUESTING_CATEGORIES = 'ERROR_REQUESTING_CATEGORIES';



// FETCH SPECIALTIES ACTIONS CREATORS

function requestSpecialties() {
    return {
        type: REQUEST_SPECIALTIES
    }
}

function receiveSpecialties(response) {
    return {
        type: RECEIVE_SPECIALTIES,
        specialties: response,
        receivedAt: Date.now()
    }
}

function errorRequestingSpecialties(error) {
    return {
        type: ERROR_REQUESTING_SPECIALTIES,
        error: error,
    }
}

export function fetchSpecialties() {
    return async function(dispatch) {
        dispatch(requestSpecialties())
        try {
            const response = await fetch(`http://localhost:3000/specialties`);
            const response_1 = await response.json();
            return dispatch(receiveSpecialties(response_1));
        }
        catch (error) {
            return dispatch(errorRequestingSpecialties(error));
        }
    }
}


// FETCH DOCTORS ACTIONS CREATORS

function requestDoctors() {
    return {
        type: REQUEST_DOCTORS
    }
}

function receiveDoctors(response) {
    return {
        type: RECEIVE_DOCTORS,
        doctors: response,
        receivedAt: Date.now()
    }
}

function errorRequestingDoctors(error) {
    return {
        type: ERROR_REQUESTING_DOCTORS,
        error: error,
    }
}

export function fetchDoctors() {
    return async function(dispatch) {
        dispatch(requestDoctors())
        try {
            const response = await fetch(`http://localhost:3000/doctors`);
            const response_1 = await response.json();
            return dispatch(receiveDoctors(response_1));
        }
        catch (error) {
            return dispatch(errorRequestingDoctors(error));
        }
    }
}



// // FETCH USER BY ID ACTIONS CREATORS

function requestUserById() {
    return {
        type: REQUEST_USER_BY_ID
    }
}


function receiveUserById(response) {
    return {
        type: RECEIVE_USER_BY_ID,
        user: response,
    }
}

function errorRequestingUserById(error) {
    return {
        type: ERROR_REQUESTING_USER_BY_ID,
        error: error,
    }
}

export function getProfile(userId) {
    
    return async function(dispatch) {
        dispatch(requestUserById())
        // try {
        //     const response = await fetch(`http://localhost:3000/doctors/${doctorId}`);
        //     const response_1 = await response.json();
        //     return dispatch(receiveDoctorById(response_1));
        // }
        // catch (error) {
        //     return dispatch(errorRequestingDoctorById(error));
        // }
    }


}



// // FETCH DOCTOR BY ID ACTIONS CREATORS

function requestDoctorById() {
    return {
        type: REQUEST_DOCTOR_BY_ID
    }
}


function receiveDoctorById(response) {
    return {
        type: RECEIVE_DOCTOR_BY_ID,
        doctor: response,
    }
}

function errorRequestingDoctorById(error) {
    return {
        type: ERROR_REQUESTING_DOCTOR_BY_ID,
        error: error,
    }
}

export function fetchDoctorById(doctorId) {
    
    return async function(dispatch) {
        dispatch(requestDoctorById())
        try {
            const response = await fetch(`http://localhost:3000/doctors/${doctorId}`);
            const response_1 = await response.json();
            return dispatch(receiveDoctorById(response_1));
        }
        catch (error) {
            return dispatch(errorRequestingDoctorById(error));
        }
    }


}





















// // FETCH MOVIES BY CATEGORY ACTIONS CREATORS

// function fetchMoviesByCategory(category) {
//     return async function(dispatch) {
//         dispatch(requestMovies())
//         try {
//             const response = await fetch(`https://yts.mx/api/v2/list_movies.json?limit=50&genre=${category}`);
//             const response_1 = await response.json();
//             return dispatch(receiveMovies(response_1));
//         }
//         catch (error) {
//             return dispatch(errorRequestingMovies(error));
//         }
//     }
// }

// function setCategory(category) {
//     return {
//         type: SET_CATEGORY,
//         category: category
//     }
// }

// export function setCategoryFilter(category) {
//     return function(dispatch) {
//         dispatch(setCategory(category))
//         if (category === 'All') {
//             dispatch(fetchMovies())
//         } else{
//             dispatch(fetchMoviesByCategory(category))
//         }
//     }
// }




