import axios from 'axios';
import {
    GET_PROJECT_LIST_SUCCESS,
    GET_PROJECT_LIST_FAIL
} from "./types";

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = "X-CSRFToken"
axios.defaults.withCredentials = true;

const client = axios.create({
    baseURL: process.env.REACT_APP_ENVIRONMENT
});

export const return_proyectos = () => async dispatch => {

  try {
    const res = await client.get("/proyectos/api/");

    if(res.status === 200){
      dispatch({type: GET_PROJECT_LIST_SUCCESS, payload: res.data});
    }else{
      dispatch({type: GET_PROJECT_LIST_FAIL});
    }

  } catch (error) {
    dispatch({type: GET_PROJECT_LIST_FAIL});
  }

}