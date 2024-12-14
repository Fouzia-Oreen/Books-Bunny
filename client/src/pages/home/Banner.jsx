import { Link } from "react-router-dom"


const BannerSection = () => {
  return (
    <div className='sub-container py-12  md:py-20 mx-auto'>
        <div className='bg-[#ffabab] rounded-xl relative flex items-center justify-center'>
            <img src="https://i.ibb.co.com/16vKrsg/home-page-banner.png" alt="" className='h-full w-full object-fit '/>
            <div className='absolute bg-color_6 p-1.5 md:py-4  md:px-7 rounded-lg  md:w-[400px] lg:w-[500px] mb-14 md:mb-24 lg:mb-40 gap-4 lg:gap-16 shadow-lg flex flex-col items-center text-color_1 justify-between'>
                <div className="items-center flex flex-col">
                <h1 className='md:text-2xl font-bold'>Join the Community</h1>
                <p className='text-sm opacity-50 hidden md:block'>Discover the best books from around the world.</p>
                </div>

            <div className="border border-color_1 rounded-lg md:w-full flex justify-between ">
            <input type="text" className="p-1 md:p-2 border-none bg-transparent text-sm placeholder-white placeholder-opacity-40" placeholder="write to us..." />
                <Link to='/signup' className='bg-color_1 md:px-4 md:py-2 text-sm px-2 py-1 text-color_6 font-semibold rounded-lg border border-color_1'>Subscribe</Link>

            </div>
            
            </div>
        </div>

    </div>
  )
}

export default BannerSection
