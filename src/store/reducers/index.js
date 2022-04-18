import * as actionTypes from "../actions/actionTypes"

const initialState = {
    nav_index: ""
}

const navIndexReducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_INDEX:
            return {
                ...state,
                nav_index: action.payload
            }
        default:
            return state;
    }
}

export default navIndexReducer