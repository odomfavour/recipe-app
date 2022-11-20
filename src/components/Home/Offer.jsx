import React from "react";
import { FaAngleRight } from 'react-icons/fa'
import easyIcon from '../../assets/images/home-img/easy-icon.png'
import printerIcon from '../../assets/images/home-img/printer-icon.png'
import template from '../../assets/images/home-img/template-icon.png'

const Offer = () => {
    return (
        <section>
            <div className="w-[90%] mx-auto py-20">
                <h2 className="text-xl md:text-2xl font-bold pb-10">
                    What we offer at Kitchen
                    <span className="text-orange">Diary</span>
                </h2>
                <div className="flex flex-col md:flex-row md:gap-5 lg:gap-10">
                    <div className="border flex-1 rounded-md p-5 mb-5  flex flex-col justify-between">
                        <div>
                            <img src={easyIcon} alt="" className="mb-4" />
                        </div>
                        <h3 className="font-bold text-black text-xl md:text-base lg:text-xl mb-3">
                      
                            Easy use of access
                        </h3>
                        <p className="text-black mb-3">
                            KitchenDiary is a user-friendly webapp that
                            generates printable recipe cards.
                        </p>
                        <a
                            className="text-orange font-semibold inline-flex items-center gap-1 hover:opacity-50"
                            href=""
                        >
                            Get Started <FaAngleRight />
                        </a>
                    </div>
                    <div className="border flex-1 rounded-md p-5 mb-5 flex flex-col justify-between">
                        <div>
                            <img src={template} alt="" className="mb-4" />
                        </div>
                        <h3 className="font-bold text-black text-xl md:text-base lg:text-xl mb-3">
                            Varieties of template
                        </h3>
                        <p className="text-black mb-3 font-normal">
                            Get access to varieties of A4 recipe card templates
                            from KitchenDiary.
                        </p>
                        <a
                            className="text-orange font-semibold inline-flex items-center gap-1 hover:opacity-50"
                            href=""
                        >
                            Get Started <FaAngleRight />
                        </a>
                    </div>
                    <div className="border flex-1 rounded-md p-5 mb-5 flex flex-col justify-between">
                        <div>
                            <img src={printerIcon} alt="" className="mb-4" />
                        </div>
                        <h3 className="font-bold text-black text-xl md:text-base lg:text-xl mb-3">
                            Printable recipe
                        </h3>
                        <p className="text-black mb-3">
                            Print generated customized food recipe card from
                            from Kitchen Diary
                        </p>
                        <a
                            className="text-orange font-semibold inline-flex items-center gap-1 hover:opacity-50"
                            href=""
                        >
                            Get Started <FaAngleRight />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offer