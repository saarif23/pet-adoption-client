
import Container from "../../Components/Shared/Container";
import useDonationCampaign from "../../Hooks/useDonationCampaign";
import SingleDonation from "./SingleDonation";
const DonationCampaigns = () => {
const [campaigns,isPending,refetch] = useDonationCampaign();

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