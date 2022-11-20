import React from 'react';
import heroImg from '../../assets/images/home-img/hero-img.png';
import { FaLongArrowAltRight} from 'react-icons/fa';

const HeroSection = () => {
    return (
        <section className="hero pb-10 pt-20">
            <div className="lg:flex lg:items-center w-[90%] mx-auto">
                <div className="lg:w-1/2 lg:pr-10 mb-5">
                    <h1 className="font-bold text-black text-xl pb-5 md:text-3xl md:pr-28 lg:text-4xl lg:pr-0 lg:pb-10">
                        The Best Platform To Get Your Customized Recipe Card{' '}
                    </h1>
                    <p className="pb-5 lg:pb-10 text-lg text-black font-normal">
                        Customize your favourite food recipe and have them
                        printed in a beautiful well generated A4 paper.
                    </p>
                    <div className=" items-center gap-5 hidden lg:flex">
                        <div className="">
                            <a
                                className="px-5 py-3 border-2 rounded-md border-orange gap-2 flex items-center bg-orange text-white font-semibold tracking-wide hover:bg-transparent hover:text-orange"
                                href=""
                            >
                                Get started <FaLongArrowAltRight />
                            </a>
                        </div>
                        <div className=" md:block">
                            <a
                                className="px-5 py-3 border border-orange flex text-orange font-semibold tracking-wide hover:text-white hover:bg-orange"
                                href=""
                            >
                                View Various Recipes
                            </a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <img src={heroImg} alt="" className="mb-10 w-full" />
                    <div className="flex items-center gap-5 lg:hidden">
                        <div className="">
                            <a
                                className="px-5 py-3 border-2 rounded-md border-orange gap-2 flex items-center bg-orange text-white font-semibold tracking-wide hover:bg-transparent hover:text-orange transition-all"
                                href=""
                            >
                                Get started <FaLongArrowAltRight />
                            </a>
                        </div>
                        <div className=" hidden md:block">
                            <a
                                className="px-5 py-3 border border-orange flex text-orange font-semibold tracking-wide hover:text-white hover:bg-orange"
                                href=""
                            >
                                View Varius Recipe
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default HeroSection;