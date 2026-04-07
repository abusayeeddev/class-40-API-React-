import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import RootLayout from './Components/Layout/RootLayout'
import Home from './Components/Page/Home'
import Shop from './Components/Page/Shop'
import About from './Components/Page/About'
import Contact from './Components/Page/Contact'
import Error from './Components/Page/Error'

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path="*" element={<Error/>}/>
      </Route>
    </Routes>
  )
}

export default App
