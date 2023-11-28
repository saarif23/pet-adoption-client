import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useUserPets = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { data: userAddedPet = [], isPending, refetch } = useQuery({
        queryKey: ['userAddedPet', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/userAddedPet?email=${user?.email}`)

            return res.data
        }

    })


    return [userAddedPet, isPending, refetch]
};

export default useUserPets;