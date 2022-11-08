import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import "./not-found.css"
const NotFound = () => {
    return (
        <div className='notfound-bg'>

            <Header />
            <br />
            <br />
            <div className='error'>
                <div className="error__content">
                    <p className="error__number">404</p>
                    <p className="error__text ">
                        Oups! La page que vous demandez n'existe pas.
                    </p>
                </div>
                <br />
                <br /></div>
            <NavLink to="/" className="error__link">
                Retourner sur la page d'accueil
            </NavLink>

            <Footer></Footer>

        </div>
    );
};

export default NotFound;