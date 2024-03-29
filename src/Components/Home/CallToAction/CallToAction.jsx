import Button from "../../Shared/Button";
import Container from "../../Shared/Container";
// import actionSectionimg from "../../../assets/pet.png";

import animationData from "../../../../public/CallToAction2.json";
import Lottie from "lottie-react";

const CallToAction = () => {
  return (
    <>
      <div className=" bg-gradient-to-r from-white to-gray-50">
        <Container>
          <div className="flex flex-col-reverse md:flex-row gap-16 lg:h-[600px] max-md:pb-5 items-center">
            <div className=" flex-1">
             
              <Lottie animationData={animationData} />
            </div>
            <div className="flex-1 line-clamp-16 max-md:w-full max-md:text-center ">
              <h5
              style={{
                lineHeight: "1.3",
              }}
              className=" text-3xl lg:text-5xl text-[#279c46] font-extrabold py-5 leading-snug">
                ADOPTING MEANS <br />
                <span className="text-black">YOU SAVE A LIFE</span> !
              </h5>
              <p className="text-gray-500 text-justify w-full md:w-2/3 max-md:mx-auto">
                When you adopt, not only do you save your loving new companion,
                but you make space for other animals who desperately need it,
                creating a domino effect of goodness.
              </p>
              <div className="mt-5 max-md:flex max-md:justify-center">
                <Button btn_text={"Start the Domino Effect"}></Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CallToAction;
