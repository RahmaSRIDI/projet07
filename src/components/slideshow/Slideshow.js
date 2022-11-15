import React from 'react';
import { useState } from "react";

import slideRight from "../../assets/fleche-droite.png";
import slideLeft from "../../assets/fleche-gauche.png";

import "./slideShow.css"
const SlideShow = ({ slides }) => {

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <div className="slider">
            {slides.map((picture, index) => {
                return (
                    <div
                        key={index}
                        className={
                            index === current
                                ? "slide slider_active_picture"
                                : "slide slider_inactive_picture"
                        }
                    >
                        {index === current && (
                            <img src={picture} alt="" className="slider_picture" />
                        )}
                    </div>
                );
            })}
            {/* avoir le button que si on a plus qu'une seule photo */}
            {length > 1 ? (
                <>
                    <div className="slider_previous" onClick={prevSlide}>
                        <img src={slideLeft} alt="" className="slider_previous-icon" />
                    </div>
                    <div className="slider_next" onClick={nextSlide}>
                        <img src={slideRight} alt="" className="slider_next-icon" />
                    </div>
                </>
            ) : null}
        </div>
    );
};

export default SlideShow;