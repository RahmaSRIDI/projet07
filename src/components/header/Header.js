import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';


const Header = () => {
    return (


        <div className="header">
            <NavLink to="/"><Logo /></NavLink>
            <div className='nav'>

                <NavLink to="/home" className={(nav) => (nav.isActive ? " nav-selected" : "nav-not-selected")}>
                    Acceuil
                </NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive ? " nav-selected" : "nav-not-selected")}>
                    A Propos
                </NavLink>



            </div>
        </div >

    );
};

export default Header;