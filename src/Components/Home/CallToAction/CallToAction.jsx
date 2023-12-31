import Button from "../../Shared/Button";
import Container from "../../Shared/Container";
import actionSectionimg from '../../../assets/actionSection.png'

const CallToAction = () => {
    return (
        <>
            <div className="">
                <Container>
                    <div className="flex flex-col md:flex-row gap-16 lg:h-[600px] max-md:pb-5 items-center">
                        <div
                           data-aos="fade-up-right"
                           data-aos-delay="100"
                           data-aos-duration="1000"
                            className=" flex-1">
                            <img className="w-[400px] " src={actionSectionimg} alt="" />
                        </div>
                        <div
                          data-aos="fade-up-left"
                          data-aos-delay="100"
                          data-aos-duration="1000"
                        className="flex-1 line-clamp-16 max-md:w-full max-md:text-center ">
                            <h5 className="text-5xl  font-extrabold py-5 leading-snug">ADOPTING MEANS  <br /> <span className="text-orange-400  font-extrabold"> YOU SAVE A LIFE</span>!</h5>
                            <p className="leading-5 font-semibold"> When you adopt, not only do you save <br /> your loving new companion, but you <br /> make space for other animals <br /> who desperately need it, <br /> creating a domino effect of goodness.</p>
                            <div className="mt-5 max-md:flex max-md:justify-center">
                                <Button btn_text={"You interest ! "}></Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default CallToAction;