import React from "react"
import PropTypes from 'prop-types'

import mainJollof from '../../../assets/images/feyiImages/big-jollof-web.jpg'
import secJollof from '../../../assets/images/feyiImages/small-jollof-frontpage-web.png'
import secJollofMobile from '../../../assets/images/feyiImages/small-jollof-frontpage-mobile.png'

function FrontPage({ editable }) {
  return (
    <div className="bg-[#1E1E1E] h-[348px] w-[244px] mx-auto md:w-[420px] md:h-[600px] font-inter">
      <section className="">
        <div className="relative flex justify-center">
          <figure className="max-w-[204px] md:max-w-[312px] relative">
            <img src={mainJollof} alt="img2" className="rounded-full w-full"/>
            <div className="w-[21px] h-[21px] md:w-[35px] md:h-[35px] bg-[#F67A24] rounded-full absolute top-[12%] left-[5%]"></div>
            <div className=" w-[16px] h-[16px] md:w-[27px] md:h-[27px] bg-[#3D3D3D] rounded-full absolute bottom-0 right-8"></div>
          </figure>
        </div>
      </section>
      <div className="relative">

        <section className="w-[80%] md:w-[70%] mx-auto flex">
          <div className="text-[#FFFFFF]">
            <h1 className="text-[16px] md:text-[40px] uppercase mt-[16px] w-[70%] md:w-[90%] font-sora" contentEditable={editable || false}>Nigerian <span className="font-bold">Jollof Rice</span></h1>
            <div className="flex gap-5 md:gap-10 text-[5px] md:mt-[32px] md:text-[8px] md:border-t-[1px] pt-[29px]">
              <div>
                <h2 className="mb-[2px] uppercase">Prep Time</h2>
                <p contentEditable={editable || false}>30 mins</p>
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
          </div>
          <div className="ml-auto absolute right-0">
            <img src={secJollofMobile} alt="img2" className="md:hidden"/>
            <img src={secJollof} alt="img2" className="hidden md:block"/>
          </div>
        </section>
      </div>
    </div>
  )
}

FrontPage.propTypes = {
  editable: PropTypes.oneOf(['true', 'false'])
}
export default FrontPage