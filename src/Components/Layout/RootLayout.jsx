<<<<<<< HEAD
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
=======
import React from 'react'
import Headers from './Headers'
import { Outlet } from 'react-router-dom'
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
>>>>>>> f2c0f3bf682d69f5c539a4b7a36953d8361939cb
