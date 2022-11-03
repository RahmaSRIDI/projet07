import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../components/banner/Banner';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import SlideShow from '../components/slideshow/SlideShow';
import axios from "axios";
import listLogements from "./db/logements.json";
import Tags from '../components/tags/Tags';
const Logement = () => {

    const { logementId } = useParams();
    const product = listLogements.find((product) => product.id === logementId);
    const { title, location, rating, host, equipments, description, pictures, tags } =
        product;
    return (
        <div >

            <Header />



            {/* <div >
                {product.tags.map((tag, index) => (
                    <Tags key={index} getTag={tag} />
                ))}
            </div> */}
            <Footer></Footer>
        </div>
    );
};

export default Logement;