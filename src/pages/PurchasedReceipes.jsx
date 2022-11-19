import React, { useState } from 'react'
import RecipeBookList from '../components/purchased-recipes/RecipeBookList'
import RecipeCard from '../components/purchased-recipes/RecipeCard'
import RecipeList from '../components/purchased-recipes/RecipeList'
import RecommendedSwiper from '../components/purchased-recipes/RecommendedSwiper'

const PurchasedReceipes = () => {
    const [isOpen, setIsOpen] = useState(true)
    const [isEmpty, setIsEmpty] = useState(false)
    return (
        <section className="w-11/12 mx-auto mt-10">
            <div className="flex">
                <p
                    className={`${
                        isOpen
                            ? 'text-base font-medium text-[#52290C] p-2 border-b border-[#F67A24] mr-8'
                            : 'text-base font-medium text-[#52290C] p-2 mr-8'
                    }`}
                    onClick={() => setIsOpen(true)}
                    role="button"
                >
                    Recipes
                </p>
                <p
                    className={`${
                        isOpen
                            ? 'text-base font-medium text-[#52290C] p-2 mr-8'
                            : 'text-base font-medium text-[#52290C] p-2 border-b border-[#F67A24] mr-8'
                    }`}
                    role="button"
                    onClick={() => setIsOpen(false)}
                >
                    Recipe Books
                </p>
            </div>
            <div className="flex flex-col lg:flex-row justify-between mt-5">
                <div className="lg:w-3/5 w-full">
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
                    <div className='hidden' onClick={() => setIsEmpty(false)}></div>
                    <div>{isOpen ? <RecipeList /> : <RecipeBookList />} </div>
                </div>
                <div className="md:w-1/5 bg-[#FDE4D3] h-[600px] p-5 rounded-[20px] overflow-y-scroll md:block hidden">
                    <p className="text-center mb-8 text-xl font-bold text-[#52290C] font-raleway">
                        Recommendations
                    </p>
                    <RecipeCard />
                </div>
                <div className="w-full md:hidden block">
                    <RecommendedSwiper />
                </div>
            </div>
        </section>
    )
}

export default PurchasedReceipes
