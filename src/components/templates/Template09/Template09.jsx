import React from 'react'
import PropTypes from 'prop-types'

import moiMoi from '../../../assets/images/moi-moi.png'

export const Template09 = ({ editable }) => {
    return (
        <section className="w-[90%] max-w-[1000px] mx-auto bg-[#FDE4D3]/50 py-4 px-6 grid lg:grid-cols-2 gap-6 lg:gap-3 justify-between items-start my-4 lg:my-6">
            <Front editable={editable} />
            <Back editable={editable} />
        </section>
    )
}

const Front = ({ editable }) => {
    return (
        <div className="p-2 lg:p-4 flex flex-col justify-between bg-[#A45118] max-w-[400px] lg:mr-auto text-white">
            <div>
                <img src={moiMoi} alt="moi-moi recipe" className="w-[100%]" />
                <h1
                    contentEditable={editable}
                    className="text-center my-2 lg:mt-6 text-xl lg:text-2xl font-bold"
                >
                    Nigerian Moi-Moi
                </h1>
            </div>
            <div className="py-3 px-2 border-2 border-white border-dashed grid grid-cols-5 gap-10 items-stretch">
                <div className="flex flex-col col-span-3  mb-2">
                    <h1
                        className="slg:text-xl font-bold"
                        contentEditable={editable}
                    >
                        Ingredients
                    </h1>
                    <div className="flex flex-col gap-2">
                        <p contentEditable={editable}> - 3 cups Beans</p>
                        <p contentEditable={editable}>
                            - 2 cups Vegetable Oil, (can be substituted for
                            palmoil)
                        </p>
                        <p contentEditable={editable}>
                            - 2 medium sized Onions
                        </p>
                        <p contentEditable={editable}>- 2 cups Water</p>
                        <p contentEditable={editable}>- 2 kg Titus fish</p>
                        <p contentEditable={editable}>
                            - 1 tbs Cray fish(Optional)
                        </p>
                        <p contentEditable={editable}>
                            - 2 kg Peppers(Sweet and Habanero)
                        </p>
                    </div>
                </div>
                <div className="col-span-2 flex flex-col justify-between">
                    <div className="flex flex-col gap-2">
                        <h1
                            className="lg:text-lg font-bold"
                            contentEditable={editable}
                        >
                            Prep time
                        </h1>
                        <p> - 30mins</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1
                            className="lg:text-lg font-bold"
                            contentEditable={editable}
                        >
                            Cook time
                        </h1>
                        <p> - 45mins</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1
                            className="lg:text-lg font-bold"
                            contentEditable={editable}
                        >
                            Serving size
                        </h1>
                        <p> - 6 - 8 adults</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const instructionList = [
    {
        id: 1,
        instruction:
            'About three hours before cooking the moi moi, soak and wash the beans to remove the coat.',
    },
    {
        id: 2,
        instruction:
            'When the entire coat has been removed, place the beans in a bowl and pour enough water to cover it. Leave to soak for three hours.',
    },
    {
        id: 3,
        instruction:
            'Then blend the beans with your peppers, onion and crayfish.',
    },
    {
        id: 4,
        instruction:
            'Blend the beans, peppers, onions, crayfish,  and ground together with some of the water and pour the mix into a big enough bowl.',
    },
    {
        id: 5,
        instruction:
            'Add the vegetable oil and the bone marrow stock (if this is what you have chosen to add to your moi moi).',
    },
    {
        id: 6,
        instruction:
            'Slowly add the remaining water and stir the mixture at the same time till you get a good mix of all the ingredients.',
    },
    {
        id: 7,
        instruction: 'Add salt to taste and stir very well.',
    },
    {
        id: 8,
        instruction:
            'Pad the base of a big pot, pour some water and set on the stove. The depth of the water should be at most 1 inch.',
    },
    {
        id: 9,
        instruction:
            'Dish the Moi moi mix into containers of your choice, add egg/bone marrow/corned beef to each container, seal/cover and set them in the pot.',
    },
    {
        id: 10,
        instruction:
            'Add as small quantity of water as possible at a time while cooking the Moi Moi as detailed in preparation and use of moi moi containers.',
    },
    {
        id: 11,
        instruction:
            'The length of time you will cook your Moi Moi depends on the quantity and the Moi Moi container you used. But at approximately 45min you should check your moimoi.',
    },
]

const Back = ({ editable }) => {
    return (
        <div className="p-2 lg:p-4 bg-white max-w-[400px] text-black lg:ml-auto">
            <h1
                contentEditable={editable}
                className="text-center my-2 text-xl lg:text-2xl font-bold"
            >
                Kitchen<span className="text-[#F67A24]">Diary</span>
            </h1>
            <hr className="bg-[#A45118] h-[1.5px] border-0 -mx-2 lg:-mx-4" />
            <div className="p-2 py-4 border-[2px] border-[#A45118] border-t-0">
                <h1 className="text-lg lg:text-xl font-bold text-center my-2 text-[#F67A24]">
                    Ingredients
                </h1>
                <div className="grid grid-cols-3 gap-2 justify-between text-sm">
                    <p contentEditable={editable}>3 cups Beans</p>
                    <p contentEditable={editable}>2 cups Vegetable Oil</p>
                    <p contentEditable={editable}>Salt to taste</p>
                    <p contentEditable={editable}>2 medium sized Onions</p>
                    <p contentEditable={editable}>1 tbs Cray fish(Optional)</p>
                    <p contentEditable={editable}>2 Bullion cubes</p>
                    <p contentEditable={editable}>
                        2 kg Peppers (Sweet and Habanero)
                    </p>
                    <p contentEditable={editable}>2 cups Water</p>
                    <p contentEditable={editable}>2 kg Titus fish</p>
                </div>
            </div>
            <div className="pl-5 pr-2 py-4 border-[2px] border-[#A45118] border-b-0 mt-2">
                <ol className="list-decimal flex flex-col gap-1">
                    {instructionList.map(instruction => (
                        <li
                            key={instruction.id}
                            className="text-sm"
                            contentEditable={editable}
                        >
                            {instruction.instruction}
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

Template09.propTypes = {
    editable: PropTypes.oneOf(['true', 'false']),
}

Front.propTypes = {
    editable: PropTypes.oneOf(['true', 'false']),
}

Back.propTypes = {
    editable: PropTypes.oneOf(['true', 'false']),
}

export default Template09
