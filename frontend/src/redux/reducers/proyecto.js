import {
    GET_PROJECT_LIST_SUCCESS,
    GET_PROJECT_LIST_FAIL,
    GET_PROJECT_BY_ID_SUCCESS,
    GET_PROJECT_BY_ID_FAIL,
} from '../actions/types';

const initialState = {
    proyectos_list: null,
};

export default function proyecto(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case GET_PROJECT_LIST_SUCCESS:
            return {
                ...state,
                proyectos_list: payload.proyectos,
            }
        case GET_PROJECT_LIST_FAIL:
            return {
                ...state,
                proyectos_list: null,
            }
        case GET_PROJECT_BY_ID_SUCCESS:
            return {
                ...state,
                detail_proyecto: payload.proyecto,
            }
        case GET_PROJECT_BY_ID_FAIL:
            return {
                ...state,
                detail_proyecto: null,
            }
        default:
            return state
    }
}