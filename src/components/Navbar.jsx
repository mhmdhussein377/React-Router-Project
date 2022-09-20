import React from 'react';
import Logo from "../assets/pizzaLogo.png";
import {Link} from "react-router-dom";
import "./styles/Navbar.css";
import {GiHamburgerMenu} from "react-icons/gi"
import { useState } from 'react';

const Navbar = () => {

    let [openLinks, setOpenLinks] = useState(false);

    function toggle() {
        setOpenLinks(!openLinks)
    }

    return (
        <div className="navbar">
            <div className="leftSide" id={openLinks ? "open" : "close"}>
                <img src={Logo} alt="Logo"/>
                <div className="hiddenLinks">
                    <Link to="/">Home</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <button onClick={toggle}>
                    <GiHamburgerMenu/>
                </button>
            </div>
        </div>
    );
}

export default Navbar