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


const KidsSection = () => {
    const [books, setBooks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("Kids");
    useEffect(() => {
        fetch("books.json").then(res => res.json()).then((data) => setBooks(data))
    }, [])
    const filteredBooks = selectedCategory === "Kids" ? books : books.filter(book => book.category === selectedCategory.toLowerCase());

    
  return (
    <div className=' my-20 '>
        <div className='flex justify-between items-start'>
        <h1 className='lg:text-3xl text-2xl font-semibold mb-6'>Kids Section</h1>
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
                filteredBooks.slice(0, 8).map((book, index) => (
                  <SwiperSlide key={index}>          
                  {/* <div className=" rounded-lg transition-shadow duration-300">
                      <div
                          className="flex flex-col sm:flex-row sm:items-center sm:h-72  sm:justify-center gap-4"
                      >
                          <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
                              <Link to={`/books/${book._id}`}>
                                  <img
                                      src={book?.coverImage}
                                      alt=""
                                      className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
                                  />
                              </Link>
                          </div>

                          <div>
                              <Link to={`/books/${book._id}`}>
                                  <h3 className="text-xl font-semibold mb-3">
                                {book?.title}
                                  </h3>
                              </Link>
                              <p className="text-gray-600 mb-5">{book?.description.length > 80 ? `${book.description.slice(0, 80)}...` : book?.description}</p>
                              <p className="font-medium mb-5">
                                  ${book?.newPrice} <span className="line-through font-normal ml-2">$ {book?.oldPrice}</span>
                              </p>
                              <button 
                              // onClick={() => handleAddToCart(book)}
                              className="btn cart-btn space-x-1 flex items-center gap-1 ">
                                  <FiShoppingCart className="" />
                                  <span>Add to Cart</span>
                              </button>
                          </div>
                      </div>
                  </div> */}
                  <BookCard key={index} book={book}/>
                  </SwiperSlide>          
                    ))
                  }
              </Swiper>            
    </div>         
  )
}

export default KidsSection
