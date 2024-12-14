import { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
//import { book } from '../../assets/data';
// import { categories } from '../../assets/data';
import BookCard from '../books/BookCard';
import Title from '../../components/Title';

const Recomended = () => {
     const [books, setBooks] = useState([]);
        useEffect(() => {
            fetch("books.json").then(res => res.json()).then((data) => setBooks(data))
        }, [])

  return (
    <div className='py-16'>
        {/* title */}
        <Title title={"Recomended For You"} />
        {/* slide */}
        <Swiper
                loop={true}
                slidesPerView={1}
                spaceBetween={30}
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    1180: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    }
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
        {
            books.length > 0 && books.slice(0, 8).map((book, index) => (
                <SwiperSlide key={index}>          
                <BookCard key={index} book={book}/>
                </SwiperSlide>          
                ))
        }
        </Swiper>            
    </div>  
  )
}

export default Recomended
