import axios from 'axios';
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = "X-CSRFToken"
axios.defaults.withCredentials = true;

const client = axios.create({
    baseURL: process.env.REACT_APP_ENVIRONMENT
});


export const registrarCuenta = (post) => {

    const res = client.post("/api/register", post).catch(err  => {
        return err.response.data["data"]
    });
    return res;
}