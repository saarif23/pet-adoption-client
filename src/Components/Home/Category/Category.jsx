import Container from "../../Shared/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Title from "../../Shared/Title";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Category = () => {
    const axiosPublic = useAxiosPublic()
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await axiosPublic("/categories")
            return res.data
        }
    })


    //


    return (
        <Container>
            <div
                data-aos="zoom-in-up"
                data-aos-delay="50"
                data-aos-duration="1000"
            >

            <Title heading={'All Pet category'} subHeading={'Creating Safe and Comfortable Spaces for Pets to Thrive'} />
            </div>


            <Swiper className="mySwiper my-10 "
                // slidesPerView={6}
                spaceBetween={10}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}

                modules={[Autoplay, Pagination, Navigation]}
                breakpoints={{
                    // When screen size is >= 640px
                    200: {
                        slidesPerView: 1, // Show 1 slides
                    },
                    400: {
                        slidesPerView: 2, // Show 2 slides
                    },
                    // When screen size is >= 640px
                    640: {
                        slidesPerView: 3, // Show 2 slides
                    },
                    // When screen size is >= 768px
                    768: {
                        slidesPerView: 4, // Show 4 slides
                    },
                    // When screen size is >= 1024px
                    1024: {
                        slidesPerView: 6, // Show 6 slides
                    },
                }}


            >
                {categories.map(category => <SwiperSlide key={category}>
                    <div className=" border-2  flex flex-col items-center rounded-lg p-3 " >
                        <img className="bg-neutral-50  rounded-full " src={category.category_image} alt="" />
                        <p className="text-xl py-2">{category.pet_category}s</p>

                    </div>
                </SwiperSlide>)
                }

            </Swiper>
        </Container>

    );
};

export default Category;