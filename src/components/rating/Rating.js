import React from 'react';
// style
import redstar from "../../assets/red-star.png";
import greystar from "../../assets/grey-star.png";
import "./rating.css"
const Rating = ({ rating }) => {
    const stars = [1, 2, 3, 4, 5];
    return (
        <div className="rating">

            {stars.map((star) =>
                rating >= star ? (
                    <img
                        key={star.toString()}
                        className="rating__icon"
                        src={redstar}
                        alt=""
                    />
                ) : (
                    <img
                        key={star.toString()}
                        className="rating__icon"
                        src={greystar}
                        alt=""
                    />
                )
            )}
        </div>
    );
};

export default Rating;