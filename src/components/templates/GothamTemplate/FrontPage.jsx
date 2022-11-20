import React from "react"
import PropTypes from 'prop-types'

import frontImageWeb from '../../../assets/images/feyiImages/gotham-jollof-web.jpg'
import frontImageMobile from '../../../assets/images/feyiImages/gotham-jollof-mobile.jpg'

function FrontPage({ editable }) {
  return (
    <div className="!bg-[#FFFFFF] h-[348px] w-[244px] mx-auto md:w-[420px] md:h-[600px] text-[#151515] font-inter">
      <h1 className="uppercase font-[18px] md:text-[31px] text-center mb-[16px] md:mb-[21px] mt-[26px] md:mt-[44px] flex flex-col gap-[5px] font-sora" contentEditable={editable || false}><span>Nigerian</span> <span className="font-bold">Jollof Rice</span></h1>

      <div className="flex justify-center text-[4px]  md:text-[8.5px] gap-[35px] mb-[21px] md:mb-[38px]">
        <div>
          <h2 className="font-[600] uppercase md:mb-[5px]">Prep Time</h2>
          <p contentEditable={editable || false}>30 mins</p>
        </div>
        <div>
          <h2 className="font-[600] uppercase md:mb-[5px]">Cook Time</h2>
          <p contentEditable={editable || false}>1hr 30mins</p>
        </div>
        <div>
          <h2 className="font-[600] uppercase md:mb-[5px]">Serving</h2>
          <p contentEditable={editable || false}>4-5 serves</p>
        </div>
      </div>

      <section className="flex gap-[21px] md:gap-[36px]">
        <div className="flex-1">
          <img src={frontImageWeb} alt="" className="hidden md:block h-[368px]"/>
          <img src={frontImageMobile} alt="" className="md:hidden h-[213px]"/>
        </div>
        <div className="flex-1 mt-[29px]">
          <h1 className="uppercase mb-[6px] text-[7px] md:text-[11px]">Ingredients</h1>
          <ul className="list-disc text-[6px]  md:text-[10px] flex flex-col gap-[3px] md:gap-[6px] pl-[10px] md:leading-4">
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
      </section>
    </div>
  )
}

FrontPage.propTypes = {
  editable: PropTypes.oneOf(['true', 'false'])
}
export default FrontPage