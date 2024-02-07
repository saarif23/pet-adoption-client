/* eslint-disable react/no-unescaped-entities */
import Button from "../../Shared/Button";
import Container from "../../Shared/Container";
import animation from "../../../../public/animation2.json";
import Lottie from "lottie-react";
const PetCare = () => {
  return (
    <div className="bg-gray-50">
      <Container>
        <div className="rounded-xl flex flex-col lg:flex-row items-center justify-center max-md:px-5 ">
          <div className="flex-1 space-y-2 text-center lg:text-left ">
            <h3 className=" text-4xl text-center lg:text-left lg:text-5xl py-5 font-Playfair text-[#279c46] font-extrabold ">
              Caring for your pets
            </h3>
            <p className="text-gray-500">
              Fun and Engaging Ways to Keep Your Pet Active and Happy{" "}
            </p>
            <p className="text-gray-500">
              Regular vet check-ups, vaccinations, and preventative care to
              maintain your pet's health.
            </p>
            <p className="pb-5 text-gray-500">
              Providing balanced and suitable food according to your pet's
              dietary needs, ensuring they receive proper nutrients.
            </p>
            <div>
              <Button btn_text={"Show Details"} />
            </div>
          </div>
          <div>
            <Lottie
              animationData={animation}
              style={{ width: 700, height: 500 }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PetCare;
