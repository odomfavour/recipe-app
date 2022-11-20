import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'
// import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const DefaultWrapper = () => {
    return (
        <>
            <Header />
            {/* <Sidebar> */}
            <Outlet />
            {/* </Sidebar> */}
            <Footer />
        </>
    )
}

DefaultWrapper.propTypes = {
    children: PropTypes.any,
}

export default DefaultWrapper
