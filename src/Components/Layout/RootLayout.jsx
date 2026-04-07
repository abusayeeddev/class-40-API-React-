
import React from 'react'
import Headers from './Headers'
import { Outlet, useNavigation } from 'react-router-dom'
import Footer from './Footer'

const RootLayout = () => {


  return (
    <>
    <Headers/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLayout
