import Container from "../../Shared/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Title from "../../Shared/Title";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


// import categoryimg1 from '../../../assets/cat.png'
// import categoryimg2 from '../../../assets/bird.png'
// import categoryimg3 from '../../../assets/docs.png'
// import categoryimg4 from '../../../assets/Rabbit.png'
// import categoryimg5 from '../../../assets/Reptiles.png'
// import categoryimg6 from '../../../assets/Exotic_Pets.png'
// import categoryimg7 from '../../../assets/Farm_Animals.png'
// import categoryimg8 from '../../../assets/Fish.png'
// import categoryimg9 from '../../../assets/Horse.png'
// import categoryimg10 from '../../../assets/Small_Mammals.png'
// import categoryimg11 from '../../../assets/Insept.png'

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