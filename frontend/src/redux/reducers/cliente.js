import {
    GET_CLIENT_LIST_SUCCESS,
    GET_CLIENT_LIST_FAIL,
} from '../actions/types';

const initialState = {
    clientes_list: null,
};

export default function cliente(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case GET_CLIENT_LIST_SUCCESS:
            return {
                ...state,
                clientes_list: payload.clientes,
            }
        case GET_CLIENT_LIST_FAIL:
            return {
                ...state,
                clientes_list: null,
            }
        default:
            return state
    }
}