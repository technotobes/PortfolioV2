import * as actionTypes from '../actions/actionTypes'


export const setIndex = (value) => {
    return {
        type: actionTypes.SET_INDEX,
        payload: value
    }
}