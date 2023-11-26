
import { BiFastForward } from 'react-icons/bi';
// import { MdFavorite } from 'react-icons/md';
import { SiIconfinder } from 'react-icons/si';
import Container from '../../Components/Shared/Container';
import Modal from '../../Components/Shared/Modal';



const PetDetails = () => {
  
    return (
        <Container>
            <div className="flex py-10 max-lg:flex-col lg:flex-row items-start gap-5  ">

                <div className="flex-1 mx-5">
                    <img className="w-full" src="https://i.ibb.co/ZXDg9BK/rabbits6.jpg" alt="" />
                    <p className="pt-10">{''}</p>
                </div>
                <div className="flex-1">
                    <div className=" mx-5 space-y-4 ">
                        <h3 className="text-5xl font-Roboto  font-medium">Flopsy </h3>
                        <p> <span className="font-bold">Author Name : </span>{'author_name'}</p>
                        <p> <span className="font-bold">Book Type : </span>{'book_category'}</p>
                        <p> <span className="font-bold">Published Date : </span>{'published_date'}</p>
                        <p> <span className="font-bold">Published : </span>{'publisher'}</p>

                        <p>{'short_description'}</p>
                        <div className="flex items-center gap-8 py-5">
                            <span className="text-4xl"><BiFastForward></BiFastForward></span>
                            <p><span className="text-green-500 font-semibold">Available </span>The Book is available For you</p>
                        </div>
                        <div className="flex justify-center items-center gap-2 p-2 rounded-md bg-slate-100 hover:bg-slate-300 border cursor-pointer"> <SiIconfinder></SiIconfinder> <span>{Modal()}</span></div>

                    </div>

                </div>

            </div>
            <div className=" space-y-5">
                <p>{'book_content1'}</p>

            </div>

        </Container>
    );
};


export default PetDetails;