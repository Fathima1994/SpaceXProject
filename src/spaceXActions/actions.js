import * as types from './types';
import axios from 'axios';

export const fetchSpaceXList= () => async dispatch => {
    try {
        const res = await axios.get('https://api.spacexdata.com/v3/launches?limit=100');
         dispatch({
            type: types.FETCH_SPACEX,
            payload: res.data
        }); 
    } catch (err) {
        dispatch({
            type: types.SPACEX_ERROR,
            payLoad: err.response.data.error
        });
    }
    
};
export const fetchlaunchSpaceXList= (launchVal) => async dispatch => {
    try {
        const res = await axios.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=${launchVal}`);
         dispatch({
            type: types.FETCH_SPACEX,
            payload: res.data
        }); 
    } catch (err) {
        dispatch({
            type: types.SPACEX_ERROR,
            payLoad: err.response.data.error
        });
    }
    
};
export const fetchLandSpaceXList= (landVal) => async dispatch => {
    try {
        const res = await axios.get(`https://api.spacexdata.com/v3/launches?limit=100&land_success=${landVal}`);
         dispatch({
            type: types.FETCH_SPACEX,
            payload: res.data
        }); 
    } catch (err) {
        dispatch({
            type: types.SPACEX_ERROR,
            payLoad: err.response.data.error
        });
    }
    
};
export const fetchLaunchYearSpaceXList= (launchyear) => async dispatch => {
    try {
        const res = await axios.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_year=${launchyear}`);
         dispatch({
            type: types.FETCH_SPACEX,
            payload: res.data
        }); 
    } catch (err) {
        dispatch({
            type: types.SPACEX_ERROR,
            payLoad: err.response.data.error
        });
    }
    
};
export const fetchLaunchYearandLandSpaceXList= (landVal, launchyear) => async dispatch => {
    try {
        const res = await axios.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_year=${launchyear}&land_success=true=${landVal}`);
         dispatch({
            type: types.FETCH_SPACEX,
            payload: res.data
        }); 
    } catch (err) {
        dispatch({
            type: types.SPACEX_ERROR,
            payLoad: err.response.data.error
        });
    }
    
};
export const fetchLaunchYearLandandLaunchSpaceXList= (landVal, launchVal, launchyear) => async dispatch => {
    try {
        const res = await axios.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_year=${launchyear}&land_success=${landVal}&launch_success=${launchVal}`);
         dispatch({
            type: types.FETCH_SPACEX,
            payload: res.data
        }); 
    } catch (err) {
        dispatch({
            type: types.SPACEX_ERROR,
            payLoad: err.response.data.error
        });
    }
    
};
export const fetchLaunchYearandLaunchspaceXList = (launchVal, launchyear) => async dispatch => {
    try {
        const res = await axios.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_year=${launchyear}&launch_success=${launchVal}`);
         dispatch({
            type: types.FETCH_SPACEX,
            payload: res.data
        }); 
    } catch (err) {
        dispatch({
            type: types.SPACEX_ERROR,
            payLoad: err.response.data.error
        });
    }
    
};
export const fetchLaunchandLandspaceXList = (launchVal, landVal) => async dispatch => {
    try {
        const res = await axios.get(`https://api.spacexdata.com/v3/launches?limit=100&land_success=${landVal}&launch_success=${launchVal}`);
         dispatch({
            type: types.FETCH_SPACEX,
            payload: res.data
        }); 
    } catch (err) {
        dispatch({
            type: types.SPACEX_ERROR,
            payLoad: err.response.data.error
        });
    }
    
};