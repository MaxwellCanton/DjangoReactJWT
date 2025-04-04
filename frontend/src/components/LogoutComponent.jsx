import axios from "axios";

const client = axios.create({
    baseURL: process.env.REACT_APP_ENVIRONMENT
});

export function LogoutComponent({setIsAuth}) {
    try {
        client.post(
             "/api/logout/",
             {refresh_token: localStorage.getItem("refresh_token")},
             {
                 headers: {
                     "Content-Type": "application/json",
                     Authorization: `Bearer ${localStorage.getItem("access_token")}`
                 },
                 withCredentials: true
             }
         );
        localStorage.clear();
        setIsAuth(false);
        window.location.href = '/app/api/login'
    } catch (e) {
     console.log('Ocurrió un error al loguearse', e)
    }
    return (
       <div></div>
     )
}