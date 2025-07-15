import { useState } from 'react'
import './App.css'
import Navbar from './header-footer/Navbar'
import AllRoutes from './AllRoutes'
import Footer from './header-footer/footer'

function App() {


  return (
    <>
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </>
  )
}

export default App
