import { useEffect, useState } from "react";
import Container from "../../Shared/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from 'swiper/modules';
import Title from "../../Shared/Title";

const Category = () => {
    const [categories, setCategory] = useState([]);
    useEffect(() => {
        fetch("category.json")
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    return (
        <Container>
        
            <Title heading={'All Pet category'} subHeading={'Creating Safe and Comfortable Spaces for Pets to Thrive'} />


            <Swiper className="mySwiper my-10"
                // slidesPerView={6}
                spaceBetween={10}

                modules={[Pagination]}
                breakpoints={{
                    // When screen size is >= 640px
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
                    <div className="text-center border-2 rounded-lg p-3 " >
                        <img className="bg-neutral-50 rounded-full " src={category.category_image} alt="" />
                        <p className="text-xl py-2">{category.pet_category}s</p>

                    </div>
                </SwiperSlide>)
                }

            </Swiper>
        </Container>

    );
};

export default Category;