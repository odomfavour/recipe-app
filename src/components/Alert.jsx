import React from 'react'
import PropTypes from 'prop-types'
import { MdCheckCircle, MdError, MdWarning, MdClear } from 'react-icons/md'

export const AlertState = {
    Success: 'success',
    Warning: 'warning',
    Error: 'error',
}
const Alert = ({ state = AlertState.Success, textToDisplay }) => {
    console.log('state', state)

    return (
        <div className="border border-opacity-25 border-gray-400 p-1 flex flex-row gap-4 w-fit">
            {state === AlertState.Success && (
                <MdCheckCircle color="#1BBC48" size="24" />
            )}
            {state === AlertState.Error && (
                <MdError color="#CD2727" size="24" />
            )}
            {state === AlertState.Warning && (
                <MdWarning color="#DFD605" size="24" />
            )}
            <p>{textToDisplay}</p>
            <MdClear color="#6A6A6A" size="24" />
        </div>
    )
}

Alert.propTypes = {
    state: PropTypes.string.isRequired,
    textToDisplay: PropTypes.string.isRequired,
}

export default Alert
