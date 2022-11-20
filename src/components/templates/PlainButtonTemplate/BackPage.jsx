import React from 'react';
import PropTypes from 'prop-types'


import webImage1 from '../../../assets/images/feyiImages/backpage1-jollof-web.png'
import mobileImage1 from '../../../assets/images/feyiImages/backpage1-jollof-mobile.png'

import webImage2 from '../../../assets/images/feyiImages/backpage1-jollof2-web.png'
import mobileImage2 from '../../../assets/images/feyiImages/backpage1-jollof2-mobile.png';

function BackPage({ editable }) {
  return (
    <div className="bg-[#FFFFFF] h-[348px] w-[244px] mx-auto md:w-[420px] md:h-[600px] relative font-inter">
      <div className='absolute top-0 right-0'>
        <img src={webImage1} alt="" className='hidden md:block'/>
        <img src={mobileImage1} alt="" className='md:hidden'/>
      </div>
      <div className='absolute bottom-0 left-0'>
        <img src={webImage2} alt="" className='hidden md:block'/>
        <img src={mobileImage2} alt="" className='md:hidden'/>
      </div>
      <div className="w-[23px] h-[23px] bg-[#F67A24] rounded-full absolute top-[4%] right-[35%]"></div>
      <div className=" w-[18px] h-[18px] bg-[#3D3D3D] rounded-full absolute bottom-[35%] left-[30%]"></div>

      <section className='flex'>

        <div className='flex-1 mt-[25px] ml-[26px] md:mt-[42px] md:ml-[44px]'>
          <h1 className='text-[7px] md:text-[11.4px] uppercase font-[600] text-[#151515] mb-[6px]'>Ingredients</h1>

          <ul className='list-disc text-[5px]  md:text-[8.7px] leading-relaxed flex flex-col gap-[2px]  md:gap-[3px] pl-[10px]'>
            <li contentEditable={editable || false}>1/2 cup of oil</li>
            <li contentEditable={editable || false}>3 tablespoons tomato paste</li>
            <li contentEditable={editable || false}>1 tablespoon dried thyme</li>
            <li contentEditable={editable || false}>2 tablespoons curry powder</li>
            <li contentEditable={editable || false}>5 to 6 cups stock</li>
            <li contentEditable={editable || false}>4 cups of rice</li>
            <li contentEditable={editable || false}>3 medium sized onions</li>
            <li contentEditable={editable || false}>2 dried bay leaves</li>
            <li contentEditable={editable || false}>6 fresh red peppers</li>
            <li contentEditable={editable || false}>Salt to taste</li>
            <li contentEditable={editable || false}>Black and white pepper</li>
            <li contentEditable={editable || false}>6 medium sized tomatoes</li>
          </ul>
        </div>

        <div className='flex-1 mt-[72px] pr-[17px] md:mt-[140px] md:pr-[30px]'>
          <h1 className='text-[7px] md:text-[11.4px] uppercase font-[600] text-[#151515] mb-[6px]'>Preparation Steps</h1>

          <ul className='text-[5px] md:text-[8.7px] flex flex-col gap-[7px] list-disc'>
            <li className='text-[#F67A24]'>
            <span className='text-[#151515]' contentEditable={editable || false}>
              In a blender, combine tomatoes, red peppers, chopped onions and scotch bonnets with 2 cups of stock, blend till smooth for 2 minutes and pour into a large pot/pan and boil for 10-12 minutes.
            </span>
            </li>
            <li className='text-[#F67A24]'>
              <span className='text-[#151515]' contentEditable={editable || false}>
              In a large pan, heat oil and add sliced onions. Season with salt and stir fry for 2-3 minutes on medium heat then add the tomatoe paste and stir fry for two minutes heat. Add the tomato pepper mixyure and set on medium heat for 10-12 minutes.
              </span>
            </li>
            <li className='text-[#F67A24]'>
              <span className='text-[#151515]' contentEditable={editable || false}>
                Add 4 cups of the stock to the cooked tomato sauce and boil for 1-2 minutes
              </span>
            </li>
            <li className='text-[#F67A24]'>
              <span className='text-[#151515]' contentEditable={editable || false}>
                Add the rinsed rice and butter, stir, cover with a double piece of foil paper and put a lid on the pan.
              </span>
            </li>
            <li className='text-[#F67A24]'>
              <span className='text-[#151515]' contentEditable={editable || false}>
                Add slice onion, fresh tomatoes and a teaspoon of butter and stir through. Let it rest, covered for 5 to 6 minutes.
              </span>
            </li>
            <li className='text-[#F67A24]'>
              <span className='text-[#151515]' contentEditable={editable || false}>
                To make party, you.ll need one more step. Once the rice is cooked turn up the heat with the lid on and leave to burnf or 3 to 5 minutes. You’ll hear this rice crackle and  snap and it will smell toasted. Turn off the heat and leave with the lid on to rest till ready to serve. The longer the lid is on the “smokier”.
              </span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

BackPage.propTypes = {
  editable: PropTypes.oneOf(['true', 'false'])
}

export default BackPage