import axios from 'axios';
import {
    GET_PROJECT_LIST_SUCCESS,
    GET_PROJECT_LIST_FAIL,
    GET_PROJECT_BY_ID_SUCCESS,
    GET_PROJECT_BY_ID_FAIL,
    GET_PROJECTS_BY_STATUS_SUCCESS,
    GET_PROJECTS_BY_STATUS_FAIL
} from "./types";

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = "X-CSRFToken"
axios.defaults.withCredentials = true;

const client = axios.create({
    baseURL: process.env.REACT_APP_ENVIRONMENT
});

export const return_proyectos = () => async dispatch => {

  try {
    const res = await client.get("/proyectos/api/",{
                 headers: {
                     "Content-Type": "application/json",
                     Authorization: `Bearer ${localStorage.getItem("access_token")}`
                 },
                 withCredentials: true});

    if(res.status === 200){
      dispatch({type: GET_PROJECT_LIST_SUCCESS, payload: res.data});
    }else{
      dispatch({type: GET_PROJECT_LIST_FAIL});
    }

  } catch (error) {
    dispatch({type: GET_PROJECT_LIST_FAIL});
  }

}

export const return_proyecto_by_id =  (proyecto_id) => async dispatch => {

  try {

    const res = await client.get(`/proyectos/api/${proyecto_id}`,{
                 headers: {
                     "Content-Type": "application/json",
                     Authorization: `Bearer ${localStorage.getItem("access_token")}`
                 },
                 withCredentials: true});

    if(res.status === 200){
      dispatch({type: GET_PROJECT_BY_ID_SUCCESS, payload: res.data});
    }else{
      dispatch({type: GET_PROJECT_BY_ID_FAIL});
    }

  } catch (error) {
    dispatch({type: GET_PROJECT_BY_ID_FAIL});
  }

}

export const delete_proyecto = (id) => {

  client.delete(`/proyectos/api/${id}`,{
                 headers: {
                     "Content-Type": "application/json",
                     Authorization: `Bearer ${localStorage.getItem("access_token")}`
                 },
                 withCredentials: true});

}

export const update_proyecto = (post, id) => {

    client.put(`/proyectos/api/${id}`, post,{
                 headers: {
                     "Content-Type": "application/json",
                     Authorization: `Bearer ${localStorage.getItem("access_token")}`
                 },
                 withCredentials: true});

}

export const create_proyecto = (post) => {
    const res = client.post("/proyectos/api/", post,{
                 headers: {
                     "Content-Type": "application/json",
                     Authorization: `Bearer ${localStorage.getItem("access_token")}`
                 },
                 withCredentials: true});
}

export const return_proyectos_by_estado = (id) => async dispatch => {

    try {
      const res = await client.get(`/proyectos/api/proyectos_estados/${id}`,{
                 headers: {
                     "Content-Type": "application/json",
                     Authorization: `Bearer ${localStorage.getItem("access_token")}`
                 },
                 withCredentials: true});
      if(res.status === 200){
        dispatch({type: GET_PROJECTS_BY_STATUS_SUCCESS, payload: res.data});
      }else{
        dispatch({type: GET_PROJECTS_BY_STATUS_FAIL});
      }

    } catch (error) {
      dispatch({type: GET_PROJECTS_BY_STATUS_FAIL});
    }

}