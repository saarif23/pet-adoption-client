import Container from "../../Shared/Container";
import Title from "../../Shared/Title";

const CallToAction = () => {
    return (
        <>
            <Title heading={'Call TO Action Section'} subHeading={'When you adopt, not only do you save your loving new companion, but you make space for other animals who desperately need it, creating a domino effect of goodness.'} />
            <div className=" bg-fuchsia-500">
                <Container>
                    <div className="flex flex-col md:flex-row lg:h-[600px] items-center lg:mt-32">
                    <div className="lg:-mt-40">
                        <img className="max-lg:w-[400px]" src="https://i.ibb.co/CVdX5VG/action-Section.png" alt="" />
                    </div>
                    <div className="w-1/2 lg:w-2/5 max-md:w-full">
                        <h5 className="text-4xl text-white font-extrabold py-5 leading-snug">ADOPTING MEANS YOU SAVE A LIFE!</h5>
                        <p className="text-neutral-100 leading-5 font-semibold"> When you adopt, not only do you save your loving new companion, but you make space for other animals who desperately need it, creating a domino effect of goodness.</p>
                    </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default CallToAction;