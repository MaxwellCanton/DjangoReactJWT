import {useEffect} from "react"
import axios from "axios";


export function LogoutComponent({setIsAuth}) {
    useEffect(() => {
       (async () => {
         try {
            await axios.post('http://localhost:8000/api/logout/',{
             refresh_token:localStorage.getItem('refresh_token')
             } ,{
                 headers: {
                     'Content-Type': 'application/json',
                     Authorization: `Bearer ${localStorage.getItem("access_token")}`
                 }
             },
             {withCredentials: true});
           setIsAuth(false)
           localStorage.clear();
           window.location.href = '/app/api/login';
           } catch (e) {
             console.log('logout not working', e)
           }
         })();
    }, []);
    return (
       <div></div>
     )
}