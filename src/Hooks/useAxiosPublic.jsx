import axios from "axios";


export const axiosPublic = axios.create({
    baseURL: "https://pet-adoption-server-zeta.vercel.app",
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;

