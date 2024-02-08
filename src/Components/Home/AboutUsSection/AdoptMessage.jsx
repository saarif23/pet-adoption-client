import animationData from "../../../../public/animation1.json";
import Container from "../../Shared/Container";
import Lottie from "lottie-react";
import Button from "../../Shared/Button";

const AdoptMessage = () => {
  return (
    <div className=" bg-gradient-to-r from-white to-gray-50">
      <Container>
        <div className="flex flex-col-reverse md:flex-row-reverse gap-16 lg:h-[600px] max-md:pb-5 items-center">
          <div className="flex-1">
            <Lottie animationData={animationData} />
          </div>
          <div className="flex-1 line-clamp-16 max-md:w-full max-md:text-center ">
            <h5 className="text-5xl text-[#279c46] font-extrabold py-5 leading-snug uppercase">
              Nurturing Your 
            <span className="text-black"> Furry  Friends </span>!
            </h5>
            <p className="text-gray-500 text-justify w-full md:w-2/3 max-md:mx-auto">
              Explore Ways to Keep Your Pets Thriving and Joyful When you adopt,
              not only do you save your loving new companion, but you make space
              for other animals who desperately need it, creating a domino
              effect of goodness.
            </p>
            <div className="mt-5 max-md:flex max-md:justify-center">
              <Button btn_text={"Discover More"}></Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AdoptMessage;
