import React from 'react';

const Card = ({ logement }) => {
    //console.log(logement);
    return (
        <div>
            <li className='card'>
                <div className="infos">
                    <h2>Nom du logement</h2>
                </div>
            </li>
        </div>
    );
};

export default Card;