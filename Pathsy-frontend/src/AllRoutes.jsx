import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import Carrers from './pages/Carrers'
import Contact from './pages/Contact'
import HelpAndSupport from './pages/HelpAndSupport'
import WhoWeAre from './pages/WhoWeAre'
import WhyChoose from './pages/WhyChoose'
import TechEnabledWarehousing from './pages/Services/TechEnabledWarehousing'
import ExhibitionLogisticsDesign from './pages/Services/ExhibitionLogisticsDesign'
import FreightCargoSolutions from './pages/Services/FreightCargoSolutions'
import AIPoweredLastMile from './pages/Services/AIPoweredLastMile'

function AllRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/aboutUs" element={<AboutUs />} /> */}
                <Route path="/services" element={<Services />} />
                <Route path="/whoWeAre" element={<WhoWeAre/>}/>
                <Route path="/whyChoose" element={<WhyChoose/>}/>
                <Route path="/careers" element={<Carrers />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services/techEnabledWarehousing" element={<TechEnabledWarehousing/>}/>
                <Route path="serices/exhibitionLogisticsDesign" element={<ExhibitionLogisticsDesign/>}/>
                {/* <Route path="/helpAndSupport" element={<HelpAndSupport/>}/> */}
                <Route path='/services/Freight&CargoSolutions' element={<FreightCargoSolutions/>}/>
                <Route path='/services/AIPoweredLastMile' element={<AIPoweredLastMile/>}/>


            </Routes>

        </>
    )
}

export default AllRoutes