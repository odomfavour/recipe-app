import React from "react"
import print from '../../assets/images/home-img/print-section.png';
const Print = () => {
    return (
        <section className="print min-h-screen py-10">
            <div className="flex flex-col items-center space-y-10  w-[90%] mx-auto">
                <div className="text-white lg:text-center">
                    <h3 className="font-bold text-3xl mb-5">
                        Looking for a printable recipe card template?
                    </h3>
                    <p className="text-xl">
                        Our recipe card templates are perfect for organizing
                        your recipes and keeping them tidy.
                    </p>
                </div>
                <div>
                    <img src={print} alt="" />
                </div>
                <div className="">
                    <a
                        className="py-3 px-6 text-white block font-semibold bg-orange rounded-sm hover:opacity-50"
                        href=""
                    >
                        Create your own Recipe Card
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Print;