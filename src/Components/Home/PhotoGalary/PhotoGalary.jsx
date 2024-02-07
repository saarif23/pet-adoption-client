import Container from "../../Shared/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
const PhotoGalary = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch("photos.json")
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);
  // const progressCircle = useRef(null);
  // const progressContent = useRef(null);
  // const onAutoplayTimeLeft = (s, time, progress) => {
  //     progressCircle.current.style.setProperty('--progress', 1 - progress);
  //     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  // };

  return (
    <div className="bg-gray-50 ">
      <Container>
        <div
          data-aos="zoom-in-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        ></div>

        {/* team member */}
        <Swiper
          className="mySwiper"
          // slidesPerView={6}
          spaceBetween={0}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          // onAutoplayTimeLeft={onAutoplayTimeLeft}
          breakpoints={{
            // When screen size is >= 640px
            400: {
              slidesPerView: 2, // Show 2 slides
            },
            // When screen size is >= 640px
            640: {
              slidesPerView: 4, // Show 2 slides
            },

            // When screen size is >= 1024px
            1024: {
              slidesPerView: 5, // Show 6 slides
            },
          }}
        >
          {photos.map((photo) => (
            <SwiperSlide key={photo._id}>
              <div>
                <img
                  className="bg-neutral-50 w-[250px] mx-auto rounded-md "
                  src={photo.image}
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
          {/* <div className="autoplay-progress" slot="container-end">
                    <svg className='w-12 ' viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div> */}
        </Swiper>
      </Container>
    </div>
  );
};

export default PhotoGalary;
