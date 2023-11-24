import axios from "axios";


export const axiosPublic = axios.create({
    baseURL: ""
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;