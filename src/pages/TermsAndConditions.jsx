import React from 'react'
import PropTypes from 'prop-types'
import terms from '../../src/assets/images/terms-desktop.png'
import arrow from '../../src/assets/images/arrow.png'

import termsOfUse from '../../src/assets/images/terms-of-use.png'
import license from '../../src/assets/images/license.png'
import copyright from '../../src/assets/images/copyright.png'
import { Link } from 'react-router-dom'

const TermsAndConditions = () => {
    return (
        <div className="w-full pt-8 pb-20 px-6 sm:pt-6 sm:px-16 lg:px-24 lg:pt-10 lg:pb-24 flex flex-col items-center justify-center ">
            <div className="w-full flex justify-center">
                <img
                    className="min-w-[152px] max-w-[40%] sm:w-[290px] lg:w-[484px]"
                    src={terms}
                    alt="terms and conditions"
                />
            </div>
            <div className="text-base sm:text-xl lg:text-3xl font-bold text-center">
                KitchenDiary’s Terms of Service
            </div>

            <div className="mt-4 lg:mt-8 flex gap-5 justify-center sm:justify-between flex-wrap">
                <Cards
                    id="1"
                    title="Terms of Use"
                    description="Agreement with a user who uses our services"
                    imgSrc={
                        <img
                            className="w-auto  max-h-40 sm:max-h-[160px] lg:max-h-[240px]"
                            src={termsOfUse}
                            alt=""
                        />
                    }
                />

                <Cards
                    id="2"
                    title="Copyright "
                    description="Agreement with a user who uses our services"
                    imgSrc={
                        <img
                            className="w-auto  max-h-40 sm:max-h-[160px] lg:h-auto lg:max-h-[200px]"
                            src={copyright}
                            alt=""
                        />
                    }
                />

                <Cards
                    id="3"
                    title="License and Site Access"
                    description="Agreement with a user who uses our services"
                    imgSrc={
                        <img
                            className="w-auto  max-h-40 sm:max-h-[160px] lg:h-auto lg:max-h-[220px]"
                            src={license}
                            alt=""
                        />
                    }
                />
            </div>
        </div>
    )
}

export default TermsAndConditions

const Cards = ({ title, description, imgSrc, id }) => {
    return (
        <div className="w-full max-w-[360px] sm:min-w-[240px] sm:w-[48%] sm:max-w-[440px] lg:min-w-[300px] lg:w-[32%] flex flex-col bg-[white] border border-[#F67A24] rounded-md">
            <div className="px-5 py-5 h-28 sm:h-32 lg:h-40 flex flex-col gap-2">
                <div className="font-bold text-xl">{title}</div>
                <span className="font-light text-sm lg:text-xl">
                    {description}
                </span>
            </div>
            <div className="bg-[#FDE4D3] bg-opacity-50 flex items-center justify-center py-5 px-4 sm:py-4 sm:px-5 lg:py-6 lg:px-9 lg:h-[320px] xl:h-[380px]">
                <div className="bg-[#FFFFFF] py-6 w-full h-full flex items-center justify-center rounded-lg lg:py-11 lg:px-9 lg:overflow-hidden ">
                    {imgSrc}
                </div>
            </div>
            <Link
                to={`${id}`}
                className="px-5 py-4 lg:px-7 lg:py-7 flex justify-between items-center cursor-pointer hover:font-semibold duration-300"
            >
                <p className="text-sm sm:text-base lg:text-xl cursor-pointer">
                    Read More
                </p>
                <span className=" lg:pl-2">
                    <img className="w-4" src={arrow} alt="read more" />
                </span>
            </Link>
        </div>
    )
}

Cards.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    imgSrc: PropTypes.node.isRequired,
    id: PropTypes.string,
}
