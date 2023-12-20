import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

// import sliderimg1 from '../../../assets/slider1.jpg'
import sliderimg2 from '../../../assets/slider2.jpg'
// import sliderimg3 from '../../../assets/slider3.jpg'
// import sliderimg4 from '../../../assets/slider4.jpg'
// import sliderimg5 from '../../../assets/slider22.jpg'
import sliderimg21 from '../../../assets/Slider/slider22.jpg'
// import sliderimg22 from '../../../assets/Slider/slider23.jpg'
import sliderimg23 from '../../../assets/Slider/slider24.jpg'
import sliderimg24 from '../../../assets/Slider/slider25.jpg'



const Slider = () => {
    return (
       
            <Swiper pagination={true} autoplay={{delay:2000}} modules={[Pagination, Autoplay]} className="mySwiper">
                <SwiperSlide>
                    <img className='w-full h-[500px] bg-opacity-25 bg-blend-overlay ' src={sliderimg21} alt="slider1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[500px]' src={sliderimg2} alt="slider2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[500px]' src={sliderimg23} alt="slider3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[500px]' src={sliderimg24} alt="slider4" />
                </SwiperSlide>

            </Swiper>
      
    );
};

export default Slider;