import React from 'react';
import "./banner.css"
const Banner = () => {
    return (
        <div className="banner">
            <img src="./assets/banner.png" className="banner-img" alt="bgdimg" />

            <div className="banner-overlay"></div>
            <h3 className="banner-text" >Chez vous, partout et ailleurs</h3>

        </div>
    );
};

export default Banner;