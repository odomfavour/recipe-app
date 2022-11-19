import React from 'react'
import PropTypes from 'prop-types'
const DashboardWrapper = ({ children }) => {
    return (
        <section>
            {/* header component */}
            <h1 className="text-green-700">dashboard</h1>
            {children}

            {/* footer component */}
        </section>
    )
}

DashboardWrapper.propTypes = {
    children: PropTypes.any,
}

export default DashboardWrapper
