import React from 'react';
import { NavLink } from 'react-router-dom';
import './card.css';
const Card = ({ logement }) => {
    return (

        <NavLink className="logements-link" to={"/logement/" + logement.id}>
            <div className="logements-card" style={{ backgroundImage: `url(${logement.pictures[0]})` }}>
                <h5 className="logements-title">{logement.title}</h5>
                <div className="logements-backgroud"></div>
            </div>
        </NavLink>

    );
};

export default Card;