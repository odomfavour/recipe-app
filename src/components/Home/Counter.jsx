import React from "react";

const Counter = () => {
    return (
        <section className="bg-orange">
            <div className="flex mx-auto justify-between py-5 w-[90%] lg:w-3/5">
                <div className="text-center">
                    <h2 className="font-bold text-white text-xl md:text-2xl lg:text-3xl">
                        150+
                    </h2>
                    <p className="text-xs lg:text-xl text-white">
                        Registered Members
                    </p>
                </div>
                <div className="text-center">
                    <h2 className="font-bold text-white text-xl md:text-2xl lg:text-3xl">
                        50+
                    </h2>
                    <p className="text-xs lg:text-xl text-white">Templates</p>
                </div>
                <div className="text-center ">
                    <h2 className="font-bold text-white text-xl md:text-2xl lg:text-3xl">
                        200+
                    </h2>
                    <p className="text-xs lg:text-xl text-white">
                        Printed Recipe Cards
                    </p>
                </div>
            </div>
        </section>
    )
}


export default Counter;