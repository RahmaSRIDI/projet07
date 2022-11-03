import React from 'react';
import "./banner.css"
import banner from "../../assets/banner.png";

const Banner = () => {
    return (
        <div className="banner">
            <img src={banner} className="banner-img" alt="bgdimg" />

            <div className="banner-overlay"></div>
            <h3 className="banner-text" >Chez vous, partout et ailleurs</h3>

        </div>
    );
};

export default Banner;