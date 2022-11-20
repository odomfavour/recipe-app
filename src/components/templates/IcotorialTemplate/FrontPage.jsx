import React from "react"
import PropTypes from 'prop-types'

import frontImageWeb from '../../../assets/images/feyiImages/icotorial-jollof-web.jpg'
import frontImageMobile from '../../../assets/images/feyiImages/icotorial-jollof-mobile.jpg'

import oil from '../../../assets/images/feyiImages/Ing-Oil.png'
import onions from '../../../assets/images/feyiImages/Ing-Onions.png'
import tomatoPaste from '../../../assets/images/feyiImages/Ing-tomatoPaste.png'
import rice from '../../../assets/images/feyiImages/Ing-Rice.png'
import pepper from '../../../assets/images/feyiImages/Ing-Pepper.png'
import salt from '../../../assets/images/feyiImages/Ing-Salt.png'
import curry from '../../../assets/images/feyiImages/Ing-Curry.png'
import thyme from '../../../assets/images/feyiImages/Ing-Thyme.png'
import stock from '../../../assets/images/feyiImages/Ing-Stock.png'
import tomato from '../../../assets/images/feyiImages/Ing-Tomato.png'

function FrontPage({ editable }) {
  return (
    <div className="bg-[#1E1E1E] h-[348px] w-[244px] mx-auto md:w-[420px] md:h-[600px] font-inter">
      <section className="relative">
        <div className="w-full">
          <img src={frontImageWeb} alt="" className="hidden md:block w-full"/>
          <img src={frontImageMobile} alt="" className="md:hidden w-full"/>
        </div>
        <h1 className="bg-[#EE680B] text-[#FFFFFF] uppercase w-[179px]  md:w-[308px] pl-[29px] md:pl-[45px] text-[11px] md:text-[19.53px] py-[7px] md:py-[12px] absolute z-1 bottom-[-16px] md:bottom-[-22px] font-sora" contentEditable={editable || false}>Nigerian <span className="font-bold">Jollof Rice</span></h1>
      </section>

      <section className="mt-[41px] md:mt-[60px]">
        <div className="flex gap-5 md:gap-10 text-[5px] md:text-[8.37px] pl-[31px] text-[#FFFFFF] mb-[22px] md:mb-[38px]">
          <div>
            <h2 className="mb-[2px] uppercase">Prep Time</h2>
            <p>30 mins</p>
          </div>
          <div>
            <h2 className="mb-[2px] uppercase">Cook Time</h2>
            <p contentEditable={editable || false}>1hr 30mins</p>
          </div>
          <div>
            <h2 className="mb-[2px] uppercase">Serving</h2>
            <p contentEditable={editable || false}>4-5 Serves</p>
          </div>
        </div>

        <h1 className="bg-[#749605] w-[33%] md:w-[147px] text-[6.5px]  md:text-[11.16px] uppercase py-[3px] pl-[27px] md:pl-[46px] text-[#FFFFFF] mb-[12px] md:mb-[20.5px]">Ingredients</h1>

        <div className="flex gap-[16px] px-[15px] md:px-[28px] text-[#FFFFFF] text-center mb-[9px md:mb-[13px]">
          <div className="flex-1">
            <img src={oil} alt="oil" className="w-[16px]  md:w-[28px] mb-[3px] md:mb-[6px]"/>
            <p className="text-[5.69px] md:text-[10px] md:pr-[10px]" contentEditable={editable || false}>Oil</p>
          </div>
          <div className="flex-1">
            <img src={onions} alt="onions" className="w-[16px] md:w-[28px] mb-[3px] md:mb-[6px]"/>
            <p className="text-[5.69px] md:text-[10px] md:pr-[10px]" contentEditable={editable || false}>Onions</p>
          </div>
          <div className="flex-1">
            <img src={tomatoPaste} alt="" className="w-[16px] md:w-[28px] mb-[3px] md:mb-[6px]"/>
            <p className="text-[5.69px] md:text-[10px] md:pr-[10px]" contentEditable={editable || false}>Tomato Paste</p>
          </div>
          <div className="flex-1">
            <img src={salt} alt="" className="w-[16px] md:w-[28px] mb-[3px] md:mb-[6px]"/>
            <p className="text-[5.69px] md:text-[10px] md:pr-[10px]" contentEditable={editable || false}>Salt</p>
          </div>
          <div className="flex-1">
            <img src={pepper} alt="" className="w-[16px] md:w-[28px] mb-[3px] md:mb-[6px]"/>
            <p className="text-[5.69px] md:text-[10px] md:pr-[10px]" contentEditable={editable || false}>Pepper</p>
          </div>
          <div className="flex-1">
            <img src={rice} alt="" className="w-[16px] md:w-[28px] mb-[3px] md:mb-[6px]"/>
            <p className="text-[5.69px] md:text-[10px] md:pr-[10px]" contentEditable={editable || false}>Rice</p>
          </div>
          <div className="flex-1">
            <img src={curry} alt="" className="w-[16px] md:w-[28px] mb-[3px] md:mb-[6px]"/>
            <p className="text-[5.69px] md:text-[10px] md:pr-[10px]" contentEditable={editable || false}>Curry</p>
          </div>
        </div>
        <div className="flex justify-center text-[#FFFFFF] gap-[20px] text-center">
            <div className="">
              <img src={thyme} alt="" className="w-[16px] md:w-[28px] mb-[3px] md:mb-[6px]"/>
              <p className="text-[5.69px] md:text-[10px]" contentEditable={editable || false}>Thyme</p>
            </div>
            <div className="">
              <img src={tomato} alt="" className="w-[16px] md:w-[28px] mb-[3px] md:mb-[6px]"/>
              <p className="text-[5.69px] md:text-[10px]" contentEditable={editable || false}>Tomatoes</p>
            </div>
            <div className="">
              <img src={stock} alt="" className="w-[16px] md:w-[28px] mb-[3px] md:mb-[6px]"/>
              <p className="text-[5.69px] md:text-[10px]" contentEditable={editable || false}>Stock</p>
            </div>
        </div>
      </section>
    </div>
  )
}

FrontPage.propTypes = {
  editable: PropTypes.oneOf(['true', 'false'])
}
export default FrontPage