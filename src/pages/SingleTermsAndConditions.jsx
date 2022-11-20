import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Copyright from '../components/TermsAndConditions/Copyright'
import License from '../components/TermsAndConditions/License'
import TermsOfUse from '../components/TermsAndConditions/TermsOfUse'
import PropTypes from 'prop-types'

import { GoChevronDown } from 'react-icons/go'

const SingleTermsAndConditions = () => {
    const navigate = useNavigate()
    const [menuOpen, setMenuOpen] = useState(false)
    const params = useParams()
    const { id } = params

    const handleMenuLinks = id => {
        setMenuOpen(!menuOpen)
        navigate(`/terms-and-conditions/${id}`)
    }

    handleMenuLinks.propTypes = {
        e: PropTypes.any,
        id: PropTypes.string,
    }
    return (
        <div className="w-full px-6 sm:px-16 py-20 pt-11 sm:pt-14 lg:px-24 lg:py-20 flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-24">
            <div>
                <div className="flex flex-col lg:hidden">
                    <div
                        className="flex justify-between items-center text-[#FFFFFF] px-3 py-2 text-base cursor-pointer w-full max-w-[300px] bg-brand rounded-xl"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {id === '1' && 'Terms of Use'}
                        {id === '2' && 'Copyright'}
                        {id === '3' && 'License and Site Access'}
                        <span className={``}>
                            <GoChevronDown />
                        </span>
                    </div>
                    <div>
                        <div
                            className={` max-w-[300px] overflow-hidden  bg-[#FDE4D3] bg-opacity-50 flex flex-col text-base duration-500 ${
                                menuOpen ? 'max-h-fit py-3' : 'max-h-0'
                            }`}
                        >
                            <button
                                onClick={() => handleMenuLinks('1')}
                                className={`py-4 px-3 flex items-center gap-4 hover:text-brand ${
                                    id === '1' && 'text-brand'
                                }`}
                                to="/terms-and-conditions/1"
                            >
                                <div
                                    className={`w-2 h-8 ${
                                        id === '1'
                                            ? 'bg-brand'
                                            : 'bg-transparent'
                                    } rounded-lg`}
                                ></div>{' '}
                                Terms of use
                            </button>
                            <button
                                onClick={() => handleMenuLinks('2')}
                                className={`py-4 px-3 flex items-center gap-4 hover:text-brand ${
                                    id === '2' && 'text-brand'
                                } border-y border-y-[#FBBD92]`}
                                to="/terms-and-conditions/2"
                            >
                                <div
                                    className={`w-2 h-8 ${
                                        id === '2'
                                            ? 'bg-brand'
                                            : 'bg-transparent'
                                    } rounded-lg`}
                                ></div>{' '}
                                Copyright
                            </button>
                            <button
                                onClick={() => handleMenuLinks('3')}
                                className={`py-4 px-3 flex items-center gap-4 hover:text-brand ${
                                    id === '3' && 'text-brand'
                                }`}
                                to="/terms-and-conditions/3"
                            >
                                <div
                                    className={`w-2 h-8 ${
                                        id === '3'
                                            ? 'bg-brand'
                                            : 'bg-transparent'
                                    } rounded-lg`}
                                ></div>{' '}
                                License and Site Access
                            </button>
                        </div>
                    </div>
                </div>
                <div className="min-w-[296px] max-h-fit  py-3 bg-[#FDE4D3] bg-opacity-50 hidden lg:flex lg:flex-col text-lg">
                    <Link
                        className={`py-4 px-3 flex items-center gap-4 hover:text-brand ${
                            id === '1' && 'text-brand'
                        }`}
                        to="/terms-and-conditions/1"
                    >
                        <div
                            className={`w-2 h-8 ${
                                id === '1' ? 'bg-brand' : 'bg-transparent'
                            } rounded-lg`}
                        ></div>{' '}
                        Terms of use
                    </Link>
                    <Link
                        className={`py-4 px-3 flex items-center gap-4 hover:text-brand ${
                            id === '2' && 'text-brand'
                        } border-y border-y-[#FBBD92]`}
                        to="/terms-and-conditions/2"
                    >
                        <div
                            className={`w-2 h-8 ${
                                id === '2' ? 'bg-brand' : 'bg-transparent'
                            } rounded-lg`}
                        ></div>{' '}
                        Copyright
                    </Link>
                    <Link
                        className={`py-4 px-3 flex items-center gap-4 hover:text-brand ${
                            id === '3' && 'text-brand'
                        }`}
                        to="/terms-and-conditions/3"
                    >
                        <div
                            className={`w-2 h-8 ${
                                id === '3' ? 'bg-brand' : 'bg-transparent'
                            } rounded-lg`}
                        ></div>{' '}
                        License and Site Access
                    </Link>
                </div>
            </div>

            <div className="flex flex-col gap-4 sm:gap-6 lg:gap-10">
                <div className="flex flex-col gap-2">
                    <div className="text-3xl font-bold">
                        {id === '1' && 'Terms of Use'}
                        {id === '2' && 'Copyright'}
                        {id === '3' && 'License and Site Access'}
                    </div>
                    <span className="text-xl ">November 2022</span>
                </div>
                <div className="">
                    {id === '1' && <TermsOfUse />}
                    {id === '2' && <Copyright />}
                    {id === '3' && <License />}
                </div>
            </div>
        </div>
    )
}

export default SingleTermsAndConditions
