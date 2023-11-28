import { BiFastForward } from 'react-icons/bi';
// import { MdFavorite } from 'react-icons/md';
import { SiIconfinder } from 'react-icons/si';
import Container from '../../Components/Shared/Container';
import Payment from './Payment/Payment';
import useDonationCampaign from '../../Hooks/useDonationCampaign';
import { useParams } from 'react-router-dom';
import Loading from '../../Components/Shared/Loading';


const DonationDetails = () => {

    const { id } = useParams();
    const [campaigns, isPending] = useDonationCampaign();
    if (isPending) {
        return <Loading />
    }
    const donationDetails = campaigns.find(item => item._id === id);
    const { pet_name, pet_image, maximum_donation_amount, donated_amount } = donationDetails;

    const modal = <>
        <button onClick={() => document.getElementById('modal_1').showModal()}>Donate Now</button>

        {open &&
            <dialog id="modal_1" className="modal">

                <form className="bg-white rounded-lg w-[70%] p-10 text-black text-center">

                    <Payment />


                    {/* <div className='flex max-md:flex-col flex-row gap-5'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text  text-black">Amount of Donate </span>
                            </label>
                            <input
                                type="text"
                                name="amount"
                                placeholder='Enter your phone'
                                required
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text  text-black">Address </span>
                            </label>
                            <input
                                type="text"
                                name="address"
                                placeholder='Enter your address'
                                required
                                className="input input-bordered w-full" />
                        </div>
                    </div> */}
                    {/* <div className='w-1/2 mx-auto mt-5'>

                        <button type='submit' className='bg-fuchsia-500 w-full rounded-md py-2 mt-2 text-white  transition' >
                            Donate
                        </button>
                    </div> */}

                </form>

            </dialog>

        }
    </>

    return (
        <Container>
            <div className="flex py-10 max-lg:flex-col lg:flex-row items-start gap-5  ">

                <div className="flex-1 mx-5">
                    <img className="w-full" src={pet_image} alt="" />
                    <p className="pt-10">{''}</p>
                </div>
                <div className="flex-1">
                    <div className=" mx-5 space-y-4 ">
                        <h3 className="text-5xl font-Roboto  font-medium">Pet Name : {pet_name} </h3>


                        <p> <span className="font-bold">Maximum Donation Amout : </span>{maximum_donation_amount}</p>
                        <p> <span className="font-bold">Donated amount : </span>{donated_amount}</p>

                        <p>{'short_description'}</p>
                        {/* <div className="flex items-center gap-8 py-5">
                            <span className="text-4xl"><BiFastForward></BiFastForward></span>
                            <p><span className="text-green-500 font-semibold">Available </span>The Book is available For you</p>
                        </div> */}
                        <div className="flex justify-center items-center gap-2 p-2 rounded-md bg-fuchsia-500 hover:bg-fuchsia-300 font-semibold text-white cursor-pointer"> <SiIconfinder></SiIconfinder> <span>{modal}</span></div>

                    </div>

                </div>

            </div>
            <div className=" space-y-5">
                <p>{'book_content1'}</p>

            </div>

        </Container>
    );
};


export default DonationDetails;