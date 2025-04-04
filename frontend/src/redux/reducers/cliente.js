import {
    GET_CLIENT_LIST_SUCCESS,
    GET_CLIENT_LIST_FAIL,
    GET_CLIENT_BY_ID_SUCCESS,
    GET_CLIENT_BY_ID_FAIL
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
        case GET_CLIENT_BY_ID_SUCCESS:
            return {
                ...state,
                detail_cliente: payload.note,
            }
        case GET_CLIENT_BY_ID_FAIL:
            return {
                ...state,
                detail_cliente: null,
            }
        default:
            return state
    }
}