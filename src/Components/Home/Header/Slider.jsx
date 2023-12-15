import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';


const Slider = () => {
    return (
       
            <Swiper pagination={true} autoplay={{delay:2000}} modules={[Pagination, Autoplay]} className="mySwiper">
                <SwiperSlide>
                    <img className='w-full h-[500px]' src="https://i.ibb.co/0rsdGfW/adopt-pet.jpg" alt="slider1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[500px]' src="https://i.ibb.co/gj3Zr7b/careimage.jpg" alt="slider2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[500px]' src="https://i.ibb.co/Gx0zjFf/slider2.jpg" alt="slider3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[500px]' src="https://i.ibb.co/jGB4jmW/family-adopt.jpg" alt="slider4" />
                </SwiperSlide>

            </Swiper>
      
    );
};

export default Slider;