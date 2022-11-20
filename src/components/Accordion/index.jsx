import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

const Accordion = ({ accordionInfo }) => {
    const [show, setShow] = useState(false)
    return (
        <>
            <div className="flex flex-row gap-24 justify-between py-4">
                <p className=" font-medium text-sm">{accordionInfo.ques}</p>
                {show === false ? (
                    <MdKeyboardArrowDown
                        size="18"
                        cursor="pointer"
                        onClick={e => {
                            e.preventDefault()
                            setShow(!show)
                        }}
                    />
                ) : (
                    <MdKeyboardArrowUp
                        size="18"
                        cursor="pointer"
                        onClick={e => {
                            e.preventDefault()
                            setShow(!show)
                        }}
                    />
                )}
            </div>
            {show === true && (
                <p className="text-sm my-4">{accordionInfo.ans}</p>
            )}

            <div className="border border-gray-100"></div>
        </>
    )
}

Accordion.propTypes = {
    accordionInfo: PropTypes.object.isRequired,
}

export default Accordion
