// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import animation1 from "../../../../public/CallToAction.json";
import { AiOutlineDollarCircle } from "react-icons/ai";

import Lottie from "lottie-react";
import Container from "../../Shared/Container";
import Button from "../../Shared/Button";
import { FaPlayCircle } from "react-icons/fa";
const Slider = () => {
  return (
    // <Swiper
    //   effect={"fade"}
    //   pagination={true}
    //   autoplay={{ delay: 2000 }}
    //   modules={[EffectFade, Pagination, Autoplay]}
    //   className="mySwiper"
    // >
    //   <SwiperSlide>
    //     <img className="w-full h-[500px]" src={sliderimg24} alt="slider4" />
    //   </SwiperSlide>
    // </Swiper>
    <Container>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center">
        <div className="flex-1 space-y-5">
          <h5
            style={{
              lineHeight: "1.3",
            }}
            className=" text-4xl text-center lg:text-left lg:text-5xl text-black font-extrabold uppercase "
          >
            Find Your Perfect Companion
            <span className="text-[#279c46]"> Today </span> !
          </h5>
          <p className="text-gray-500 text-center lg:text-justify w-full md:w-2/3 max-md:mx-auto">
            When you adopt, not only do you save your loving new companion, but
            you make space for other animals who desperately need it, creating a
            domino effect of goodness.
          </p>
          <div className="flex gap-5 pt-5">
            <Button btn_text={"Adopt Now !"}>
              
            </Button>
            <div className="flex items-center gap-3 rounded-full cursor-pointer hover:animate-pulse py-2 px-5 font-bold text-lg border border-[#279c46] hover:bg-[#279c46] hover:text-white">
              <AiOutlineDollarCircle size={24} /> <span>Donate Now </span>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Lottie animationData={animation1} className="h-[500px]" />
        </div>
      </div>
    </Container>
  );
};

export default Slider;
