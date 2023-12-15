
import { useFormik } from 'formik';

import ReactSelect from 'react-select';
import * as yup from 'yup';

import toast from 'react-hot-toast';
import { useLoaderData, useNavigate, } from 'react-router-dom';
import { imageUpload } from '../../Api/utils';
import Title from '../../Components/Shared/Title';
import useAxiosSecure from '../../Hooks/useAxiosSecure';


const UpdatePet = () => {
    const axiosSecure = useAxiosSecure();
    const pet = useLoaderData();
    console.log(pet);
    const { _id, pet_name, pet_age, pet_category, pet_location, short_description, long_description } = pet;
    const navigate = useNavigate();

    const options = [
        { value: 'Dog', label: 'Dog' },
        { value: 'Cat', label: 'Cat' },
        { value: 'Bird', label: 'Bird' },
        { value: 'Fish', label: 'Fish' },
        { value: 'Reptile', label: 'Reptile' },
        { value: 'Small_Mammal', label: 'Small_Mammal' },
        { value: 'Horse', label: 'Horse' },
        { value: 'Exotic_Pet', label: 'Exotic_Pet' },
        { value: 'Farm_Animal', label: 'Farm_Animal' },
        { value: 'Insect', label: 'Insect' },
        { value: 'Rabbit', label: 'Rabbit' },
    ];



    const formik = useFormik({
        initialValues: {
            petName: pet_name,
            petAge: pet_age,
            petLocation: pet_location,
            category: pet_category,
            shortdes: short_description,
            longDes: long_description,
            petImage: null,

        },
        validationSchema: yup.object({
            petName: yup.string().min(3, "pet name have must atleast 3 characters").required(),
            petAge: yup.number().required(),
            petLocation: yup.string().required(),
            category: yup.object().required(),
            shortdes: yup.string().min(10, "short description have must atleast 10 characters").required(),
            longDes: yup.string().min(50, "long descripton  have must atleast 50 characters").required(),
            petImage: yup.string().required(),
        }),
        onSubmit: async values => {
            const category = values.category.value
            const image = values.petImage;
            try {
                /// upload the image 
                const imageData = await imageUpload(image);
                // console.log(imageData);

                const petData = {
                    pet_name: values.petName,
                    pet_age: values.petAge,
                    pet_image: imageData.data.display_url,
                    pet_location: values.petLocation,
                    pet_category: category,
                    short_description: values.shortdes,
                    long_description: values.longDes,
                    adopted: false
                }
                console.log(petData);
                axiosSecure.put(`/userAddedPet/${_id}`, petData)
                    .then(res => {
                        console.log(res);
                        toast.success("Pet update successfully")
                        formik.resetForm();
                        navigate("/dashboard/myAddedPets")

                    })
                    .catch(error => {
                        toast.error(error.message)
                    })


            } catch (error) {
                console.log(error);
            }
        },
    });


    const handleCategoryChange = selectedOption => {
        formik.setFieldValue('category', selectedOption);
    };


    return (
        <div className='mb-10'>
            <Title heading={"Update A  Pat"} />
            <form onSubmit={formik.handleSubmit} >
                <div className='flex flex-col md:flex-row md:gap-10 items-baseline mb-5'>
                    <div className='flex-1 w-full'>
                        <label htmlFor="petName" className='text-neutral-600 font-semibold pl-2'>Pet Name</label>
                        <input
                            className='w-full focus:outline-blue-600 bg-white  focus:shadow-lg focus:outline-2  p-2  rounded-md my-2'
                            id="petName"
                            name="petName"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.petName}

                        />
                        {formik.touched.petName && formik.errors.petName && <span className='text-sm text-red-600 pl-5'>{formik.errors.petName}</span>}
                    </div>
                    <div className='flex-1 w-full'>
                        <label htmlFor="petName" className='text-neutral-600 font-semibold pl-2'>Pet Age</label>
                        <input
                            className='w-full focus:outline-blue-600 bg-white  focus:shadow-lg focus:outline-2  p-2 rounded-md my-2'
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
                {/* category and location */}
                <div className='flex flex-col md:flex-row md:gap-10 items-center  mb-5'>
                    <div className='flex-1 w-full'>
                        <label htmlFor="petName" className='text-neutral-600 font-semibold pl-2'>Pet Location</label>
                        <input
                            className='w-full focus:outline-blue-600 bg-white  focus:shadow-lg focus:outline-2  p-2  rounded-md my-2'
                            id="petLocation"
                            name="petLocation"
                            type="text"
                            placeholder='Enter Pet Name here..'
                            onChange={formik.handleChange}
                            value={formik.values.petLocation}
                        />
                        {formik.touched.petLocation && formik.errors.petLocation && <span className='text-sm text-red-600 pl-5'>{formik.errors.petLocation}</span>}
                    </div>
                    <div className='flex-1  w-full'>
                        <label htmlFor="petName" className='text-neutral-600 font-semibold pl-2'>Pet Category</label>
                        <ReactSelect
                            options={options}
                            className='w-full focus:outline-blue-600 bg-white  focus:shadow-lg focus:outline-2    rounded-md my-2'
                            name='category'
                            placeholder="Select a category"
                            value={formik.values.category}
                            onChange={handleCategoryChange}
                        />
                        {formik.touched.category && formik.errors.category && <span className='text-sm text-red-600 pl-5'>{formik.errors.category}</span>}

                    </div>


                </div>
                {/* short des and image */}
                <div className='flex  flex-col md:flex-row md:gap-10 items-center  mb-5'>
                    <div className='flex-1  w-full '>
                        <label htmlFor="petName" className='text-neutral-600 font-semibold pl-2'>Short Description</label>
                        <input
                            className='w-full focus:outline-blue-600 bg-white  focus:shadow-lg focus:outline-2  p-2  rounded-md my-2'
                            id="shortdes"
                            name="shortdes"
                            type="text"
                            placeholder='Short Description type here '
                            onChange={formik.handleChange}
                            value={formik.values.shortdes}
                        />
                        {formik.touched.shortdes && formik.errors.shortdes && <span className='text-sm text-red-600 pl-5'>{formik.errors.shortdes}</span>}
                    </div>
                    <div className='flex-1  w-full'>
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
                        className='w-full focus:outline-blue-600 bg-white  focus:shadow-lg focus:outline-2  p-2  rounded-md my-2'
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
                    Submit
                </button>
            </form>
        </div>
    );
};

export default UpdatePet;
