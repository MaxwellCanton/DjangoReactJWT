import {
    GET_PROJECT_LIST_SUCCESS,
    GET_PROJECT_LIST_FAIL,
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
        default:
            return state
    }
}