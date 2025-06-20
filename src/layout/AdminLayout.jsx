import React from 'react'
import AdminHeader from '../components/common/Admin/AdminHeader'
import AdminNav from '../components/common/Admin/AdminNav'



import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
    return (
        <>
            <div className="layoutRoot">
                <AdminHeader />
                <div className="layout-con">
                    <AdminNav />
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default AdminLayout