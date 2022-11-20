import React, { useState } from 'react'
import RecipeBookList from '../components/purchased-recipes/RecipeBookList'
import RecipeCard from '../components/purchased-recipes/RecipeCard'
import RecipeList from '../components/purchased-recipes/RecipeList'
import RecommendedSwiper from '../components/purchased-recipes/RecommendedSwiper'
import { BsSearch } from 'react-icons/bs'

const PurchasedReceipes = () => {
    const [isOpen, setIsOpen] = useState(true)
    const [isEmpty, setIsEmpty] = useState(false)
    return (
        <section className="w-11/12 mx-auto mt-10">
            <div className="lg:w-2/5 md:w-2/3 w-full">
                <form className="flex items-center">
                    <label htmlFor="simple-search" className="sr-only">
                        Search
                    </label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <BsSearch className="text-[#7B3D12]" />
                        </div>
                        <input
                            type="text"
                            id="simple-search"
                            className="bg-[#FBFCFE] border border-[#FCD3B6] text-base font-medium text-[#7B3D12] rounded-[8px] focus:border-[#FCD3B6] block w-full pl-10 p-2.5 dark:border-[#7B3D12] dark:placeholder-[#7B3D12] dark:text-white dark:focus:border-[#7B3D12] md:h-[54px] h-[40px]"
                            placeholder="Search Purchased Items"
                            required
                        />
                    </div>
                </form>
            </div>
            <div className="flex mt-12">
                <p
                    className={`${
                        isOpen
                            ? 'text-base font-medium text-[#52290C] p-2 border-b border-[#F67A24] mr-8 mb-[68px]'
                            : 'text-base font-medium text-[#52290C] p-2 mr-8 mb-[68px]'
                    }`}
                    onClick={() => setIsOpen(true)}
                    role="button"
                >
                    Recipes
                </p>
                <p
                    className={`${
                        isOpen
                            ? 'text-base font-medium text-[#52290C] p-2 mr-8 mb-[68px]'
                            : 'text-base font-medium text-[#52290C] p-2 border-b border-[#F67A24] mr-8 mb-[68px]'
                    }`}
                    role="button"
                    onClick={() => setIsOpen(false)}
                >
                    Recipe Books
                </p>
            </div>
            <div className="flex flex-col lg:flex-row justify-between mt-5">
                <div className="lg:w-3/4 w-full">
                    {isEmpty && (
                        <div>
                            <p className="mb-[6px] text-xl text-[#B5B5B5]">
                                Recipes you’ve purchased will appear here
                            </p>
                            <div className="flex">
                                <p></p>
                                <p>Recipe</p>
                            </div>
                        </div>
                    )}
                    <div
                        className="hidden"
                        onClick={() => setIsEmpty(false)}
                    ></div>
                    <div>{isOpen ? <RecipeList /> : <RecipeBookList />} </div>
                </div>
                <div className="lg:w-1/5 bg-[#FDE4D3] h-[700px] rounded-[20px] lg:block hidden">
                    <p className="text-center mt-[48px] mb-8 text-xl font-bold text-[#52290C] font-raleway">
                        Recommendations
                    </p>
                    <div className="px-5 overflow-y-scroll h-[550px]">
                        <RecipeCard />
                    </div>
                </div>
                <div className="w-full md:hidden block">
                    <RecommendedSwiper />
                </div>
            </div>
        </section>
    )
}

export default PurchasedReceipes
