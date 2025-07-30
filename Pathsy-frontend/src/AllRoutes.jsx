import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import Carrers from './pages/Carrers'
import Contact from './pages/Contact'
import HelpAndSupport from './pages/HelpAndSupport'
import WhoWeAre from './pages/WhoWeAre'

function AllRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/aboutUs" element={<AboutUs />} /> */}
                <Route path="/services" element={<Services />} />
                <Route path="/whoWeAre" element={<WhoWeAre/>}/>
                <Route path="/careers" element={<Carrers />} />
                {/* <Route path="/contact" element={<Contact />} /> */}
                {/* <Route path="/helpAndSupport" element={<HelpAndSupport/>}/> */}


            </Routes>

        </>
    )
}

export default AllRoutes