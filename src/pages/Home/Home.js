import React from 'react';
import Footer from '../Footer/Footer';
import Banner from './Banner';
import Info from './Info';
import About from '../About/About';
import AnimationGsap from './AnimationGsap';
import AppSass from './AppSass';
import Services from './Services/Services';
// import Anim from './anim';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <About></About>
            <AppSass></AppSass>
            <AnimationGsap></AnimationGsap>
            <Services></Services>
            <Footer></Footer>


        </div>




    );
};

export default Home;