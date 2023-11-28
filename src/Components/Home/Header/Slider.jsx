import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Container from '../../Shared/Container';

const Slider = () => {
    return (
        <Container>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <img className='w-full h-[500px]' src="https://i.ibb.co/jGB4jmW/family-adopt.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[500px]' src="https://i.ibb.co/gj3Zr7b/careimage.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[500px]' src="https://i.ibb.co/Gx0zjFf/slider2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[500px]' src="https://i.ibb.co/0rsdGfW/adopt-pet.jpg" alt="" />
                </SwiperSlide>
              
            </Swiper>
        </Container>
    );
};

export default Slider;