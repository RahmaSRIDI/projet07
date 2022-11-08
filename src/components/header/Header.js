import React from 'react';
import { NavLink } from 'react-router-dom';
import "./header.css"
import logoHeader from "../../assets/logo-header.svg";
const Header = () => {
    return (

        <div className="navbar">
            <div className="logo">
                <NavLink className="nav" to="/">
                    <img src={logoHeader} alt="Logo Ksa Header" />
                </NavLink>
            </div>
            <div className="list-menu">
                <div className="navli">
                    <NavLink className="navli" to="/">
                        Accueil
                    </NavLink>
                </div>
                <div className="navli">
                    <NavLink className="navli" to="/about">
                        À propos
                    </NavLink>
                </div>
            </div>
        </div >
    );
};

export default Header;