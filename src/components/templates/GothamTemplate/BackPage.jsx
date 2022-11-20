import React from "react"
import PropTypes from 'prop-types'

import backImageWeb from '../../../assets/images/feyiImages/gotham-jollof2-web.jpg'
import backImageMobile from '../../../assets/images/feyiImages/gotham-jollof2-mobile.jpg'

function BackPage({ editable }) {
  return (
    <div className="bg-[#FFFFFF] h-[348px] w-[244px] mx-auto md:w-[420px] md:h-[600px] text-[#151515] pt-[39px]  md:pt-[66px] pb-[46px] flex gap-[31px] font-inter">
      <div className="flex-[0.3]">
        <img src={backImageWeb} alt="" className="hidden md:block"/>
        <img src={backImageMobile} alt="" className="md:hidden"/>
      </div>
      <div className="flex-[0.7] ">
        <h1 className="uppercase text-[7px] md:text-[11.4px] mb-[13px] md:mb-[22px] mt-[4px] md:mt-[8px] leading-[6px] font-[600]">Preparation Steps</h1>
        <ul className='list-disc text-[5px] md:text-[9px] flex flex-col gap-[10px] pl-[10px] md:gap-[17px] md:leading-[10px] pr-[26px] md:pr-[44px]'>
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
    </div>
  )
}


BackPage.propTypes = {
  editable: PropTypes.oneOf(['true', 'false'])
}
export default BackPage