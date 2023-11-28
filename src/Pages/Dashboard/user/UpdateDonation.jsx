import { useFormik } from 'formik';
import { imageUpload } from '../../../Api/utils';
import Title from '../../../Components/Shared/Title';
import * as yup from 'yup';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateDonation = () => {
    const donation = useLoaderData();
    const { _id, pet_name, pet_age, maximum_donation_amount, short_description, long_description } = donation;
    const navigate = useNavigate();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const formik = useFormik({
        initialValues: {
            petName: pet_name,
            petAge: pet_age,
            maxAmount: maximum_donation_amount,
            lastDate: NaN,
            shortdes: short_description,
            longDes: long_description,
            petImage: null,

        },
        validationSchema: yup.object({
            petName: yup.string().min(3, "pet name have must atleast 3 characters").required(),
            petAge: yup.number().required(),
            maxAmount: yup.number().min(2, "Max Donation have must atleast 2 numbers").required(),
            lastDate: yup.date().required(),
            shortdes: yup.string().min(10, "short description have must atleast 10 characters").required(),
            longDes: yup.string().min(50, "long descripton  have must atleast 50 characters").required(),
            petImage: yup.string().required(),
        }),

        onSubmit: async values => {
            // console.log(values.maxAmount);
            // console.log(values.lastDate);
            // console.log(values.shortdes);
            // console.log(values.longDes);
            // select the image
            const image = values.petImage;

            try {
                /// upload the image 
                const imageData = await imageUpload(image);


                const campaignData = {
                    pet_name: values.petName,
                    pet_age: values.petAge,
                    lastDate: NaN,
                    pet_image: imageData.data.display_url,
                    maximum_donation_amount: values.maxAmount,
                    donated_amount: 0,
                    short_description: values.shortdes,
                    long_description: values.longDes,
                    email: user.email
                }

                console.log(campaignData);
                axiosSecure.put(`/userAddedDonations/${_id}`, campaignData) // put(`/userAddedPet/${_id}`, petData)

                    .then(res => {
                        if (res?.status === 200 && res?.statusText === 'OK') {
                            toast.success("New Campaign Started Successfully")
                            formik.resetForm();
                            navigate('/dashboard/myDonationCampaign')
                        }

                    })
                    .catch(error => {
                        toast.error(error.message)
                    })


            } catch (error) {
                console.log(error);
            }
        },
    });




    return (
        <div className='mb-10'>
            <Title heading={"Update Donation Campaign"} />
            <form onSubmit={formik.handleSubmit} >
                <div className='flex  gap-10 items-baseline mb-5'>
                    <div className='flex-1'>
                        <label htmlFor="petName" className='text-neutral-400 font-semibold pl-2'>Pet Name</label>
                        <input
                            className='w-full focus:outline-blue-600  focus:shadow-lg focus:outline-2  p-2  rounded-md my-2'
                            id="petName"
                            name="petName"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.petName}
                        />
                        {formik.touched.petName && formik.errors.petName && <span className='text-sm text-red-600 pl-5'>{formik.errors.petName}</span>}
                    </div>
                    <div className='flex-1 '>
                        <label htmlFor="petName" className='text-neutral-400 font-semibold pl-2'>Pet Age</label>
                        <input
                            className='w-full focus:outline-blue-600  focus:shadow-lg focus:outline-2  p-2 rounded-md my-2'
                            id="petAge"
                            name="petAge"
                            type="text"

                            onChange={formik.handleChange}
                            value={formik.values.petAge}
                        />
                        {formik.touched.petAge && formik.errors.petAge && <span className='text-sm text-red-600 '>{formik.errors.petAge}</span>}
                    </div>
                </div>
                {/* max donation and last date of doantion */}
                <div className='flex flex-col md:flex-row md:gap-10 items-baseline mb-5'>
                    <div className='flex-1'>
                        <label htmlFor="maxAmount" className='text-neutral-400 font-semibold pl-2'>Maximum Donation Amout</label>
                        <input
                            className='w-full focus:outline-blue-600  focus:shadow-lg focus:outline-2  p-2  rounded-md my-2'
                            id="maxAmount"
                            name="maxAmount"
                            type="text"

                            onChange={formik.handleChange}
                            value={formik.values.maxAmount}
                        />
                        {formik.touched.maxAmount && formik.errors.maxAmount && <span className='text-sm text-red-600 pl-5'>{formik.errors.maxAmount}</span>}
                    </div>
                    <div className='flex-1 '>
                        <label htmlFor="date" className='text-neutral-400 font-semibold pl-2'>Donation Last Date</label>
                        <input
                            className='w-full focus:outline-blue-600  focus:shadow-lg focus:outline-2  p-2 rounded-md my-2'
                            id="lastDate"
                            name="lastDate"
                            type="date"
                            onChange={formik.handleChange}
                            value={formik.values.lastDate}
                        />
                        {formik.touched.lastDate && formik.errors.lastDate && <span className='text-sm text-red-600 '>{formik.errors.lastDate}</span>}
                    </div>
                </div>

                {/* short des and image */}
                <div className='flex  flex-col md:flex-row md:gap-10  items-center  mb-5'>
                    <div className='flex-1 '>
                        <label htmlFor="petName" className='text-neutral-400 font-semibold pl-2'>Short Description</label>
                        <input
                            className='w-full focus:outline-blue-600  focus:shadow-lg focus:outline-2  p-2  rounded-md my-2'
                            id="shortdes"
                            name="shortdes"
                            type="text"

                            onChange={formik.handleChange}
                            value={formik.values.shortdes}
                        />
                        {formik.touched.shortdes && formik.errors.shortdes && <span className='text-sm text-red-600 pl-5'>{formik.errors.shortdes}</span>}
                    </div>
                    <div className='flex-1 '>
                        <label htmlFor="petImage" className='text-neutral-400 font-semibold pl-2'>Pet Image</label>
                        <input
                            className='w-full  my-2'
                            id="petImage"
                            name="petImage"
                            type="file"
                            onChange={(event) => {
                                formik.setFieldValue('petImage', event.currentTarget.files[0]);
                            }}
                        />
                        {formik.touched.petImage && formik.errors.petImage && <span className='text-sm text-red-600 pl-5'>{formik.errors.petImage}</span>}
                    </div>
                </div>
                <div className=''>
                    <label htmlFor="petName" className='text-neutral-400 font-semibold pl-2'>Long Description</label>
                    <textarea
                        className='w-full focus:outline-blue-600  focus:shadow-lg focus:outline-2  p-2  rounded-md my-2'
                        id="longDes"
                        name="longDes"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.longDes}
                    />
                    {formik.touched.longDes && formik.errors.longDes && <span className='text-sm text-red-600 pl-5'>{formik.errors.longDes}</span>}
                </div>

                <button
                    type="submit"
                    className='bg-fuchsia-500 rounded cursor-pointer hover:bg-fuchsia-700  py-2 px-5 w-full text-white font-bold text-lg'
                >
                    Create Now
                </button>
            </form>
        </div>
    );
};

export default UpdateDonation;