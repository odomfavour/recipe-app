import React from 'react'
import { recommendedRecipes } from '../../utils'

const RecipeCard = () => {
    return (
        <section>
            {recommendedRecipes.map(recipe => {
                const { id, image, name, creator } = recipe
                return (
                    <div key={id} className="mb-[40px]">
                        <img src={image} alt={name} className="lg:w-[208px]h-[140px] rounded-[24px]"/>
                        <p className='text-xl text-[#52290C] font-medium mb-[16px] mt-[11px] font-raleway'>{name}</p>
                        <div className="flex">
                            <p className='text-base text-[#52290C] font-normal mr-3 font-raleway'>By</p>
                            <p className='text-base text-[#52290C] font-normal font-raleway'>{creator}</p>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default RecipeCard
