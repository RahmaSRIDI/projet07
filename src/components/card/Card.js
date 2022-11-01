import React from 'react';
import { NavLink } from 'react-router-dom';
import './card.css';
const Card = ({ logement }) => {
    //console.log(logement);
    return (

        <NavLink className="linklocation" to={"/logments/" + logement.id}>
            <div className="location-card" style={{ backgroundImage: `url(${logement.pictures[0]})` }}>
                <h5 className="location-title">{logement.title}</h5>
                <div className="location-bgd"></div>
            </div>
        </NavLink>

    );
};

export default Card;