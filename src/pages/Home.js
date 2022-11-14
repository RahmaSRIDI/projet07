import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Banner from '../components/banner/Banner';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Logements from '../components/logements/Logements';
import './home.css';
const Home = () => {
    const locationPage = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [locationPage]);
    return (
        <div >

            <Header />
            <Banner></Banner>
            <Logements></Logements>

            <Footer></Footer>

        </div >
    );
};

export default Home;