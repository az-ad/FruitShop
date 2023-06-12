import React from 'react';
import Footer from '../Footer/Footer';
import Banner from './Banner';
import Info from './Info';
import About from '../About/About';
import AnimationGsap from './AnimationGsap';
import AppSass from './AppSass';
import Services from './Services/Services';
import RatingApp from './Rate/RatingApp';
import Post from '../Post';
// import Anim from './anim';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Post></Post>
            <Info></Info>
            <About></About>
            <AppSass></AppSass>
            <AnimationGsap></AnimationGsap>
            <RatingApp></RatingApp>
            <Services></Services>
            <Footer></Footer>


        </div>




    );
};

export default Home;