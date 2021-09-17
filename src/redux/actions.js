import {GET_WEATHER, HIDE_LOADER, SHOW_LOADER} from './types';

export const getWeather = (data) => {
    return {
        type: GET_WEATHER,
        payload: data,
    }
}

export const showLoader = () => {
    return {
        type: SHOW_LOADER,
        payload: true,
    }
}

export const hideLoader = () => {
    return {
        type: HIDE_LOADER,
        payload: false,
    }
}
