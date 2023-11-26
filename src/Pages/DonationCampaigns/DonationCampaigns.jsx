
import { useEffect, useState } from "react";
import Container from "../../Components/Shared/Container";
import SingleDonation from "./SingleDonation";

const DonationCampaigns = () => {
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        fetch('donationCampaigns.json')
            .then(res => res.json())
            .then(data => setDonations(data))
    }, [])


    return (
        <Container>
            <div className="my-10 grid grid-cols-1 md:grid-cols-2, lg:grid-cols-3 gap-10">
                <div className=" border ">


                </div>
                {
                    donations.slice(0, 30).map(donation => <SingleDonation key={donation.pet_name} donation={donation}></SingleDonation>)
                }
            </div>
        </Container>
    );

};


export default DonationCampaigns;