import React from 'react';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import { useEffect } from "react";

import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import SlideShow from '../components/slideshow/SlideShow';
import listLogements from "../db/logements.json";
import Tags from '../components/tags/Tags';
import './logement.css';
import Rating from '../components/rating/Rating';
import Server from '../components/server/Server';
import Collapse from '../components/collapse/Collapse';
const Logement = () => {
    const locationPage = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [locationPage]);


    const { logementId } = useParams();


    const logmentSelected = listLogements.find((logmentSelected) => logmentSelected.id === logementId);
    if (!logmentSelected) {
        return <Navigate to="/not-found" />
    }


    const { title, location, rating, host, equipments, description, pictures } = logmentSelected;

    return (
        < div>
            <Header />

            <div className='logement_background'>
                <div className="single_product">
                    <SlideShow slides={pictures} />
                    <div className="single_product_content">
                        <div className="single_product_informations">
                            <h1 className="single_product_title">{title}</h1>
                            <p className="single_product_location">{location}</p>
                            <div className="single_product_tags">
                                {logmentSelected.tags.map((tag, index) => (
                                    <Tags content={tag} key={index} />

                                ))}
                            </div>
                        </div>
                        <div className="single_product_rating_and_host">
                            <Rating rating={rating} />
                            <Server host={host} />
                        </div>
                    </div>
                    <div className="single_product_dropdowns">
                        <Collapse title="Description" content={description} />
                        <Collapse title="Equipement" content={equipments} />
                    </div>
                </div >
            </div>
            <div className='footerLogement'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Logement;