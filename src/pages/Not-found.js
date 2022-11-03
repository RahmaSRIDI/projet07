import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

const NotFound = () => {
    return (
        <div className='not-found-body'>

            <Header />
            <div className='text404'>404</div>
            <div className='text-ops'>
                Oups! La page que vous demandez n'existe pas.
            </div>
            <div className='back-to-Home'>Retourner sur la page d’accueil</div>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;