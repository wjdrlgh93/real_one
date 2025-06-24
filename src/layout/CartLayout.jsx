import React from 'react'
import Header from '../components/common/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/common/Footer'

const CartLayout = () => {
  return (
    <>
    {/* <Header/> */}
    <Outlet/>
    <Footer/>
    </>
  )
}

export default CartLayout