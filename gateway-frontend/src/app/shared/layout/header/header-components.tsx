import React from 'react'

import { NavItem, NavLink, NavbarBrand } from 'reactstrap'
import { NavLink as Link } from 'react-router-dom'
import { GiWingedSword, GiCastle } from 'react-icons/gi'
import { IoIosContact } from 'react-icons/io'
import { FaMoneyBillWave, FaHome } from 'react-icons/fa'

export const BrandIcon = (props) => (
    <div {...props} className="brand-icon">
        <img src="../../../../content/images/Logo.png" alt="logo" />
    </div>
)

export const Brand = () => (
    <NavbarBrand tag={Link} to="/" className="brand-logo">
        <BrandIcon />
        <span className="brand-title">SinLess Games </span>
        <a href=" " className="navbar-version">
            {VERSION}
        </a>
    </NavbarBrand>
)

export const Home = () => (
    <NavItem>
        <NavLink tag={Link} to="/" className="d-flex align-items-center">
            <FaHome className="navbar-icon" />
            <span className="navbar-link">Home</span>
        </NavLink>
    </NavItem>
)

export const About = () => (
    <NavItem>
        <NavLink
            tag={Link}
            to="/about-us"
            className="d-flex align-items-center NavBarItem"
        >
            <GiWingedSword className="navbar-icon" />
            <span className="navbar-link"> About</span>
        </NavLink>
    </NavItem>
)

export const Tainted = () => (
    <NavItem>
        <NavLink
            tag={Link}
            to="/tainted-kingdoms"
            className="d-flex align-items-center NavBarItem"
        >
            <GiCastle className="navbar-icon" />
            <span className="navbar-link">Tainted Kingdoms</span>
        </NavLink>
    </NavItem>
)

export const Contact = () => (
    <NavItem>
        <NavLink
            tag={Link}
            to="/contact-us"
            className="d-flex align-items-center NavBarItem"
        >
            <IoIosContact className="navbar-icon" />
            <span className="navbar-link"> Contact us</span>
        </NavLink>
    </NavItem>
)

export const Services = () => (
    <NavItem>
        <NavLink
            tag={Link}
            to="/Services"
            className="d-flex align-items-center NavBarItem"
        >
            <FaMoneyBillWave className="navbar-icon" />
            <span className="navbar-link">Services</span>
        </NavLink>
    </NavItem>
)
