/* eslint-disable react/no-unescaped-entities */
import aboutimg1 from "../../../assets/About/image1.png";
import aboutimg22 from "../../../assets/About/image2.png";
import aboutimg3 from "../../../assets/About/image3.png";
import aboutimg4 from "../../../assets/About/image4.png";
import aboutimg5 from "../../../assets/About/image5.png";
import aboutimg6 from "../../../assets/About/imgae6.png";
import Container from "../../Shared/Container";

const Support = () => {
  return (
    <div className="my-10 ">
      <Container>
        <div className="grid grid-cols-1 font-Playfair md:grid-cols-2 lg:grid-cols-3 gap-10 max-lg:px-5">
          <div
            data-aos="fade-up-right"
            data-aos-delay="80"
            data-aos-duration="1000"
            className="p-5 shadow  hover:shadow-xl hover:animate-ping shadow-white bg-gray-50 text-center rounded-lg"
          >
            <img
              className="mx-auto bg-[#279c46] p-5 rounded-full w-24"
              src={aboutimg1}
              alt=""
            />
            <h5 className="text-2xl py-3 text-[#279c46] font-bold">Grooming</h5>
            <p className="text-base text-gray-600">
              Regular grooming routines such as bathing, brushing, and nail
              trimming to maintain their hygiene and appearance
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1000"
            className="p-5 shadow  hover:shadow-xl hover:animate-ping shadow-white bg-gray-50 text-center rounded-lg"
          >
            <img className="mx-auto bg-[#279c46] p-5 rounded-full w-24" src={aboutimg22} alt="" />
            <h5 className="text-2xl py-3 text-[#279c46] font-bold">
              Pet Adoptions
            </h5>
            <p className="text-base text-neutral-500">
              Evaluations of the pets' behavior, health, and temperament, and
              nail trimming to maintain their hygiene and appearance
            </p>
          </div>
          <div
            data-aos="fade-up-left"
            data-aos-delay="50"
            data-aos-duration="2000"
            className="p-5 shadow  hover:shadow-xl hover:animate-ping shadow-white bg-gray-50 text-center rounded-lg"
          >
            <img className="mx-auto bg-[#279c46] p-5 rounded-full w-24" src={aboutimg3} alt="" />
            <h5 className="text-2xl py-3 text-[#279c46] font-bold">
              Pet Store
            </h5>
            <p className="text-base text-neutral-500">
              {" "}
              Engaging your pets in physical activities and mental challenges to
              keep them active and mentally stimulated
            </p>
          </div>
          <div
            data-aos="fade-up-right"
            data-aos-delay="100"
            data-aos-duration="3000"
            className="p-5 shadow  hover:shadow-xl hover:animate-ping shadow-white bg-gray-50 text-center rounded-lg"
          >
            <img className="mx-auto bg-[#279c46] p-5 rounded-full w-24" src={aboutimg4} alt="" />
            <h5 className="text-2xl py-3 text-[#279c46] font-bold">
              Pet Care
            </h5>
            <p className="text-base text-neutral-500">
              Offering affection, attention, and companionship to build a strong
              bond and cater to their emotional needs
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="2000"
            className="p-5 shadow  hover:shadow-xl hover:animate-ping shadow-white bg-gray-50 text-center rounded-lg"
          >
            <img className="mx-auto bg-[#279c46] p-5 rounded-full w-24" src={aboutimg5} alt="" />
            <h5 className="text-2xl py-3 text-[#279c46] font-bold">
              Pet Training
            </h5>
            <p className="text-base text-neutral-500">
              Teaching basic obedience commands and socializing them with other
              animals and people to ensure good behavior
            </p>
          </div>
          <div
            data-aos="fade-up-left"
            data-aos-delay="100"
            data-aos-duration="3000"
            className="p-5 shadow  hover:shadow-xl hover:animate-ping shadow-white bg-gray-50 text-center rounded-lg"
          >
            <img className="mx-auto bg-[#279c46] p-5 rounded-full w-24" src={aboutimg6} alt="" />
            <h5 className="text-2xl py-3 text-[#279c46] font-bold">
              Stylish Extension
            </h5>
            <p className="text-base text-neutral-500">
              Engaging your pets in physical activities and mental challenges to
              keep them active and mentally stimulated
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Support;
