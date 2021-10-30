import React from 'react';
import Banner from '../Banner/Banner';
import Facilities from '../Facilities/Facilities';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Overview from '../Overview/Overview';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Facilities></Facilities>
            <Services></Services>
            <Overview></Overview>
            <Footer></Footer>
        </div>
    );
};

export default Home;