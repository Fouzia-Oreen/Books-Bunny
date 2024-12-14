import  { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
//import { book } from '../../assets/data';
import { FiShoppingCart } from 'react-icons/fi';
import { categories } from '../../assets/data';
import BookCard from '../books/BookCard';


const TopSellerSection = () => {
    const [books, setBooks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    useEffect(() => {
        fetch("books.json").then(res => res.json()).then((data) => setBooks(data))
    }, [])
    const filteredBooks = selectedCategory === "All" ? books : books.filter(book => book.category === selectedCategory.toLowerCase());

    
  return (
    <div className='py-12  md:py-20'>
        <div className='flex justify-between items-start'>
        <h1 className='text-3xl font-semibold mb-6'>TopSeller Books</h1>
        <button className='btn cart-btn text-sm lg:text-base'><Link to="/products">View More</Link> </button>
        </div>
            {/* category filtering */}
              <div className='mb-8 flex items-center'>
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
