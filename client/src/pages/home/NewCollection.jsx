import React from 'react'
import { Link } from 'react-router-dom'
import Title from '../../components/Title'

const NewCollection = () => {
  return (
    <div className=' py-12  md:py-20 items-center flex flex-col md:flex-row  justify-between lg:gap-60 gap-24 '>
        <div className='flex-1'>
        <Title title={"Just Arrived"} />
        <p className='mb-6'> 
            New releases and exclusive titles from our top-selling authors are now available for purchase. Enjoy your reading experience!

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, in at! Omnis, dicta ipsam nulla ducimus neque asperiores optio porro et, officia exercitationem non modi expedita harum possimus voluptas temporibus! Fugit, omnis doloribus.
            <br/>
        </p>
        <div className='flex gap-4 items-center'>
        <Link to="/products">
            <button className='btn cart-btn'>Discover More</button>
        </Link>

        <Link to="/products">
            <button className='btn add-btn'>Book Now</button>
        </Link>
        </div>
        </div>

        <div className=" flex-1  flex   items-center justify-center bg-color_6 bg-opacity-15 hover:bg-opacity-0 cursor-pointer">
        <div className=' h-[20rem] w-fit  absolute'>
        <img src="https://i.ibb.co.com/BTrbk0q/set.png" alt="" className='h-full'/>
        </div>

        <img  src="https://i.ibb.co.com/SfvbwQq/author-sign.png" alt="" className='blur-sm relative hover:blur-none transition-opacity duration-200'/>
        </div>
       


    </div>
  )
}

export default NewCollection
