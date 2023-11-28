import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useUserDonations = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { data: userAddedDonations = [], isPending, refetch } = useQuery({
        queryKey: ['userAddedDonations', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/userAddedDonations?email=${user?.email}`)

            return res.data
        }

    })


    return [userAddedDonations, isPending, refetch]
};

export default useUserDonations;