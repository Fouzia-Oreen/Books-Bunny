import { SiQuickbooks } from "react-icons/si";
import {Link} from "react-router-dom"
import { IoSearchOutline } from "react-icons/io5";
import { TbUserPentagon } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { BiMenuAltLeft } from "react-icons/bi";
import avatarImg from "../assets/avatar.png"
import { useState } from "react";
import { navigation } from "../assets/data";


const Navbar = () => {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false)
    const currentUser = true
    return (
        <header className='max-w-screen-2xl mx-auto px-4 py-6'>
            <nav className=' flex justify-between items-center'>
                {/* logo */}
                <div className=' rounded-full bg-color_2 flex items-center justify-center border-color_3 border-[2px]'><Link to="/" className=" size-8 text-color_1 flex items-center justify-center "><SiQuickbooks /></Link>
                </div>

                {/* search */}
                <div className="relative md:block md:w-72 hidden  space-x-2 ">
                <IoSearchOutline className="absolute inline-block left-4 inset-y-3 size-5"/>
                <input type="text" placeholder="Search your book ..." className="pl-10"/>
                </div>
                    {/* nav links */}
                    <ul className='justify-between items-center space-x-4 hidden md:flex'>
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>About</a>
                    </li>
                    <li>
                        <a href='#'>Services</a>
                    </li>
                    <li>
                        <a href='#'>Contact</a>
                    </li>
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
                                             <li key={nav.id} className="p-2 text-sm font-bold hover:bg-yellow-100 rounded-md" onClick={() => setIsDropDownOpen(false)}>
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
                <span className="bg-color_6 rounded-full px-[2px] text-sm font-semibold mb-5 ml-5 z-10">0</span>
                </Link>
                <button className=" md:hidden"><BiMenuAltLeft className="size-7 "/></button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;