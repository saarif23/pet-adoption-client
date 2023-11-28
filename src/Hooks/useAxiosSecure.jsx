import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";


export const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true
})
const useAxiosSecure = () => {
    const { logout } = useAuth();
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log('axiossecure error', error.response)
            // if (error.response.status === 401 || error.response.status === 403) {
            //     console.log('logout the user')
            //     logout()
            //         .then(() => {
            //             navigate("/login")

            //         })
            //         .catch(error => console.log(error))
            // }
        })
    }, [])




    return axiosSecure;


};

export default useAxiosSecure;



// \\
// const { logout } = useContext(AuthContext);


// axiosSecure.interceptors.response.use(function (response) {
//     return response;
// }, function (error) {
//     const status = error.response.status;

//     /// 401 and 403  status error user logout
//     if (status === 401 || status === 403) {
//         logout();
//     }
//     //
//     useEffect(() => {
//         instance.interceptors.response.use(res => {
//             return res;
//         }, error => {
//             console.log('axiossecure error', error.response)
//             if (error.response.status === 401 || error.response.status === 403) {
//                 console.log('logout the user')
//                 logout()
//                     .then(() => {
//                         navigate("/login")

//                     })
//                     .catch(error => console.log(error))
//             }
//         })
//     }, [])