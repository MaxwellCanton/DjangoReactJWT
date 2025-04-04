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
    const res = await client.get("/clientes/api/",{
                 headers: {
                     "Content-Type": "application/json",
                     Authorization: `Bearer ${localStorage.getItem("access_token")}`
                 },
                 withCredentials: true});

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

    const res = await client.get(`/clientes/api/${cliente_id}`,{
                 headers: {
                     "Content-Type": "application/json",
                     Authorization: `Bearer ${localStorage.getItem("access_token")}`
                 },
                 withCredentials: true});

    if(res.status === 200){
      dispatch({type: GET_CLIENT_BY_ID_SUCCESS, payload: res.data});
    }else{
      dispatch({type: GET_CLIENT_BY_ID_FAIL});
    }

  } catch (error) {
    dispatch({type: GET_CLIENT_BY_ID_FAIL});
  }

}

export const delete_cliente = (id) => {

  client.delete(`/clientes/api/${id}`,{
                 headers: {
                     "Content-Type": "application/json",
                     Authorization: `Bearer ${localStorage.getItem("access_token")}`
                 },
                 withCredentials: true});

}

export const update_cliente = (post, id) => {

    client.put(`/clientes/api/${id}`, post,{
                 headers: {
                     "Content-Type": "application/json",
                     Authorization: `Bearer ${localStorage.getItem("access_token")}`
                 },
                 withCredentials: true});

}

export const create_cliente = (post) => {
    const res = client.post("/clientes/api/", post,{
                 headers: {
                     "Content-Type": "application/json",
                     Authorization: `Bearer ${localStorage.getItem("access_token")}`
                 },
                 withCredentials: true});
}