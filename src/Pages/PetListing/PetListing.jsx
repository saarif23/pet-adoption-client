
import SignlePet from "./SignlePet";
import Container from "../../Components/Shared/Container";
import Button from "../../Components/Shared/Button";
import { useFormik } from "formik";
import * as yup from 'yup';
import ReactSelect from "react-select";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import usePets from "../../Hooks/usePets";
import { axiosPublic } from "../../Hooks/useAxiosPublic";
import Loading from "../../Components/Shared/Loading";

const PetListing = () => {
    const [allLoadedPet, setAllLoadedPets] = useState(null)
    // console.log(allLoadedPet);

    const [pets, isPending, refetch] = usePets();

    useEffect(() => {
        if (pets) {
            setAllLoadedPets(pets);
        }
    }, [pets]);



    //  infinitive scrool code -------------------------------------

    // const PAGE_NUMBER = 1;
    // const [petData, setPetData] = useState([]);
    // const [page, setPage] = useState(PAGE_NUMBER);
    // const [loading, setLoading] = useState(false);
    // const [allPetsLoaded, setAllPetsLoaded] = useState(false);
    // useEffect(() => {
    //     setLoading(true); // Set loading to true when fetching new data
    //     setTimeout(async () => {
    //         const response = await axiosPublic.get(`/pets?per_page=9&page=${page}`);
    //         if (response.data.length === 0) {
    //             setAllPetsLoaded(true);
    //         }
    //         // If it's the first page, set the pet data directly, else append it
    //         setPetData(prev => (page === PAGE_NUMBER ? response.data : [...prev, ...response.data]));
    //         setLoading(false);
    //     }, 5000);
    // }, [page, axiosPublic, PAGE_NUMBER]);


    // useEffect(() => {
    //    window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);


    // const handleScroll = async () => {
    //     if (
    //         window.innerHeight + document.documentElement.scrollTop + 1 >=
    //         document.documentElement.scrollHeight
    //     ) {
    //         setLoading(true);
    //         setPage((prev) => prev + 1);
    //     }
    // };


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
            petName: '',
            category: '',
        },
        validationSchema: yup.object({
            petName: yup.string(),
            category: yup.object()
        }),
        onSubmit: async values => {
            console.log(values.petName);
            const category = values.category.value
            console.log(category);


            try {
                let queryParams = {};

                if (category) {
                    queryParams.pet_category = category;
                }
                if (values.petName) {
                    queryParams.pet_name = values.petName;
                }

                const response = await axiosPublic.get('/search', {
                    params: queryParams,
                });

                if (response.status === 200) {
                    console.log(response.data);
                    formik.resetForm();
                    refetch();
                    setAllLoadedPets(response.data);
                }
            } catch (error) {
                toast.error(error.message);
            }


        },
    });
    const handleCategoryChange = selectedOption => {
        formik.setFieldValue('category', selectedOption);
    };

    if (isPending) {
        return <Loading />
    }
    return (
        <Container>
            <div>
                <form onSubmit={formik.handleSubmit} >
                    <div className='flex  flex-col md:flex-row  mx-auto gap-3 items-center p-2   my-5'>
                        <div className='w-2/5 max-md:w-full'>
                            <input
                                className='w-full focus:outline-blue-600 border-2  py-2 px-2  focus:shadow-lg focus:outline-2   rounded-md '
                                id="petName"
                                name="petName"
                                type="text"
                                placeholder='Enter Name ..'
                                onChange={formik.handleChange}
                                value={formik.values.petName}
                            />
                            {formik.touched.petName && formik.errors.petName && <span className='text-sm text-red-600 pl-5'>{formik.errors.petName}</span>}
                        </div>
                        <div className='w-2/5 max-md:w-full'>
                            <ReactSelect
                                options={options}
                                className='w-full focus:outline-blue-600  focus:shadow-lg focus:outline-2 text-black '
                                name='category'
                                placeholder="Select category"
                                value={formik.values.category}
                                onChange={handleCategoryChange}
                            />
                            {formik.touched.category && formik.errors.category && <span className='text-sm text-red-600 pl-5'>{formik.errors.category}</span>}

                        </div>
                        <div className='1/5'>
                            <button
                                type="submit"
                                className='bg-fuchsia-500 rounded cursor-pointer hover:bg-fuchsia-700  py-2 px-5 w-full text-white font-bold text-lg'
                            >
                                Search
                            </button>
                        </div>

                    </div>

                </form>
                <div className="my-10 grid grid-cols-1 md:grid-cols-2, lg:grid-cols-3 gap-10">

                    <div className=" rounded-md pb-8 bg-center bg-cover bg-black bg-blend-overlay bg-opacity-30 pl-10 pt-20"
                        style={{ backgroundImage: 'url("https://i.ibb.co/61fQkSd/samoyed-dog.jpg")' }}>
                        <p className=" border-l-2 pl-5 text-xl border-fuchsia-600  text-fuchsia-500 font-bold mt-10">Adoption</p>
                        <h3 className="text-5xl py-10  text-white font-extrabold">Available for Adoption</h3>

                        <Button btn_text={"See more "} />


                    </div>
                    {
                        allLoadedPet?.map(pet => <SignlePet key={pet._id} pet={pet}></SignlePet>)
                    }
                </div>
                {/* {loading && <FaSpinner size={24} className="animate-spin text-center" />}
                {allPetsLoaded && <p className="text-center mb-20 text-gray-500">No more pets available</p>} */}
            </div>
        </Container >
    );

};


export default PetListing;