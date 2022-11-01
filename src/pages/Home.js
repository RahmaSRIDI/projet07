import React from 'react';
import Banner from '../components/banner/Banner';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Logements from '../components/logements/Logements';

const Home = () => {
    return (
        <div >

            <Header />
            <Banner></Banner>
            <Logements></Logements>
            <Footer></Footer>
        </div>
    );
};

export default Home;