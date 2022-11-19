import React from 'react'
import { recipeBooks } from '../../utils'

const RecipeBookList = () => {
  return (
    <section>
    {recipeBooks.map(recipe => {
        const { id, image, name, creator } = recipe
        return (
            <div key={id} className="mb-12 flex justify-between md:gap-8 gap-[24px]">
                <div className='md:w-1/3 w-1/3'>
                    <img
                        src={image}
                        alt={name}
                        className="md:w-full  w-[108px] md:h-[200px] h-[108px] rounded-[24px] object-cover"
                    />
                </div>
                <div className='md:w-2/3 w-2/3'>
                <p className="text-[#7B3D12] md:text-[32px] text-[12px] font-bold md:mb-2 mb-1 font-raleway">
                    {name}
                </p>
                <p className="md:text-base text-[#52290C] text-[10px] font-medium md:mb-3 mb-2 font-raleway">
                        {creator}
                    </p>
                <div className="flex justify-between items-center md:mb-6 mb-4">
                    <p className='text-[#7B3D12] font-normal font-raleway md:text-base text-[10px]'>Purchased Yesterday</p>
                    <p className='text-[#7B3D12] font-normal font-raleway md:text-base text-[10px]'>$40.00</p>
                </div>
                <div className="flex md:justify-end justify-start">
                    <div className='flex md:gap-[24px] gap-4'>
                        <button className='text-[#F67A24] border-[#F67A24] md:text-base font-bold rounded-[4px] border md:py-3 md:px-6 py-[4px] px-[16px] hover:text-[#F9A66D] hover:border-[#F9A66D] focus:text-[#7b3d12] focus:border-[#7b3d12] font-raleway text-[10px] h-[28px] md:h-[48px] flex justify-center items-center' >Download</button>
                        <button className='py-3 px-6 bg-[#F67A24] text-[#FBFCFE] md:text-base font-bold rounded-[4px] 
                        hover:bg-[#F9A66D] focus:bg-[#7B3D12] font-raleway text-[10px] md:h-[48px] h-[28px] flex justify-center items-center'>Print</button>
                    </div>
                </div>
                </div>
            </div>
        )
    })}
</section>
  )
}

export default RecipeBookList