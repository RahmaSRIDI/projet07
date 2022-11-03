import React from 'react';

const Tags = (getTag) => {
    return (
        <div className="tag">
            <p className="tag__text">{getTag}</p>
        </div>
    );
};

export default Tags;


const Card = ({ logement }) => {
    return (

        <div className="logements-card" style={{ backgroundImage: `url(${logement.pictures[0]})` }}>
            <h5 className="logements-title">{logement.title}</h5>
            <div className="logements-backgroud"></div>
        </div>

    );
};