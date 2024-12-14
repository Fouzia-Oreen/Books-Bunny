import { FaRegCircleCheck } from "react-icons/fa6";

const audiobook = [
  'Portable',
  'Adjustable controllers',
  'Professionally Narrated.',
  'Save as bookmarks',
]

const Audiobook = () => {
  return (  
    <div className=' flex flex-col md:flex-row  items-center justify-evenly p-4 bg-[#fc6d68] md:gap-40 lg:w-[80%] mx-auto my-12 rounded-lg'>
      <div className='flex items-center justify-center py-4 md:pl-20'>
      <img src="https://i.ibb.co.com/bFTt0WJ/audio.png" alt="" className='absolute size-64   z-10 '/>  
      <h1 className='text-xl font-semibold  text-center relative text-color_1'>Audiobooks</h1>
      </div>
      <div className='mt-36 flex gap-4 flex-col md:mt-0 items-center '>
          <div className='flex flex-col items-center justify-center '>
          <h1 className='text-xl font-bold'>Install Our App</h1>
          <p className='text-sm text-center'>Listen to your favorite books in audio format.</p>
          </div>
          <div className='grid grid-cols-2 px-3 gap-2'>
           {
            audiobook.map((text, index) => (
              <div key={index} className='flex gap-2 items-center'>
                <FaRegCircleCheck className='size-4 text-color_7'/>
                <p className='text-sm text-color_1'>{text}</p>
              </div>
            ))
           }
          </div>
      </div>  
    </div>
  )
}

export default Audiobook
