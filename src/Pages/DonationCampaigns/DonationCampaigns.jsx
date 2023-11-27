
import Container from "../../Components/Shared/Container";
import SingleDonation from "./SingleDonation";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const DonationCampaigns = () => {

    const axiosPublic = useAxiosPublic()
    const { data: campaigns = [], isPending, refetch } = useQuery({
        queryKey: ['donationcampaigns'],
        queryFn: async () => {
            const res = await axiosPublic("/donationcampaigns")
            return res.data
        }
    })




    return (
        <Container>
            <div className="my-10 grid grid-cols-1 md:grid-cols-2, lg:grid-cols-3 gap-10">
                <div className=" border ">


                </div>
                {
                    campaigns.map(donation => <SingleDonation key={donation.pet_name} donation={donation}></SingleDonation>)
                }
            </div>
        </Container>
    );

};


export default DonationCampaigns;