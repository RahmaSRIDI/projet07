import React from 'react';
import Navigation from '../components/navigation/Navigation';

const NotFound = () => {
    return (
        <div className='not-found-body'>

            <Navigation />
            <div className='text404'>404</div>
            <div className='text-ops'>
                Oups! La page que vous demandez n'existe pas.
            </div>
            <div className='back-to-Home'>Retourner sur la page d’accueil</div>
        </div>
    );
};

export default NotFound;