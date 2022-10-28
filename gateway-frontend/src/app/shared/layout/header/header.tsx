import './header.scss'

import React, { useState } from 'react'

import { Navbar, Nav, NavbarToggler, Collapse } from 'reactstrap'
import LoadingBar from 'react-redux-loading-bar'

import {
    Home,
    Brand,
    About,
    Tainted,
    Contact,
    Services,
} from './header-components'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => setMenuOpen(!menuOpen)

    return (
        <div id="app-header">
            <LoadingBar className="loading-bar" />
            <Navbar
                data-cy="navbar"
                dark
                expand="md"
                fixed="top"
                className="header"
            >
                <NavbarToggler aria-label="Menu" onClick={toggleMenu} />
                <Brand />
                <Collapse isOpen={menuOpen} navbar>
                    <Nav id="header-tabs" className="ms-auto" navbar>
                        <Home />
                        <About />
                        <Tainted />
                        <Contact />
                        <Services />
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Header
