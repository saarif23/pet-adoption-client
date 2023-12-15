import { useFormik } from 'formik';
import { imageUpload } from '../../../Api/utils';
import Title from '../../../Components/Shared/Title';
import * as yup from 'yup';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const CreateDonationCampaign = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const formik = useFormik({
        initialValues: {
            petName: '',
            petAge: '',
            maxAmount: '',
            lastDate: NaN,
            shortdes: '',
            longDes: '',
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
                    lastDate: values.lastDate,
                    pet_image: imageData.data.display_url,
                    maximum_donation_amount: values.maxAmount,
                    donated_amount: 0,
                    short_description: values.shortdes,
                    long_description: values.longDes,
                    email: user.email,
                    status: true
                }
                // console.log(campaignData);
                axiosSecure.post('/donationCampaigns', campaignData)
                    .then(res => {
                        if (res?.status === 201) {
                            toast.success("New Campaign Started Successfully")
                            formik.resetForm();
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
            <Title heading={"Create Donation Campaign"} />
            <form onSubmit={formik.handleSubmit} >
                <div className='flex flex-col md:flex-row md:gap-10  items-baseline mb-5'>
                    <div className='flex-1 w-full'>
                        <label htmlFor="petName" className='text-neutral-600 font-semibold pl-2'>Pet Name</label>
                        <input
                            className='w-full focus:outline-blue-600 bg-white focus:shadow-lg focus:outline-2  p-2  rounded-md my-2'
                            id="petName"
                            name="petName"
                            type="text"
                            placeholder='Enter Pet Name here..'
                            onChange={formik.handleChange}
                            value={formik.values.petName}
                        />
                        {formik.touched.petName && formik.errors.petName && <span className='text-sm text-red-600 pl-5'>{formik.errors.petName}</span>}
                    </div>
                    <div className='flex-1 w-full'>
                        <label htmlFor="petName" className='text-neutral-600 font-semibold pl-2'>Pet Age</label>
                        <input
                            className='w-full focus:outline-blue-600 bg-white focus:shadow-lg focus:outline-2  p-2 rounded-md my-2'
                            id="petAge"
                            name="petAge"
                            type="text"
                            placeholder='Enter Pet Name here..'
                            onChange={formik.handleChange}
                            value={formik.values.petAge}
                        />
                        {formik.touched.petAge && formik.errors.petAge && <span className='text-sm text-red-600 '>{formik.errors.petAge}</span>}
                    </div>
                </div>
                {/* max donation and last date of doantion */}
                <div className='flex flex-col md:flex-row md:gap-10 items-baseline mb-5'>
                    <div className='flex-1 w-full'>
                        <label htmlFor="maxAmount" className='text-neutral-600 max-md:text-sm font-semibold pl-2'>Maximum Donation Amout</label>
                        <input
                            className='w-full focus:outline-blue-600 bg-white focus:shadow-lg focus:outline-2  p-2  rounded-md my-2'
                            id="maxAmount"
                            name="maxAmount"
                            type="text"
                            placeholder='Enter amount ..'
                            onChange={formik.handleChange}
                            value={formik.values.maxAmount}
                        />
                        {formik.touched.maxAmount && formik.errors.maxAmount && <span className='text-sm text-red-600 pl-5'>{formik.errors.maxAmount}</span>}
                    </div>
                    <div className='flex-1 w-full '>
                        <label htmlFor="date" className='text-neutral-600 font-semibold pl-2'>Donation Last Date</label>
                        <input
                            className='w-full focus:outline-blue-600 bg-white focus:shadow-lg focus:outline-2  p-2 rounded-md my-2'
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
                    <div className='flex-1 w-full '>
                        <label htmlFor="petName" className='text-neutral-600 font-semibold pl-2'>Short Description</label>
                        <input
                            className='w-full focus:outline-blue-600 bg-white focus:shadow-lg focus:outline-2  p-2  rounded-md my-2'
                            id="shortdes"
                            name="shortdes"
                            type="text"
                            placeholder='Short Description type here '
                            onChange={formik.handleChange}
                            value={formik.values.shortdes}
                        />
                        {formik.touched.shortdes && formik.errors.shortdes && <span className='text-sm text-red-600 pl-5'>{formik.errors.shortdes}</span>}
                    </div>
                    <div className='flex-1 w-full'>
                        <label htmlFor="petImage" className='text-neutral-600 font-semibold pl-2'>Pet Image</label>
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
                    <label htmlFor="petName" className='text-neutral-600 font-semibold pl-2'>Long Description</label>
                    <textarea
                        className='w-full focus:outline-blue-600 bg-white focus:shadow-lg focus:outline-2  p-2  rounded-md my-2'
                        id="longDes"
                        name="longDes"
                        type="text"
                        placeholder='Long Description type here '
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

export default CreateDonationCampaign;