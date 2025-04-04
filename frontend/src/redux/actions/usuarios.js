import axios from 'axios';
import { useNavigate } from 'react-router-dom';
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = "X-CSRFToken"
axios.defaults.withCredentials = true;

const client = axios.create({
    baseURL: process.env.REACT_APP_ENVIRONMENT
});


export const registerAccount = (post) => {

    const res = client.post("/api/register", post).catch(err  => {
        return err.response.data["data"]
    });
    return res;
}