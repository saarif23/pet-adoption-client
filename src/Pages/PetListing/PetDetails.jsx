
import { BiFastForward } from 'react-icons/bi';
// import { MdFavorite } from 'react-icons/md';
import { SiIconfinder } from 'react-icons/si';
import Container from '../../Components/Shared/Container';
import { useLoaderData } from 'react-router-dom';
// import usePets from '../../Hooks/usePets';
import Modal from './Modal';




const PetDetails = () => {
    // const { id } = useParams();
    // const [pets, isPending] = usePets();
    const data = useLoaderData();


    // const petDetails = pets.find(item => item._id === id);
    const { _id, pet_name, pet_image, pet_age, pet_location, pet_category, short_description, long_description } = data;

    return (
        <Container>
            <div className="flex py-10 max-lg:flex-col lg:flex-row items-start gap-5  ">

                <div className="flex-[3] mx-5">
                    <img className="w-full h-[500px]" src={pet_image} alt="" />
                </div>
                <div className="flex-[2] mt-10">
                    <div className=" mx-5 space-y-4 ">
                        <h3 className="text-4xl font-Roboto pb-5  font-medium">Pet Name : {pet_name} </h3>
                        <p> <span className="font-bold">Pet Category :  </span>{pet_category}</p>
                        <p> <span className="font-bold">Pet Age : </span>{pet_age} years</p>
                        <p> <span className="font-bold">Pet Location : </span>{pet_location}</p>
                        <p><span className='font-bold'>About {pet_name}  : </span> {short_description}</p>
                        <div className="flex items-center gap-8 py-5">
                            <span className="text-4xl"><BiFastForward></BiFastForward></span>
                            <p><span className="text-green-500 font-semibold">Available </span>The Pet is available For you if you interest in Adopt</p>
                        </div>
                        <div className="flex justify-center items-center gap-2 p-2 rounded-md bg-fuchsia-500 hover:bg-fuchsia-300 border text-white font-semibold cursor-pointer"> <SiIconfinder></SiIconfinder> <span>{Modal(_id)}</span></div>

                    </div>

                </div>

            </div>
            <div className='p-5 mb-10'>
                <p><span className='text-green-500 font-semibold'>Details About {pet_name} : </span>{long_description}</p>

            </div>

        </Container>
    );
};


export default PetDetails;