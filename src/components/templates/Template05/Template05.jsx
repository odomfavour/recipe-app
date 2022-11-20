import React from 'react'
import PropTypes from 'prop-types'
import ofadaRiceImg from '../../../assets/images/ofada-rice.png'

export function Template05({ editable }) {
    return (
        <div className="py-10 flex-col  flex bg-[#E1E1E1] w-full items-start gap-10 ">
            {/* front page */}
            <Front editable={editable} />
            {/* back page */}
            <Back editable={editable} />
        </div>
    )
}

export function Front({ editable }) {
    return (
        <div className="lg:w-[536px] m-auto max-[670px]:w-[400px] max-[460px]:w-[320px]">
            <div className="relative rounded-xl bg-[#F6F4DF] max-h-max flex flex-col items-center">
                <img src={ofadaRiceImg} alt="" />
                <div
                    className="bg-[#F08200] max-[460px]:w-[80%] mt-[-20px] rounded-xl w-[354px]  h-[70px] 
                    flex justify-center items-center text-white"
                >
                    <h2
                        contentEditable={editable}
                        className="text-2xl font-bold"
                    >
                        Ofada rice and stew
                    </h2>
                </div>

                <div
                    className="my-20 space-x-6 max-[460px]:space-x-[0px]
                    grid place-items-center space-y-4 md:space-y-0 lg:flex md:flex
                    max-[670px]:space-x-0 lg:space-x-10"
                >
                    <div className="flex items-center flex-col">
                        <h2 className="text-[#F67A24] font-bold text-2xl mb-2">
                            Prep Time
                        </h2>
                        <p
                            contentEditable={editable}
                            className="text-md font-normal text-[#F67A24] "
                        >
                            30 Minus
                        </p>
                    </div>
                    <div className="flex items-center flex-col">
                        <h2 className="text-[#F67A24] font-bold text-2xl mb-2">
                            Cooking Time
                        </h2>
                        <p
                            contentEditable={editable}
                            className="text-md font-normal text-[#F67A24] "
                        >
                            50 Minus
                        </p>
                    </div>
                    <div className="flex items-center flex-col">
                        <h2 className="text-[#F67A24] font-bold text-2xl mb-2">
                            Serving
                        </h2>
                        <p
                            contentEditable={editable}
                            className="text-md font-normal text-[#F67A24] "
                        >
                            5 serves
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function Back({ editable }) {
    return (
        <div className="w-[536px] max-[670px]:w-[400px] flex flex-col gap-10 m-auto max-[460px]:w-[320px]">
            <div className="bg-[#F6F4DF] rounded-xl pl-8 py-6">
                <h4 className="text-[#F08200] font-bold mb-4 text-xl ">
                    Description
                </h4>
                <p
                    contentEditable={editable}
                    className="text-md  w-[80%] leading-[29px]"
                >
                    Ofada rice is a popular Nigerian rice variety. It is also
                    called Unpolished rice as it is rice in it’s natural state
                    and without genetic modification.
                </p>

                <div className="mt-6">
                    <h4 className="text-[#F08200] font-bold mb-4 text-xl ">
                        Ingredients
                    </h4>
                    <p
                        contentEditable={editable}
                        className="text-md  w-[80%] leading-[29px]"
                    >
                        1 cup of Ofada rice
                    </p>
                    <p
                        contentEditable={editable}
                        className="text-md  w-[80%] leading-[29px]"
                    >
                        1tbsp vegetable oil
                    </p>
                    <p
                        contentEditable={editable}
                        className="text-md  w-[80%] leading-[29px]"
                    >
                        1/2 tbsp salt
                    </p>
                    <p
                        contentEditable={editable}
                        className="text-md  w-[80%] leading-[29px]"
                    ></p>
                </div>

                <div className="mt-6">
                    <h4 className="text-[#F08200] font-bold mb-4 text-xl ">
                        Cooking Instructions
                    </h4>
                    <p
                        contentEditable={editable}
                        className="text-md  w-[80%] leading-[29px]"
                    >
                        Get a clean bowl of water Pour the ofada rice into the
                        bowl of water and wash Put a pot on fire Add 7 cups of
                        water Also add salt, vegetable oil and washed Ofada
                        rice. Cover the pot and cook until ofada rice is soft .
                        when ofada rice is soft enough, remove it Place a basket
                        on top of a bowl Pour the Ofada rice into the basket to
                        remove water
                    </p>
                </div>
            </div>
        </div>
    )
}

Template05.propTypes = {
    editable: PropTypes.oneOf(['true', 'false']),
}

Front.propTypes = {
    editable: PropTypes.oneOf(['true', 'false']),
}

Back.propTypes = {
    editable: PropTypes.oneOf(['true', 'false']),
}
