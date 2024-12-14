import logo from '../assets/logo.png'
import {Link} from "react-router-dom"
import { IoSearchOutline } from "react-icons/io5";
import { TbUserPentagon } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { BiMenuAltLeft } from "react-icons/bi";
import avatarImg from "../assets/avatar.png"
import { useState } from "react";
import { navigation, navMenu } from "../assets/data";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false)
    const [toggleButton, setToggleButton] = useState(false)

    const currentUser = true
    return (
        <header className='max-w-screen-2xl mx-auto px-4 py-6 border-b-[1px] border-gray-300 shadow-lg'>
            <nav className=' flex justify-between items-center'>
                {/* logo */}
                <Link to="/" className=" size-10"><img src={logo} alt="" /></Link>

                {/* search */}
                <div className="relative md:block md:w-72 hidden  space-x-2 ">
                <IoSearchOutline className="absolute inline-block left-4 inset-y-3 size-5"/>
                <input type="text" placeholder="Search your book ..." className="pl-10"/>
                </div>
                    {/* nav links */}
                    <ul className='justify-between items-center space-x-4 hidden md:flex'>
                        {
                            navMenu.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.href} className={`text-sm font-bold ${item.active? "text-color_6" : ""}`}>{item.name}</Link>
                                </li>
                            ))
                        }
                    </ul>

                {/* cart */}
                <div className="flex items-center space-x-2 md:space-x-3 relative">
                    <div>
                    {
                        currentUser? (
                            <>
                            <button onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
                                <img src={avatarImg} alt="" className={`size-7 ${currentUser ? "ring-2 ring-color_6 rounded-full" :""}`}/>
                            </button>
                            {/* show dropdowns */}
                             {
                                isDropDownOpen && (
                                    <div>
                                    <ul className="dropdown absolute w-28  rounded-md shadow-md bg-color_1  border-[1px] border-color_5 ">
                                     {
                                         navigation.map(nav => (
                                             <li key={nav.id} className="p-2 text-sm font-bold rounded-md" onClick={() => setIsDropDownOpen(false)}>
                                             <Link to={nav.href}>{nav.name}</Link>
                                             </li>
                                        ))
                                     }
                                    </ul>
                                    </div>
                                ) 
                             }
                            </>
                        ) : (
                            <Link to="/login"><TbUserPentagon className="size-6"/></Link>
                        )
                    }
                    </div>     
                <button className="hidden md:block">
                    <FaRegHeart className="size-6 "/>
                </button>
                <Link to="/cart" className="flex items-center ">
                <FiShoppingCart className="size-6 absolute"/>
                <span className="bg-color_6 rounded-full size-5 flex items-center justify-center text-sm font-semibold mb-5 ml-5 z-10">0</span>
                </Link>

                <button className=" md:hidden" onClick={() => setToggleButton(!toggleButton)}>
                    <BiMenuAltLeft className="size-7 "/>
                </button>
                {/* small devices on nav toggle */}
                {
                    toggleButton && (
                        <div className="fixed h-full w-screen lg:hidden bg-black/50 z-20 backdrop-blur-sm top-0 right-0 md:hidden">
                        <div className="bg-color_1 absolute right-0 top-0 h-screen p-8 gap-8 z-30 flex flex-col w-80">
                        <IoClose className="size-6 text-color_6 ml-60 cursor-pointer" onClick={() =>setToggleButton(false) }/>
                        <ul className={`flex flex-col justify-between items-start space-y-8 mt-20 transform transition-transform`} style={{transform:"transition 0.3s ease"}}>
                              {
                                  navMenu.map((item, index) => (
                                      <li key={index}>
                                          <Link to={item.href} className={`text-xl  text-color_6 hover:text-color_6 font-bold ${item.active? "text-color_6" : ""}`}>{item.name}</Link>
                                      </li>
                                  ))
                              }
                          </ul>
                          <div className="flex items-center mt-8 gap-4 justify-center">
                          <button className="cart-btn btn w-fit mt-8">Back to Cart</button>
                          <button className="submit-btn btn w-fit mt-8">Logout</button>
                          </div>

                        </div>
                      </div>
                    )
                }
                </div>
            </nav>
        </header>
    );
};

export default Navbar;