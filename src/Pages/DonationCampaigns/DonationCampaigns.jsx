
import Button from "../../Components/Shared/Button";
import Container from "../../Components/Shared/Container";
import useDonationCampaign from "../../Hooks/useDonationCampaign";
import SingleDonation from "./SingleDonation";
const DonationCampaigns = () => {
    const [campaigns] = useDonationCampaign();

    return (
        <Container>
            <div className="my-10 grid grid-cols-1 md:grid-cols-2, lg:grid-cols-3 gap-10">
                <div className=" border bg-center bg-cover bg-black bg-blend-overlay bg-opacity-30 pl-10 pt-20 pb-8" style={{ backgroundImage: 'url("https://i.ibb.co/0rsdGfW/adopt-pet.jpg")' }}>
                    <p className=" border-l-2  pl-5 text-xl border-fuchsia-600  text-fuchsia-500 font-bold mt-10">New Campaigns</p>
                    <h3 className="text-5xl py-10  text-white font-extrabold">Available for Donation Here </h3>
                    <Button btn_text={"See more "} />
                </div>
                {
                    campaigns.map(donation => <SingleDonation key={donation.pet_name} donation={donation}></SingleDonation>)
                }
            </div>
        </Container>
    );

};


export default DonationCampaigns;