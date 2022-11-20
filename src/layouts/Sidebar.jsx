import React from 'react'
import Logo from '../assets/images/Kitchen-Diary.png'
import display from '../assets/images/display.jpeg'
import PropTypes from 'prop-types'
import { FiHome, FiSearch, FiChevronDown } from 'react-icons/fi'

import {
    MdOutlineShoppingBasket,
    MdOutlineBackupTable,
    MdOutlineLibraryBooks,
    MdAdd,
    MdOutlineShoppingBag,
    MdOutlineSettings,
    MdLogout,
} from 'react-icons/md'
import { TbAlignCenter } from 'react-icons/tb'
import { IoMdNotificationsOutline } from 'react-icons/io'
import {useLocation, Link } from 'react-router-dom'

function Sidebar({ children }) {
    let location = useLocation();
    console.log(location.pathname)
    return (
        <div className="relative w-full md:flex">
            <div className="hidden sticky top-0 w-64 h-screen px-7 no-scrollbar hover:scrollbar scroll-smooth bg-[#FFF8F4] flex flex-col justify-between items-center py-2 overflow-auto min-[1115px]:flex">
                <span className="block  mt-6 mb-8">
                    {' '}
                    <img src={Logo} alt="Kitchen Diary" />{' '}
                </span>
                <nav className="flex flex-col gap-8 h-full">
                    <span className="flex items-center cursor-pointer gap-2 hover:text-[#F67A24]">
                        <span className="text-xl">
                            <FiHome />{' '}
                        </span>{' '}
                        Home{' '}
                    </span>
                    <span className="flex items-center cursor-pointer gap-2 hover:text-[#F67A24]">
                        <span className="text-xl">
                            <MdOutlineShoppingBasket />{' '}
                        </span>
                        Recipe{' '}
                    </span>
                    {/* <span className="flex items-center cursor-pointer gap-2 hover:text-[#F67A24]">
                        <span className="text-xl">
                            <FiHeart />{' '}
                        </span>{' '}
                        Favorite
                    </span> */}
                    <span className="flex items-center cursor-pointer gap-2 hover:text-[#F67A24]">
                        <span className="text-xl">
                            <MdOutlineBackupTable />{' '}
                        </span>{' '}
                        Templates
                    </span>
                    <span className="flex items-center cursor-pointer gap-2 hover:text-[#F67A24]">
                        <span className="text-xl">
                            <MdOutlineLibraryBooks />{' '}
                        </span>{' '}
                        Blog
                    </span>
                    <span className="flex items-center cursor-pointer gap-2 hover:text-[#F67A24]">
                        <span className="text-xl">
                            <MdAdd />{' '}
                        </span>{' '}
                        Publish Recipe
                    </span>
                    <span className="flex items-center cursor-pointer gap-2 hover:text-[#F67A24]">
                        <span className="text-xl">
                            <MdOutlineShoppingBasket />{' '}
                        </span>
                        Marketplace
                    </span>
                    <span className="flex items-center cursor-pointer gap-2 hover:text-[#F67A24]">
                        <span className="text-xl">
                            <TbAlignCenter />{' '}
                        </span>
                        Categories
                    </span>
                    <Link to="/purchased-recipes">
                        <span className={`${location.pathname !== '/purchased-recipes' ?'flex items-center cursor-pointer gap-2 hover:text-[#F67A24]' : 'flex items-center cursor-pointer gap-2 text-[#f67a24]'}`}>
                            <span className="text-xl">
                                <MdOutlineShoppingBag />{' '}
                            </span>{' '}
                            Purchased
                        </span>
                    </Link>
                </nav>
                <span className="flex flex-col gap-8 py-16">
                    <span className="flex items-center cursor-pointer gap-2 hover:text-[#F67A24]">
                        <span className="text-xl">
                            <MdOutlineSettings />{' '}
                        </span>{' '}
                        Settings
                    </span>
                    <span className="flex items-center cursor-pointer gap-2 text-[#AD1D1D]">
                        <span className="text-xl">
                            <MdLogout />{' '}
                        </span>{' '}
                        Log Out
                    </span>
                </span>
            </div>
            <div className="w-full relative">
                <span className="sticky top-0 z-[999] h-28 w-full flex px-[56px] py-8 justify-between items-center bg-[#fff]">
                    <span className="w-[400px] flex items-center gap-2 h-12 border border-[#8C8C8D] rounded-lg py-4 px-6">
                        <FiSearch />
                        <input
                            type="text"
                            placeholder="Search for recipes"
                            className="outline-none"
                        />{' '}
                    </span>
                    <span className="flex items-center gap-6 h-12 shrink-0">
                        <span className="text-2xl">
                            <IoMdNotificationsOutline />
                        </span>
                        <span className="px-2 flex flex-row items-center gap-3 hover:bg-[#f0eeee] cursor-pointer rounded-2xl">
                            <span className="w-10 h-10 rounded-full flex overflow-hidden object-cover">
                                {' '}
                                <img
                                    src={display}
                                    alt="Kitchen Diary"
                                    width={44}
                                    height={44}
                                    className="object-cover "
                                />{' '}
                            </span>{' '}
                            Ehrie
                            <FiChevronDown />
                        </span>
                        <span>
                            <button className="createbutton  bg-[#F67A24] hover:bg-[#F9A66D] text-white flex items-center justify-center gap-1">
                                <span className="text-2xl">
                                    <MdAdd />{' '}
                                </span>{' '}
                                Create recipe{' '}
                            </button>
                        </span>
                    </span>
                </span>
                <div className="w-full">{children} </div>{' '}
            </div>
        </div>
    )
}
Sidebar.propTypes = {
    children: PropTypes.any,
}

export default Sidebar
