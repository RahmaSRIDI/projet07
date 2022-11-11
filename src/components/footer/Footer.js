import React from 'react';
import { NavLink } from 'react-router-dom';
import logoFooter from "../../assets/logo-footer.png";

import "./footer.css";

const Footer = () => {
    return (
        <div className='flex-container '>
            <div className="footer inner-element">
                <NavLink to="/">
                    <img src={logoFooter} alt="Logo footer Kasa" />
                </NavLink>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;