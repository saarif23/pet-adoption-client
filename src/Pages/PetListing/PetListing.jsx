
import SignlePet from "./SignlePet";
import Container from "../../Components/Shared/Container";
import usePets from "../../Hooks/usePets";
import Loading from "../../Components/Shared/Loading";
import Button from "../../Components/Shared/Button";

const PetListing = () => {
    const [pets, isPending, refetch] = usePets();
   

    // if (isPending) {
    //     return <Loading />
    // }
    return (
        <Container>
            <div className="my-10 grid grid-cols-1 md:grid-cols-2, lg:grid-cols-3 gap-10">
                <div className=" border pb-8 bg-center bg-cover bg-black bg-blend-overlay bg-opacity-30 pl-10 pt-20" style={{ backgroundImage: 'url("https://i.ibb.co/61fQkSd/samoyed-dog.jpg")' }}>
                    <p className=" border-l-2 pl-5 text-xl border-fuchsia-600  text-fuchsia-500 font-bold mt-10">Adoption</p>
                    <h3 className="text-5xl py-10  text-white font-extrabold">Available for Adoption</h3>
                    <Button btn_text={"See more "} />
                </div>
                {
                    pets.map(pet => <SignlePet key={pet.pet_name} pet={pet}></SignlePet>)
                }
            </div>
        </Container>
    );

};


export default PetListing;