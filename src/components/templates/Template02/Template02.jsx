import React from 'react'
import PropTypes from 'prop-types'
import useImages from '../../../utils/template00-03/useImages'

export function Template02({ editable }) {
    return (
        // temporary div to give gray background
        <div className="w-full py-10 px-10 flex flex-col gap-[32px] bg-[#E1E1E1] font-['Georgia']">
            <div className="w-[796.8px] h-[1123.2px] m-auto bg-[#fff]">
                <Front editable={editable} />
            </div>

            <div className="w-[796.8px] h-[1123.2px] m-auto bg-[#fff]">
                <Back editable={editable} />
            </div>
        </div>
    )
}

function Front({ editable }) {
    const { template02Cover, templateLogo } = useImages()

    return (
        <div className="relative w-full h-full">
            <div className="relative w-full h-full">
                <img
                    src={template02Cover}
                    alt="Template 02 cover image"
                    className="w-full h-full object-cover"
                />

                <img
                    src={templateLogo}
                    alt="Kitchen Diary logo"
                    className="absolute top-[48px] left-[64px]"
                />
            </div>

            <div className="w-full h-[41.33%] absolute bottom-0 flex items-center justify-center bg-[#32323280]">
                <div className="w-[75.29%] h-[49.43%] flex flex-col gap-[16px] px-[17.86%] py-[28px] bg-[#A45118] text-[#fff] text-center">
                    <h1
                        contentEditable={editable || 'false'}
                        className="text-[32px] font-[700]"
                    >
                        BANANA CAKE RECIPE
                    </h1>
                    <div className="flex items-center justify-between border-t-[#fff] border-t-[1px] border-t-solid py-[14px] px-[32px]">
                        <p
                            contentEditable={editable || editable}
                            className="text-[14px] font-[500]"
                        >
                            Prep: 30 mins
                        </p>

                        <div className="w-[1px] h-full bg-[#fff]" />

                        <p
                            contentEditable={editable || editable}
                            className="text-[14px] font-[500]"
                        >
                            Serving: 2
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Back({ editable }) {
    const {
        template02BackImage,
        template02Ingredient1,
        template02Ingredient2,
        template02Ingredient3,
        template02Ingredient4,
        template02Ingredient5,
    } = useImages()

    return (
        <div className="relative w-full h-full flex flex-col">
            <div className="relative w-[100%] h-[34.92%]">
                <img
                    src={template02BackImage}
                    alt="Template 01 back page image"
                    className="w-[100%] h-[100%] object-cover"
                />
            </div>

            <div className="w-full h-[65.08%] flex bg-[#A45118]" />

            <div className="absolute bottom-0 left-[8.5%] w-[83%] h-[76.37%] px-[10.12%] py-[7.15%] flex flex-col gap-[5.44%] bg-[#fff]">
                <h1
                    contentEditable={editable || 'false'}
                    className="font-[400] text-[24px] text-[#A45118] text-center"
                >
                    INGREDIENTS
                </h1>

                <div className="flex items-center justify-center gap-[5%]">
                    <div className="relative w-[70px] h-[70px]">
                        <img
                            src={template02Ingredient1}
                            alt="Ingredient image"
                            className="w-full h-full object-cover rounded-[5px]"
                        />
                    </div>
                    <div className="relative w-[70px] h-[70px]">
                        <img
                            src={template02Ingredient2}
                            alt="Ingredient image"
                            className="w-full h-full object-cover rounded-[5px]"
                        />
                    </div>
                    <div className="relative w-[70px] h-[70px]">
                        <img
                            src={template02Ingredient3}
                            alt="Ingredient image"
                            className="w-full h-full object-cover rounded-[5px]"
                        />
                    </div>

                    <div className="relative w-[70px] h-[70px]">
                        <img
                            src={template02Ingredient4}
                            alt="Ingredient image"
                            className="w-full h-full object-cover rounded-[5px]"
                        />
                    </div>

                    <div className="relative w-[70px] h-[70px]">
                        <img
                            src={template02Ingredient5}
                            alt="Ingredient image"
                            className="w-full h-full object-cover rounded-[5px]"
                        />
                    </div>
                </div>

                <div className="flex justify-between text-[#000] text-[18px] mb-[2%]">
                    <ul className="list-disc flex flex-col gap-[16px] ml-[32px]">
                        <li contentEditable={editable || 'false'}>1 egg</li>
                        <li contentEditable={editable || 'false'}>
                            3/4 cup caster sugar
                        </li>
                        <li contentEditable={editable || 'false'}>
                            125g butter
                        </li>
                        <li contentEditable={editable || 'false'}>
                            2 bananas mashed ripe
                        </li>
                    </ul>

                    <ul className="list-disc flex flex-col gap-[16px] ml-[32px]">
                        <li contentEditable={editable || 'false'}>
                            1 1/2 cups of flour
                        </li>
                        <li contentEditable={editable || 'false'}>
                            1/4 cup milk
                        </li>
                        <li contentEditable={editable || 'false'}>
                            1 tsp vanilla
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col items-center text-[#000] text-[18px] mb-[2%]">
                    <h1
                        contentEditable={editable || 'false'}
                        className="text-[#A45118] text-[24px] font-[400] mb-[5.44%]"
                    >
                        INSTRUCTIONS
                    </h1>

                    <ol className="list-decimal flex flex-col gap-[32px] ml-[32px]">
                        <li contentEditable={editable || 'false'}>
                            Melt the butter, sugar and vanilla in a medium-sized
                            saucepan
                        </li>
                        <li contentEditable={editable || 'false'}>
                            Remove from the heat.
                        </li>
                        <li contentEditable={editable || 'false'}>
                            Add mashed bananas and stir through until just
                            combined.
                        </li>
                        <li contentEditable={editable || 'false'}>
                            Bake at 170C for approximately 40 minutes. saucepan.
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

Template02.propTypes = {
    editable: PropTypes.oneOf(['true', 'false']),
}

Front.propTypes = {
    editable: PropTypes.oneOf(['true', 'false']),
}

Back.propTypes = {
    editable: PropTypes.oneOf(['true', 'false']),
}
