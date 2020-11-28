import * as types from '../spaceXActions/types';

const initialState = {
    spaceXList: []
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case types.FETCH_SPACEX:
            return {
                ...state,
                spaceXList: action.payload
            }
        default:
            return state;
    }
}