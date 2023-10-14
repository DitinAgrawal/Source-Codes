import React, {useState} from 'react';
import {Link} from "react-router-dom";

function Menu() {

    const [state,setState] = useState(true)

    const toggleNavbar = () => {
        const nv = document.getElementById("navbar")
        nv.classList.toggle("navbar-mobile")
        setState(!state)
    }

    return (
        <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
                <li>
                    <Link className="nav-link scrollto " to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className="nav-link scrollto" to="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link className="nav-link scrollto" to="/menu">
                        Menu
                    </Link>
                </li>
                <li>
                    <Link className="nav-link scrollto" to="/specials">
                        Specials
                    </Link>
                </li>
                <li>
                    <Link className="nav-link scrollto" to="/events">
                        Events
                    </Link>
                </li>
                <li>
                    <Link className="nav-link scrollto" to="/chefs">
                        Chefs
                    </Link>
                </li>
                <li>
                    <Link className="nav-link scrollto" to="/gallery">
                        Gallery
                    </Link>
                </li>
                <li>
                    <Link className="nav-link scrollto" to="/contact">
                        Contact
                    </Link>
                </li>
            </ul>
            {
                state ? <i className="bi bi-list mobile-nav-toggle" onClick={toggleNavbar} /> : <i className="bi bi-x-lg mobile-nav-toggle" onClick={toggleNavbar} />
            }
        </nav>
    );
}

export default Menu;