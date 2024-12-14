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
import Title from '../../components/Title';
import { FaQuoteLeft } from 'react-icons/fa';


const TestimonialSection = () => {
  return (
  <div className=' my-16 md:p-4 grid grid-cols-1  md:grid-cols-2  items-center justify-between  lg:gap-40  rounded-lg bg-color_7 pb-2'>
    <div className=' flex flex-col relative'>
      <div className='bg-color_6 w-fit p-4 rounded-xl absolute md:-mt-16 -mt-10 ml-5  shadow-md'>
      <FaQuoteLeft className='md:size-14 size-10 text-color_1'/>
      </div>
    <div className='flex justify-between items-start flex-col gap-2  mt-8 ml-6'>
    <Title title={"Let's see what people say ?"}/>
    <p className='text-sm text-color_5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem deleniti obcaecati, deserunt illum praesentium suscipit qui saepe exercitationem possimus amet vel facere quidem enim veniam velit nulla dolorem id debitis!</p>
    <h4 className='lg:text-2xl text-2xl font-semibold mt-2 text-color_5'>Write to Us...</h4>
    <Link to="/" className='text-color_6'>support@bunnybooks.com</Link>
    </div>
    <div>
    </div>
    </div>
    {/* swiper slides */}
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
          <SwiperSlide key={index} className='px-4 pt-12 bg-color_7'>                  
          <div key={index } className='flex gap-6 items-center justify-center bg-color_7' >
            <div className='h-28 w-28 lg:h-36 lg:w-36'>
            <img src={text.image} alt="Author" className='rounded-md h-full w-full object-cover'/>
            </div>
          <div className='flex-1  md:gap-3 flex flex-col'>
              <h2 className='text-sm md:text-lg font-bold text-color_6'>{text.name}</h2>
              <p className='text-sm text-color_1'>{text.position}</p>
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

