import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const usePets = () => {
    const axiosPublic = useAxiosPublic()
    const { data: pets = [], isPending, refetch } = useQuery({
        queryKey: ['pets'],
        queryFn: async () => {
            const res = await axiosPublic("/pets")
            return res.data
        }
    })

    return [pets, isPending, refetch]
};

export default usePets;
