
import { useFormik } from 'formik';
import { imageUpload } from '../../../Api/utils';
import Title from '../../../Components/Shared/Title';
import CreatableSelect from 'react-select/creatable';
import { useState } from 'react';


const AddPet = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];
    const formik = useFormik({
        initialValues: {
            petName: '',
            petAge: '',
            petLocation: '',
            category: '',
            petImage: null,
           
        },
        onSubmit: async values => {
            console.log(values.petName);
            console.log(values.petAge);
            console.log(values.petLocation);
            console.log(values.category);

            // select the image
            const image = values.petImage;

            try {
                /// upload the image 
                const imageData = await imageUpload(image);
                console.log(imageData);
            } catch (error) {
                console.log(error);
            }
        },
    });

    return (
        <>
            <Title heading={"Add A New Pat"} />
            <form onSubmit={formik.handleSubmit} >
                <div className='flex  gap-10 items-baseline'>
                    <div className='flex-1'>
                        <label htmlFor="petName" className='text-neutral-400 font-semibold pl-2'>Pet Name</label>
                        <input
                            className='w-full focus:outline-fuchsia-200  focus:shadow-lg focus:outline-2  p-2  rounded-md my-2'
                            id="petName"
                            name="petName"
                            type="text"
                            placeholder='Enter Pet Name here..'
                            onChange={formik.handleChange}
                            value={formik.values.petName}
                        />
                    </div>
                    <div className='flex-1 '>
                        <label htmlFor="petName" className='text-neutral-400 font-semibold pl-2'>Pet Age</label>
                        <input
                            className='w-full focus:outline-fuchsia-200  focus:shadow-lg focus:outline-2  p-2 rounded-md my-2'
                            id="petAge"
                            name="petAge"
                            type="text"
                            placeholder='Enter Pet Name here..'
                            onChange={formik.handleChange}
                            value={formik.values.petAge}
                        />
                    </div>
                </div>
                {/* category and address */}
                <div className='flex  gap-10 items-baseline'>
                    <div className='flex-1'>
                        <label htmlFor="petName" className='text-neutral-400 font-semibold pl-2'>Pet Location</label>
                        <input
                            className='w-full focus:outline-fuchsia-200  focus:shadow-lg focus:outline-2  p-2  rounded-md my-2'
                            id="petLocation"
                            name="petLocation"
                            type="text"
                            placeholder='Enter Pet Name here..'
                            onChange={formik.handleChange}
                            value={formik.values.petLocation}
                        />
                    </div>
                    <div>
                        <CreatableSelect
                            isClearable
                            id="category"
                            name="category"
                            type="text"
                            options={options}
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            value={formik.values.category}
                        />
                    </div>


                </div>
                <div className='w-full '>
                    <label htmlFor="petImage" className='text-neutral-400 font-semibold pl-2'>Pet Image</label>
                    <input
                        className='w-full  i my-2'
                        id="petImage"
                        name="petImage"
                        type="file"
                        onChange={(event) => {
                            formik.setFieldValue('petImage', event.currentTarget.files[0]);
                        }}
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default AddPet;
