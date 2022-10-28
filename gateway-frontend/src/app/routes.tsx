import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../app/modules/home/home'
import About from '../app/modules/about/about'
import Tainted from '../app/modules/tainted/tainted'
import Contact from '../app/modules/contact/contact'
import Services from '../app/modules/services/services'

import PageNotFound from '../app/shared/errors/page-not-found'

const AppRoutes = () => {
    return (
        <div className="view-routes">
            <Routes>
                <Route index element={<Home />} />
                <Route path="about-us" element={<About />} />
                <Route path="tainted-kingdoms" element={<Tainted />} />
                <Route path="contact-us" element={<Contact />} />
                <Route path="services" element={<Services />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    )
}

export default AppRoutes
