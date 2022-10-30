import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return (


        <div className="header">
            <NavLink to="/">
                <img src="./logo.svg" alt="Logo de Kasa" className="logo" />
            </NavLink>
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

export default Navigation;