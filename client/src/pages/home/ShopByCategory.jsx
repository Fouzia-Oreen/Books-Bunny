import  { useEffect, useState } from 'react'
import { FaRegHeart } from 'react-icons/fa';
import { categories } from '../../assets/data'
import { GoHeartFill } from "react-icons/go";
import { Link } from 'react-router-dom';


const ShopByCategorySection = () => {
    const [books, setBooks] = useState([]);
    const [addToWishlist, setAddToWishlist] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("All");
    useEffect(() => {
        fetch("books.json").then(res => res.json()).then((data) => setBooks(data))
    }, [])
    const filteredBooks = selectedCategory === "All" ? books : books.filter(book => book.category === selectedCategory.toLowerCase());

    
  return (
    <div className='py-12  md:py-20'>
        <div className='flex justify-between items-start'>
        <h1 className='lg:text-3xl text-2xl font-semibold mb-6'>Shop by Category</h1>
        <button className='btn cart-btn text-sm lg:text-base'><Link to="/products">View More</Link> </button>
        </div>
      
            {/* category filtering */}
            <div className='mb-8 flex items-center'>
            <div
                    onClick={(e) => setSelectedCategory(e.target.value)}
                    name="category" id="category" className='flex items-center gap-4 flex-wrap justify-center'>
                    {
                        categories.map((category, index) => (
                            <button key={index} value={category} className="text-sm font-medium px-2 py-1 bg-color_7 hover:bg-color_6  rounded-md text-color_1 ">{category}</button>
                        ))
                    }
                </div>
            </div>  
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  items-center justify-evenly gap-6'>
            {
                filteredBooks.slice(0, 8).map((book, index) => (
                   <div key={index} className='flex justify-between flex-col lg:flex-row mx-2'>   
                    <div className='flex gap-3'>
                    <Link to={`/books/${book._id}`} className='size-[6rem] '>
                    <img src={book.coverImage} alt="img" className='object-fit h-full rounded-md'/>
                    </Link>
                    <Link to={`/books/${book._id}`} className='flex flex-col '>
                            <h1 className='text-sm md:text-lg font-bold leading-[1.25rem]'>{book.title}</h1>
                            <p className='text-sm md:text-medium text-color_5'>{book?.description.length > 60 ? `${book.description.slice(0, 60)}...` : book?.description}</p>
                            <p className='text-sm md:text-medium font-medium mt-1'>{book.category}</p>
                    </Link>
                    </div>
                    <div className='flex md:flex-col gap-2 lg:gap-4 md:items-end justify-end lg:mt-8'>

                    {/* do not map the heart toggler */}
                    <button onClick={() => setAddToWishlist(!addToWishlist)}>
                        {
                            addToWishlist? < GoHeartFill className='text-color_6 font-medium' /> : <FaRegHeart className='text-color_6 font-medium'/>
                        }
                    </button>
                    <div className='flex items-baseline gap-2'>
                    <span className='line-through text-color_5 font-medium text-sm'>${book.oldPrice}</span>
                    <span className='font-bold text-color_6'>${book.newPrice}</span>
                    </div>
                    </div>
                    </div>
                    ))}
            </div>        

               
      {/* Add pagination, sorting options, etc. */}
      
      
    </div>
  )
}

export default ShopByCategorySection
