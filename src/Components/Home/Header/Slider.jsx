import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

import sliderimg1 from '../../../assets/slider1.jpg'
import sliderimg2 from '../../../assets/slider2.jpg'
import sliderimg3 from '../../../assets/slider3.jpg'
import sliderimg4 from '../../../assets/slider4.jpg'


const Slider = () => {
    return (
       
            <Swiper pagination={true} autoplay={{delay:2000}} modules={[Pagination, Autoplay]} className="mySwiper">
                <SwiperSlide>
                    <img className='w-full h-[500px]' src={sliderimg1} alt="slider1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[500px]' src={sliderimg2} alt="slider2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[500px]' src={sliderimg3} alt="slider3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[500px]' src={sliderimg4} alt="slider4" />
                </SwiperSlide>

            </Swiper>
      
    );
};

export default Slider;