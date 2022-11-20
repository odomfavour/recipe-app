import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
const DashboardWrapper = () => {
    return (
        <>
            <Sidebar>
                <Outlet />
            </Sidebar>
        </>
    )
}

export default DashboardWrapper
