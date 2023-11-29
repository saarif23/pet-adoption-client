
import { SiIconfinder } from 'react-icons/si';
import Container from '../../Components/Shared/Container';
import Payment from './Payment/Payment';
import { useLoaderData, } from 'react-router-dom';



const DonationDetails = () => {
    const campaignsData = useLoaderData();
    console.log(campaignsData);

    const { status, pet_name, pet_image, maximum_donation_amount, short_description,long_description, lastDate, createdAt, donated_amount } = campaignsData;

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
            <div className="py-10 ">

                <div className="w-full">
                    <img className="w-full h-[600px]" src={pet_image} alt="" />
                    <p className="pt-10">{''}</p>
                </div>
                <div className="">
                    <div className=" mx-5 space-y-2 ">
                        <h3 className="text-5xl text-center pb-3 font-medium">Donation Campaign for : {pet_name} </h3>

                        <div className='flex flex-col lg:flex-row justify-between'>
                            <div className='  shadow p-5 space-y-3 '>
                                <p> <span className="font-bold text-fuchsia-500">Maximum Donation Amout :</span> $  {maximum_donation_amount}</p>
                                <p> <span className="font-bold text-fuchsia-500">Donated amount : $ </span>{donated_amount}</p>
                            </div>
                            <div className='p-5 space-y-3'>
                                <p> <span className="font-bold text-fuchsia-500">Start Campaign Date : </span>{createdAt}</p>
                                <p> <span className="font-bold">Last Date of Donation :  </span>{lastDate && lastDate}</p>
                            </div>

                        </div>
                        <p className='py-5'>{short_description && short_description}</p>
                        {/* <div className="flex items-center gap-8 py-5">
                            <span className="text-4xl"><BiFastForward></BiFastForward></span>
                            <p><span className="text-green-500 font-semibold">Available </span>The Book is available For you</p>
                        </div> */}
                        {
                            status === true ? <div className="flex justify-center items-center gap-2 p-2 rounded-md bg-fuchsia-500 hover:bg-fuchsia-300 font-semibold text-white cursor-pointer"> <SiIconfinder></SiIconfinder> <span>{modal}</span></div>
                                :
                                <button disabled className=" gap-2 p-2 w-full rounded-md bg-gray-300  font-semibold text-white cursor-pointer"> <span> Pause</span></button>
                        }

                    </div>

                </div>

            </div>
            <div className=" space-y-5 p-5  mb-20">
                <p>{long_description && long_description}</p>

            </div>

        </Container>
    );
};


export default DonationDetails;