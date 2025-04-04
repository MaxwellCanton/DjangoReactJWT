import axios from 'axios';
import {
    GET_CLIENT_LIST_SUCCESS,
    GET_CLIENT_LIST_FAIL,
    GET_CLIENT_BY_ID_SUCCESS,
    GET_CLIENT_BY_ID_FAIL
} from "./types";

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = "X-CSRFToken"
axios.defaults.withCredentials = true;

const client = axios.create({
    baseURL: process.env.REACT_APP_ENVIRONMENT
});

export const return_clientes = () => async dispatch => {

  try {
    const res = await client.get("/clientes/api/");

    if(res.status === 200){
      dispatch({type: GET_CLIENT_LIST_SUCCESS, payload: res.data});
    }else{
      dispatch({type: GET_CLIENT_LIST_FAIL});
    }

  } catch (error) {
    dispatch({type: GET_CLIENT_LIST_FAIL});
  }

}

export const return_cliente_by_id =  (cliente_id) => async dispatch => {

  try {

    const res = await client.get(`/clientes/api/${cliente_id}`);

    if(res.status === 200){
      dispatch({type: GET_CLIENT_BY_ID_SUCCESS, payload: res.data});
    }else{
      dispatch({type: GET_CLIENT_BY_ID_FAIL});
    }

  } catch (error) {
    dispatch({type: GET_CLIENT_BY_ID_FAIL});
  }

}