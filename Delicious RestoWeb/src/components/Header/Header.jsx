import React from 'react';
import {Link} from "react-router-dom";
import Menu from "./Menu.jsx";
import '../../App.css'

function Header() {
    return (
        <>
            <header id="header" className="d-flex align-items-center fixed-top">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <div className="logo me-auto">
                        <h1>
                            <Link to="/">Delicious</Link>
                        </h1>
                    </div>
                    <Menu/>
                    <Link to="/book_a_table" className="book-a-table-btn scrollto">
                        Book a table
                    </Link>
                </div>
            </header>
        </>
    );
}

export default Header;