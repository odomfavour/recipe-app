import React from 'react'
import Logo from '../assets/images/Kitchen-Diary.png'
import menu from '../assets/icons/menu.svg'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className=" flex-row justify-between items-center flex px-6  lg:px-[65px] xl:px-[100px] md:px-[70px] py-4 overflow-hidden gap-2 h-20 ">
            <span className="block h-full  py-2">
                <Link to="/">
                    <img src={Logo} alt="Kitchen Diary" />
                </Link>
            </span>
            <nav className="hidden lg:flex flex-row justify-between items-center lg:gap-4 xl:gap-10 w-fit">
                <Link to="/">Home </Link>
                <Link to="about">About</Link>
                <Link to="recipes">Recipes </Link>
                <Link to="blog">Blog </Link>
                <Link to="contact-us">Contact Us </Link>
                <Link to="faqs">FAQs </Link>
            </nav>

            <span className="hidden lg:flex flex-row gap-3">
                <Link
                    className="button text-[#F67A24] border border-[#F67A24] hover:border-[#F9A66D] bg-white"
                    to="/login"
                >
                    Log in
                </Link>
                <Link
                    className="button bg-[#F67A24] hover:bg-[#F9A66D] text-[#fff]"
                    to="/register"
                >
                    Sign Up
                </Link>
            </span>
            <span className="lg:hidden flex flex-row gap-3">
                <img src={menu} alt="menu" />
            </span>
        </div>
    )
}

export default Header
