import { SHOW_LOADER, HIDE_LOADER } from './types';

const initialState = {
    loader: false,
}

export const loaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return { loader: action.payload };
        case HIDE_LOADER:
            return { loader: action.payload };
        default:
            return state;
    }
}
