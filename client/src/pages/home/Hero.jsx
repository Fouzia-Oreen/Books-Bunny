import React from 'react'

const HeroSection = () => {
  return (
    <div  className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>
        <div className=' md:w-1/2 w-full flex items-center md:justify-end'>
            {/* <img src="https://i.ibb.co.com/W6TMJxn/home-2.png" alt="" /> */}
            <img src="https://i.ibb.co.com/fr6mkLh/hero.png" alt="" />            
            {/* <img src="https://i.ibb.co.com/RYh2ZGg/home-1.png" alt="" /> */}
        </div>
        
        <div className='md:w-1/2 w-full'>
        <h1 className='md:text-5xl text-2xl font-bold mb-7 md:w-[30rem] lg:w-[40rem]'>Top 10 Books  To Make It A  Great Year</h1>
        <p className='mb-10 text-color_5 md:w-[30rem]  lg:w-[40rem]'>It&apos;s time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week&apos;s new releases offer something for everyone</p>
        <button className='btn add-btn'>Subscribe</button>
        </div>
    </div>
  )
}

export default HeroSection
