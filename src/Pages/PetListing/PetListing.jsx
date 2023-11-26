import { useEffect, useState } from "react";
import SignlePet from "./SignlePet";
import Container from "../../Components/Shared/Container";

const PetListing = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        fetch('pet.json')
            .then(res => res.json())
            .then(data => setPets(data))
    }, [])


    return (
        <Container>
            <div className="my-10 grid grid-cols-1 md:grid-cols-2, lg:grid-cols-3 gap-10">
                <div className=" border ">


                </div>
                {
                    pets.slice(0,30).map(pet => <SignlePet key={pet.pet_name} pet={pet}></SignlePet>)
                }
            </div>
        </Container>
    );

};


export default PetListing;