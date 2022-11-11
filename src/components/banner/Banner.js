import React from 'react';
import "./banner.css"
import banner from "../../assets/banner.png";
import bannierMobile from "../../assets/bannierMobile.png";

const Banner = () => {
    return (
        <div className="banner">

            {/* permet d'afficher les images selon la taille de l'écran*/}
            <img src={banner} srcSet={`${bannierMobile} 375w, ${banner} 376w`} className="banner-img" alt="bgdimg" />

            <div className="banner-overlay"></div>
            <h3 className="banner-text" >Chez vous, partout et ailleurs</h3>

        </div>
    );
};

export default Banner;