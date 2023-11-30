import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Container from "../../Shared/Container";
import { FaQuoteLeft } from "react-icons/fa6";

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("review.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="bg-neutral-50 py-10">
            <Container>

                <div className="flex flex-col md:flex-row max-md:justify-center  items-center md:gap-16">

                    <div className="md:flex-[2] flex-1 space-y-4 max-md:text-center">
                        <p className=" text-amber-400 pl-5 font-semibold md:border-l-4 border-amber-400">Happy Client</p>
                        <h2 className="text-5xl font-bold">Our Client Testimonial</h2>
                        <p className="text-justify font-light">You’ll enjoy knowing our dedicated team will do whatever is needed to keep your pets happy, healthy and safe when you’re away from home</p>
                    </div>



                    {/* team member */}
                    <Swiper className="mySwiper w-full max-md:my-5 md:my-10  md:flex-[4]  "
                        spaceBetween={30}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}

                        modules={[Autoplay, Pagination, Navigation]}
                        breakpoints={{
                            240: {
                                slidesPerView: 1, // Show 1 slides
                            },
                            640: {
                                slidesPerView: 1, // Show 1 slides
                            },

                            // When screen size is >= 1024px
                            1024: {
                                slidesPerView: 2, // Show 2 slides
                            },
                        }}

                    >
                        {reviews.map(review => <SwiperSlide key={review._id}>
                            <div className="text-left rounded-xl bg-white w-[340px] mx-auto max-md:w-[400px]  p-5 " >
                                <p className='min-h-[90px]  text-neutral-400 font-medium'>{review.review}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-start gap-3 mt-5">
                                        <img className="w-12 border bg-amber-300 rounded-full " src={review.client_image} alt="" />
                                        <div>
                                            <p className="text-xl font-bold">{review.client_name}</p>
                                            <p className="">{review.client_name}</p>
                                        </div>
                                    </div>
                                    <div className="text-amber-400">
                                        <FaQuoteLeft size={40} />
                                    </div>
                                </div>


                            </div>
                        </SwiperSlide>)
                        }

                    </Swiper>
                </div>
            </Container>
        </div>
    );
};

export default Review;