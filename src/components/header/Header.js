import React from 'react';
import "./header.css"
import logoHeader from "../../assets/logo-header.svg";
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <nav className="navbar">
            <NavLink to="/home">
                <img src={logoHeader} alt="Logo" className="navbar__img" />
            </NavLink>
            <div className="navbar__links">
                <NavLink
                    to="/home"
                    className={({ isActive }) =>
                        isActive ? "navbar__links--active" : "navbar__links--inactive"
                    }
                >
                    Accueil
                </NavLink>

                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? "navbar__links--active" : "navbar__links--inactive"
                    }
                >
                    About
                </NavLink>
            </div>
        </nav>
    );
};

export default Header;