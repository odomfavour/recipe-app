import React from 'react'
import { recommendedRecipes } from '../../utils'

const RecipeCard = () => {
    return (
        <section>
            {recommendedRecipes.map(recipe => {
                const { id, image, name, creator } = recipe
                return (
                    <div key={id} className="mb-12">
                        <img src={image} alt={name} className="w-full rounded-[24px]"/>
                        <p className='text-xl text-[#52290C] font-medium mb-3 mt-3 font-raleway'>{name}</p>
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
