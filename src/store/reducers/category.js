import { SET_CATEGORY } from '../actions';

const initialState = {
    category: 'All'
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY: {
            return {
                ...state,
                category: action.category
            }
        }
        default: {
            return state;
        }
    }

}

export default reducer;