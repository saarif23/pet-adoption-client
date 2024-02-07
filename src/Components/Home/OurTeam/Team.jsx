import Container from "../../Shared/Container";
import Title from "../../Shared/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { FaFacebookF, FaGoogle, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Team = () => {
  const [teamMember, setTeamMember] = useState([]);
  useEffect(() => {
    fetch("teamData.json")
      .then((res) => res.json())
      .then((data) => setTeamMember(data));
  }, []);
  return (
    <div className="bg-gradient-to-r from-[#fdfdf8] to-[#fffafc] py-10">
      <Container>
        <div>
          <Title
            heading={"Our Team"}
            subHeading={
              "You’ll enjoy knowing our dedicated team will do whatever is needed to keep your pets happy, healthy and safe when you’re away from home."
            }
          />
        </div>

        {/* team member */}
        <Swiper
          className="mySwiper"
          // slidesPerView={6}
          spaceBetween={20}
          autoplay={{
            delay: 1000,
          }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            400: {
              slidesPerView: 1, // Show 2 slides
            },
            // When screen size is >= 640px
            640: {
              slidesPerView: 2, // Show 2 slides
            },

            // When screen size is >= 1024px
            1024: {
              slidesPerView: 3, // Show 6 slides
            },
          }}
        >
          {teamMember.map((person) => (
            <SwiperSlide key={person.id}>
              <div className="text-center border-animate shadow-md text-black p-5 ">
                <img
                  className="bg-neutral-50 border border-[#279c46] w-[150px] mx-auto rounded-full "
                  src={person.image}
                  alt="team mamber image"
                />
                <p className="text-2xl text-[#279c46] font-bold py-2">
                  {person.name}
                </p>
                <p className=" font-semibold ">{person.title}</p>
                <p className="min-h-[80px] pt-3">{person.short_message}</p>
                <div className="flex gap-8 pt-4 cursor-pointer justify-center">
                  <FaFacebookF />
                  <FaTwitter />
                  <FaGoogle />
                  <FaLinkedinIn />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Team;
