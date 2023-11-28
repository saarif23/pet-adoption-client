
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useDonationCampaign = () => {
    const axiosPublic = useAxiosPublic()
    const { data: campaigns = [], isPending, refetch } = useQuery({
        queryKey: ['donationcampaigns'],
        queryFn: async () => {
            const res = await axiosPublic("/donationcampaigns")
            return res.data
        }
    })

    return [campaigns,isPending,refetch]
};

export default useDonationCampaign;


