import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import Title from "../../Shared/Title";
import Container from "../../Shared/Container";

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("review.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
       <>
   <Container>
            <Title heading={'Our Client Reviews'} subHeading={'You’ll enjoy knowing our dedicated team will do whatever is needed to keep your pets happy, healthy and safe when you’re away from home.'} />

            {/* team member */}
            <Swiper className="mySwiper my-10"
                // slidesPerView={6}
                navigation={true}
                modules={[Navigation]}
              
            >
                {reviews.map(review => <SwiperSlide key={review._id}>
                    <div className="text-center  p-5 " >
                        <img className="w-[150px] mx-auto rounded-full " src={review.client_image} alt="" />
                        <p className="text-2xl font-bold py-2">{review.client_name}</p>
                        
                        <p className='min-h-[80px] pt-3'>{review.review}</p>
                        
                    </div>
                </SwiperSlide>)
                }

            </Swiper>
        </Container>
       </>
    );
};

export default Review;