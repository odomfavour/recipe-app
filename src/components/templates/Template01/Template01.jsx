import React from 'react'
import PropTypes from 'prop-types'
import Alarm from '../../../assets/icons/template00-03/Alarm.svg'
import useImages from '../../../utils/template00-03/useImages'

export function Template01({ editable }) {
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
    const {
        template01Cover,
        template01Eggs,
        template01Butter,
        template01Milk,
        template01Sugar,
        template01Flour,
        template01Banana,
        template01Vanilla,
        templateLogo2,
    } = useImages()

    return (
        <div className="flex h-[100%]">
            <div className="w-[32.77%] h-[100%] px-[30px] pt-[42px] pb-[73px] flex flex-col gap-[103px] items-center justify-center bg-[#A45118]">
                <div className="w-[3px] h-[16.86%] bg-[#fff]" />

                <h1
                    contentEditable={editable || 'false'}
                    className="text-[32px] text-[#fff] text-center px-[16px] leading-[53px]"
                >
                    BANANA CAKE RECIPE
                </h1>

                <div className="w-[3px] h-[16.86%] bg-[#fff]" />

                <div className="flex gap-[5px]">
                    <img src={Alarm} alt="Alarm" />
                    <p
                        contentEditable={editable || 'false'}
                        className="font-[500] text-[#fff]"
                    >
                        45 mins
                    </p>
                </div>
            </div>

            <div className="w-[67.23%] h-[100%] bg-[#fff]">
                <div className="relative w-full h-[65%]">
                    <img
                        src={template01Cover}
                        alt="Template 01 Cover"
                        className="w-full h-full object-cover"
                    />

                    <img
                        src={templateLogo2}
                        alt="Kitchen Diary logo"
                        className="absolute top-[7.0%] right-[34%]"
                    />
                </div>
                <div className="w-full h-[35%] flex p-[20px] bg-[#FCD3B6]">
                    <div className="w-[10.75%] h-full flex items-center justify-center bg-[#A45118]">
                        <h1
                            contentEditable={editable || 'false'}
                            className="text-[18px] text-[#fff] font-[500] rotate-[-90deg]"
                        >
                            INGREDIENTS
                        </h1>
                    </div>

                    <div className="w-[89.25%] h-full flex flex-col  px-[38px] py-[16px]">
                        <div className="w-full h-full flex gap-[50px] items-center justify-center">
                            <div className="relative flex flex-col items-center">
                                <img
                                    src={template01Eggs}
                                    alt="egg"
                                    className=" w-[80px] h-[80px] object-cover rounded-[50%] border-solid border-[3px] border-[#F79049]"
                                />

                                <p
                                    contentEditable={editable || 'false'}
                                    className="text-[12px] font-[400]"
                                >
                                    Egg
                                </p>
                            </div>
                            <div className="relative flex flex-col gap-[5px] items-center">
                                <img
                                    src={template01Butter}
                                    alt="egg"
                                    className=" w-[80px] h-[80px] object-cover rounded-[50%] border-solid border-[3px] border-[#F79049]"
                                />

                                <p
                                    contentEditable={editable || 'false'}
                                    className="text-[12px] font-[400]"
                                >
                                    Butter
                                </p>
                            </div>
                            <div className="relative flex flex-col gap-[5px] items-center">
                                <img
                                    src={template01Milk}
                                    alt="egg"
                                    className=" w-[80px] h-[80px] object-cover rounded-[50%] border-solid border-[3px] border-[#F79049]"
                                />

                                <p
                                    contentEditable={editable || 'false'}
                                    className="text-[12px] font-[400]"
                                >
                                    Milk
                                </p>
                            </div>
                        </div>
                        <div className="w-full h-full flex gap-[50px] items-center justify-center">
                            <div className="relative flex flex-col gap-[5px] items-center">
                                <img
                                    src={template01Sugar}
                                    alt="egg"
                                    className=" w-[80px] h-[80px] object-cover rounded-[50%] border-solid border-[3px] border-[#F79049]"
                                />

                                <p
                                    contentEditable={editable || 'false'}
                                    className="text-[12px] font-[400]"
                                >
                                    Sugar
                                </p>
                            </div>
                            <div className="relative flex flex-col gap-[5px] items-center">
                                <img
                                    src={template01Flour}
                                    alt="egg"
                                    className=" w-[80px] h-[80px] object-cover rounded-[50%] border-solid border-[3px] border-[#F79049]"
                                />

                                <p
                                    contentEditable={editable || 'false'}
                                    className="text-[12px] font-[400]"
                                >
                                    Flour
                                </p>
                            </div>
                            <div className="relative flex flex-col gap-[5px] items-center">
                                <img
                                    src={template01Banana}
                                    alt="egg"
                                    className=" w-[80px] h-[80px] object-cover rounded-[50%] border-solid border-[3px] border-[#F79049]"
                                />

                                <p
                                    contentEditable={editable || 'false'}
                                    className="text-[12px] font-[400]"
                                >
                                    Banana
                                </p>
                            </div>
                        </div>
                        <div className="w-full h-full flex gap-[50px] items-center justify-center">
                            <div className="relative flex flex-col gap-[5px] items-center">
                                <img
                                    src={template01Vanilla}
                                    alt="egg"
                                    className=" w-[80px] h-[80px] object-cover rounded-[50%] border-solid border-[3px] border-[#F79049]"
                                />

                                <p
                                    contentEditable={editable || 'false'}
                                    className="text-[12px] font-[400]"
                                >
                                    Vanilla Essence
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Back({ editable }) {
    const { template01BackImage } = useImages()

    return (
        <div className="w-full h-full flex flex-col">
            <div className="relative w-[100%] h-[30.17%]">
                <img
                    src={template01BackImage}
                    alt="Template 01 back page image"
                    className="w-[100%] h-[100%] object-cover"
                />
            </div>

            <div className="w-full h-full flex">
                <div className="w-[36.6%] h-[100%] px-[32px] py-[64px] bg-[#A45118]">
                    <h1
                        contentEditable={editable || 'false'}
                        className="text-[24px] text-[#fff] font-[400] mb-[37px]"
                    >
                        INGREDIENTS
                    </h1>

                    <ul className="flex flex-col gap-[32px] text-[20px] text-[#fff] list-disc ml-[32px]">
                        <li contentEditable={editable || 'false'}>
                            125g butter
                        </li>
                        <li contentEditable={editable || 'false'}>
                            3/4 cup caster sugar
                        </li>
                        <li contentEditable={editable || 'false'}>
                            1 tsp vanilla essence
                        </li>
                        <li contentEditable={editable || 'false'}>1 egg</li>
                        <li contentEditable={editable || 'false'}>
                            2 bannana mashed ripe
                        </li>
                        <li contentEditable={editable || 'false'}>
                            1 1/2 cups of floor
                        </li>
                        <li contentEditable={editable || 'false'}>
                            1/4 cup of milk
                        </li>
                    </ul>
                </div>

                <div className="w-[63.4%] h-[100%] px-[32px] py-[64px] text-[#311807] bg-[#FCD3B6]">
                    <h1
                        contentEditable={editable || 'false'}
                        className="text-[24px] font-[400] mb-[37px]"
                    >
                        INSTRUCTIONS
                    </h1>

                    <div className="flex flex-col gap-[48px]">
                        <ol className="flex flex-col gap-[32px] list-decimal ml-[32px] text-[20px] font-[400] leading-[40px]">
                            <li contentEditable={editable || 'false'}>
                                Melt the butter, sugar and vanilla in a
                                medium-sized saucepan
                            </li>
                            <li contentEditable={editable || 'false'}>
                                Remove from the heat.
                            </li>
                            <li contentEditable={editable || 'false'}>
                                Add mashed bananas and stir through until just
                                combined.
                            </li>
                            <li contentEditable={editable || 'false'}>
                                Bake at 170C for approximately 40 minutes.
                            </li>
                        </ol>

                        <div className="w-full p-[24px] border-solid border-[2px] border-[#A45118]">
                            <p
                                contentEditable={editable || 'false'}
                                className="text-[#311807] text-[24px] mb-[16px]"
                            >
                                NOTES
                            </p>
                            <p
                                contentEditable={editable || 'false'}
                                className="text-[#311807] text-[20px]"
                            >
                                You can also use creaming butter and sugar
                                together when doing this.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Template01.propTypes = {
    editable: PropTypes.oneOf(['true', 'false']),
}

Front.propTypes = {
    editable: PropTypes.oneOf(['true', 'false']),
}

Back.propTypes = {
    editable: PropTypes.oneOf(['true', 'false']),
}
