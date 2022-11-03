import React from 'react';
import { NavLink } from 'react-router-dom';
import logoFooter from "../../assets/logo-footer.png";

import "./footer.css";

const Footer = () => {
    return (

        <div className="footer">
            <NavLink to="/">
                <img src={logoFooter} alt="Logo footer Kasa" />
            </NavLink>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>

    );
};

export default Footer;