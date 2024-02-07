import { BsArrowBarRight } from "react-icons/bs";
import animation from "../../../../public/animation1.json";
import Container from "../../Shared/Container";
import Lottie from "lottie-react";

const AdoptMessage = () => {
  return (
    <div className="bg-gray-50">
      <Container>
        <div className="rounded-xl flex flex-col lg:flex-row-reverse items-center max-md:px-5 ">
          <div className="flex-1 space-y-5 text-left  max-lg:text-center text-black">
            <p className="text-4xl lg:text-5xl text-[#279c46] font-extrabold leading-snug">
              ADOPTING MEANS
              <span className="text-black"> YOU SAVE A LIFE!</span>
            </p>
            <h3 className="max-md:text-base text-gray-500 text-justify max-w-sm font-Roboto">
              When a family buys a dog from a pet store, it’s almost certainly a
              puppy mill dog. When you adopt, you’re saying no to an awful
              practice and keeping money out of their pockets.
            </h3>
            <p className="flex max-lg:justify-center items-center gap-2 text-black font-bold">
              Adoption change a life <BsArrowBarRight></BsArrowBarRight>
            </p>
          </div>
          <div className="relative flex-1 ">
            <Lottie
              animationData={animation}
              style={{
                width: 400,
                height: 500,
              }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AdoptMessage;
