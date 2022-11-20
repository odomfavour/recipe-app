import React from "react";
import about from '../../assets/images/home-img/about-section.png';
import { FaLongArrowAltRight } from 'react-icons/fa'

const About = () => {
    return (
        <section className="mb-10">
            <div className="container lg:flex lg:items-center w-4/5 mx-auto">
                <div className="lg:w-1/2 lg:pr-10">
                    <p className="text-brown font-bold text-xl mb-1">
                        About Us
                    </p>
                    <h3 className="text-black font-bold text-2xl mb-5">
                        Who We Are?
                    </h3>
                    <p className="mb-auto pb-10 lg:pb-20 md:text-xl">
                        We allow user to design recipes with information such as
                        the name of the food, the ingredients, cooking
                        instructions, and supporting images. We use this
                        information to generate a customizable and printable
                        card for the user in A4 Paper.
                    </p>
                    <a
                        className="hidden items-center lg:inline-flex gap-3 bg-orange text-white px-5 py-3 rounded-md font-semibold hover:opacity-50"
                        href=""
                    >
                        Read More <FaLongArrowAltRight />
                    </a>
                </div>
                <div className="relative lg:w-1/2">
                    <div className="absolute w-20 h-20 bg-lightOrange right-0 top-0"></div>
                    <div className="absolute w-20 h-20 bg-lightOrange left-0 bottom-0"></div>
                    <div className="text-center">
                        <img
                            src={about}
                            alt=""
                            className="w-full scale-90 object-cover"
                        />
                    </div>
                </div>
                <a
                    className="inline-flex items-center lg:hidden gap-3 bg-orange text-white px-6 py-3 mt-10 rounded-md font-semibold hover:opacity-50"
                    href=""
                >
                    Read More <FaLongArrowAltRight />
                </a>
            </div>
        </section>
    )
}

export default About;
