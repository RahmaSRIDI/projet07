import React from 'react';
import { NavLink } from 'react-router-dom';
import logoFooter from "../../assets/logo-footer.png";

import "./footer.css";

const Footer = () => {
    const dateAllRight = new Date().getFullYear();

    return (

        <div className='flex-container '>
            <div className="footer inner-element">
                <NavLink to="/home">
                    <img src={logoFooter} alt="Logo footer Kasa" />
                </NavLink>
                <p>© {dateAllRight} Kasa. All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;