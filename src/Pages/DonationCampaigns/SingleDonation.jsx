
import { MdDetails } from "react-icons/md";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
const SingleDonation = ({ donation }) => {
    const { _id, pet_name, pet_image, maximum_donation_amount, donated_amount, } = donation;
    return (
        <div>
            <div className="border border-sky-500 rounded-lg max-lg:mx-5  flex flex-col justify-between">
                <img className="w-full h-[280px] rounded-t-lg" src={pet_image} alt="productImage" />
                <hr />
                <div className="p-3">
                    <div className='space-y-2'>
                        <h3 className="text-2xl font-bold"> {pet_name}</h3>
                        {/* <p>Age : {pet_age} years</p> */}
                        <p> Maximum Donation Amount :$ {maximum_donation_amount}</p>
                        <p>Already Donated : $ {donated_amount}</p>
                    </div>
                </div>
                <Link to={`/donationCampaigns/${_id}`}>
                    <div className="flex justify-center w-full items-center gap-2 p-2 bg-fuchsia-500 rounded-b-lg text-white font-semibold">  <MdDetails></MdDetails> <span>View Details</span></div>
                </Link>
            </div>
        </div>
    );
};
SingleDonation.propTypes = {
    donation: PropTypes.object.isRequired
}


export default SingleDonation;