import React from 'react';
import { BsFillChatSquareQuoteFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import { testimonial } from '../../assets/data';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';


const TestimonialSection = () => {
  return (

<div className=' my-12 md:p-4 grid grid-cols-1  lg:grid-cols-2 gap-6 items-center justify-between bg-color_7 lg:gap-20'>
  <div>
  <div className='flex justify-between items-start flex-col gap-4'>
  <h1 className='lg:text-3xl text-2xl font-semibold '>Let&apos;s see what people say ?</h1>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem deleniti obcaecati, deserunt illum praesentium suscipit qui saepe exercitationem possimus amet vel facere quidem enim veniam velit nulla dolorem id debitis!</p>
  <h4 className='lg:text-2xl text-2xl font-semibold mt-2'>Write to Us...</h4>
  <p>support@bunnybooks.com</p>
  </div>
  <div>
  </div>
  </div>
  {/* <div className='hodden lg:block'></div> */}
    <Swiper
          loop={true}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
      >
    {
        testimonial.map((text, index) => (
        <SwiperSlide key={index}>                  
         <div key={index} className='flex  gap-6 items-center '>
          <div className='h-28 w-28 lg:h-36 lg:w-36'>
          <img src={text.image} alt="Author" className='rounded-md h-full w-full object-cover'/>
          </div>
        <div className='flex-1'>
            <h2 className='text-sm md:text-lg font-bold text-color_5'>{text.name}</h2>
            <p className='text-sm text-color_6'>{text.position}</p>
            <p className='text-sm text-color_4'>{text.text}</p>
        </div>
        </div>
          </SwiperSlide>          
      ))
    }
    </Swiper>            
</div>  
  )
}

export default TestimonialSection

