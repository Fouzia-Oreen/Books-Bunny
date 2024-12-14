import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import { CgFacebook } from 'react-icons/cg';
import { IoLogoTwitter } from 'react-icons/io';
import { SiBookstack } from "react-icons/si";
import { Link } from "react-router-dom";
import { footerClientInfo, footerLinks, footerPolices } from "../assets/data";
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <>
      <div className="flex flex-col bg-color_4 lg:px-12 justify-center mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2  p-4 gap-6 lg:gap-20 mx-auto items-start">
        <div className="flex flex-col md:flex-row md:items-center justify-evenly gap-4 ">    
          <div className=" p-4">
              <div className="flex gap-4 flex-col">
                <a href="/" className="md:text-base text-color_5 flex gap-4 size-9 bg-color_1 rounded-md p-1">
                <img src={logo} alt="" /><p className="text-xl font-bold text-color_6">BooksBunny</p>
                </a>
                <p className="text-xs text-gray-100">Discover books that ignite your imagination</p> 
                <div className="flex flex-col items-start gap-2">
                <h1 className="text-color_1">Connect With Us</h1>
                <div className="flex  items-center gap-2">
                <a href="" className='text-color_7 cursor-pointer hover:text-color_6 text-lg'><CgFacebook /></a>
                <a href="" className='text-color_7 cursor-pointer hover:text-color_6 text-lg'><IoLogoTwitter /></a>                
                <a href="" className='text-color_7 cursor-pointer hover:text-color_6 text-lg'><AiFillInstagram /></a>                
                <a href="" className='text-color_7 cursor-pointer hover:text-color_6 text-lg'><AiFillYoutube /></a>
                </div>
                </div>
              </div>       
          </div>
          <div className="w-[1px] h-28 bg-color_7 hidden md:block"></div>
          <div className="flex flex-col  gap-2 p-4">
                <p className="text-sm text-color_1">Need Help</p>
                <p className="text-lg text-color_6">+001 223 445 12</p>
                <p className="text-sm text-color_1">Mon - Fri : 09:00 to 09:00</p>
                <p className="text-sm text-color_1">Sat : 09:00 to 09:00</p>
                <p className="text-sm text-color_7">support@booksbunny.com</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 p-4  gap-6 ">
          <div className='flex flex-col gap-2 '>
            {footerLinks.map((col) => (
              <>
                <h1 key={col.title} title={col.title} className="text-gray-400 font-bold text-lg">{col.title}</h1>
                  <ul className='flex flex-col gap-1 '>
                    {col.links.map((link) => (
                      <Link to='/' key={link} className="text-sm text-gray-500 hover:text-gray-400 duration-200 transition-all ">{link}</Link>
                    ))}
                  </ul>
                </>
            ))}
            </div>
            <div className='flex flex-col gap-2'>
              {footerPolices.map((col) => (
              <>
              <h1 key={col.title} title={col.title} className="text-gray-400 font-bold text-lg">{col.title}</h1>
                <ul className='flex flex-col gap-1 '>
                  {col.links.map((link) => (
                    <Link to='/' key={link} className="text-sm text-gray-500 hover:text-gray-400 duration-200 transition-all">{link}</Link>
                  ))}
                </ul>
              </>
                ))}
            </div>
            <div className='flex flex-col gap-2 '>
            {footerClientInfo.map((col) => (
              <>
              <h1 key={col.title} title={col.title} className="text-gray-400 font-bold text-lg">{col.title}</h1>
                <ul className='flex flex-col gap-1 '>
                  {col.links.map((link) => (
                    <Link to='/' key={link} className="text-sm text-gray-500 hover:text-gray-400 duration-200 transition-all ">{link}</Link>
                  ))}
                </ul>
              </>
                ))}
            </div> 
          <div>
          </div> 
        </div>
        </div>
        <div className="flex justify-center font-bold text-sm md:text-base text-color_5 border-t-[1px] border-t-color_5 p-4 ">
            <p>2024 Books-Bunny. All rights reserved.</p>
        </div>
      </div>
    </>
  )
}

export default Footer
