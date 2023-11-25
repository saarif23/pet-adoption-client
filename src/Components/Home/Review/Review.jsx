import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Title from "../../Shared/Title";
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

                <div className="flex items-center gap-16">
                    {/* <Title heading={'Our Client Reviews'} subHeading={'You’ll enjoy knowing our dedicated team will do whatever is needed to keep your pets happy, healthy and safe when you’re away from home.'} /> */}
                    <div className="flex-[2] space-y-4">
                        <p className=" text-amber-400 pl-5 font-semibold border-l-4 border-amber-400">Happy Client</p>
                        <h2 className="text-5xl font-bold">Our Client Testimonial</h2>
                        <p className="text-justify font-light">You’ll enjoy knowing our dedicated team will do whatever is needed to keep your pets happy, healthy and safe when you’re away from home</p>
                    </div>



                    {/* team member */}
                    <Swiper className="mySwiper my-10 flex-[4]"
                        slidesPerView={2}
                        spaceBetween={30}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}

                        modules={[Autoplay, Pagination, Navigation]}

                    >
                        {reviews.map(review => <SwiperSlide key={review._id}>
                            <div className="text-left rounded-2xl bg-white  p-5 " >
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