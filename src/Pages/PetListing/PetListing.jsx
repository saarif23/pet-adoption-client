
import SignlePet from "./SignlePet";
import Container from "../../Components/Shared/Container";
import usePets from "../../Hooks/usePets";
import Loading from "../../Components/Shared/Loading";

const PetListing = () => {
    const [pets, isPending, refetch] = usePets();

    if (isPending) {
        return <Loading />
    }
    return (
        <Container>
            <div className="my-10 grid grid-cols-1 md:grid-cols-2, lg:grid-cols-3 gap-10">
                <div className=" border ">


                </div>
                {
                    pets.slice(0, 30).map(pet => <SignlePet key={pet.pet_name} pet={pet}></SignlePet>)
                }
            </div>
        </Container>
    );

};


export default PetListing;