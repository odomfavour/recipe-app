import React from "react"
import PropTypes from 'prop-types'

import backImagWeb from '../../../assets/images/feyiImages/icotorial-jollof2-web.jpg'
import backImagMobile from '../../../assets/images/feyiImages/icotorial-jollof2-mobile.jpg'

function BackPage({ editable }) {
  return (
    <div className="bg-[#151515] h-[348px] w-[244px] mx-auto md:w-[420px] md:h-[600px] text-[#151515] pb-[46px] flex gap-[31px] relative font-inter">
      <h1 className="uppercase absolute  top-[45px] left-[51px] md:top-[73px] md:left-[72px] text-[6.5px] md:text-[11.16px] bg-[#749605] text-[#FFFFFF] px-[9px] py-[2px] md:px-[16px] md:py-[5px]">Preparation Steps</h1>
      <div className="flex-1">
        <img src={backImagWeb} alt="" className="hidden md:block"/>
        <img src={backImagMobile} alt="" className="md:hidden"/>
      </div>
      <ul className='list-disc text-[4.88px] md:text-[9px] flex-1 flex flex-col gap-[10px] pl-[10px] md:gap-[17px] md:leading-[10px] md:pr-[44px] mt-[75px] md:mt-[128px] pr-[29px] leading-[5.9px]'>
        <li className='text-[#F67A24]'>
        <span className='text-[#FFFFFF]' contentEditable={editable || false}>
          In a blender, combine tomatoes, red peppers, chopped onions and scotch bonnets with 2 cups of stock, blend till smooth for 2 minutes and pour into a large pot/pan and boil for 10-12 minutes.
        </span>
        </li>
        <li className='text-[#F67A24]'>
          <span className='text-[#FFFFFF]' contentEditable={editable || false}>
          In a large pan, heat oil and add sliced onions. Season with salt and stir fry for 2-3 minutes on medium heat then add the tomatoe paste and stir fry for two minutes heat. Add the tomato pepper mixyure and set on medium heat for 10-12 minutes.
          </span>
        </li>
        <li className='text-[#F67A24]'>
          <span className='text-[#FFFFFF]' contentEditable={editable || false}>
            Add 4 cups of the stock to the cooked tomato sauce and boil for 1-2 minutes
          </span>
        </li>
        <li className='text-[#F67A24]'>
          <span className='text-[#FFFFFF]' contentEditable={editable || false}>
            Add the rinsed rice and butter, stir, cover with a double piece of foil paper and put a lid on the pan.
          </span>
        </li>
        <li className='text-[#F67A24]'>
          <span className='text-[#FFFFFF]' contentEditable={editable || false}>
            Add slice onion, fresh tomatoes and a teaspoon of butter and stir through. Let it rest, covered for 5 to 6 minutes.
          </span>
        </li>
        <li className='text-[#F67A24]'>
          <span className='text-[#FFFFFF]' contentEditable={editable || false}>
            To make party, you.ll need one more step. Once the rice is cooked turn up the heat with the lid on and leave to burnf or 3 to 5 minutes. You’ll hear this rice crackle and  snap and it will smell toasted. Turn off the heat and leave with the lid on to rest till ready to serve. The longer the lid is on the “smokier”.
          </span>
        </li>
      </ul>
    </div>
  )
}
BackPage.propTypes = {
  editable: PropTypes.oneOf(['true', 'false'])
}

export default BackPage