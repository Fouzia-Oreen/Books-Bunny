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
import { categories } from '../../assets/data';
import BookCard from '../books/BookCard';
import Title from '../../components/Title';


const TopSellerSection = () => {
    const [books, setBooks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    useEffect(() => {
        fetch("books.json").then(res => res.json()).then((data) => setBooks(data))
    }, [])
    const filteredBooks = selectedCategory === "All" ? books : books.filter(book => book.category === selectedCategory.toLowerCase());

    
  return (
    <div className='py-16'>
            {/* title */}
           <Title title={"Top Selling Books"} />
            {/* category filtering */}
              <div className=' flex items-center'>
                <select
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    name="category" id="category" className='border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none'>
                    {
                        categories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))
                    }
                </select>
            </div>
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
              filteredBooks.length > 0 &&  filteredBooks.map((book, index) => (
                  <SwiperSlide key={index}>          
                  <BookCard key={index} book={book}/>
                  </SwiperSlide>          
                    ))
            }
          </Swiper>            
    </div>         
  )
}

export default TopSellerSection
