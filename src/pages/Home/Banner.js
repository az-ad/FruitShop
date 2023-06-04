import React from 'react';
import banner from '../../images/banner.jpg'
import background1 from '../../images/home_background.jpg'
import background4 from '../../images/background4.jpg'
import background5 from '../../images/background5.jpg'
import { gsap } from 'gsap'
import SplitType from 'split-type'
import "./Banner.css"

import appleCartoon from '../../images/cartoon-character-food-removebg-preview.png'
const Banner = () => {
    const ourText = new SplitType('p.our-text', { types: 'chars' })
    const chars = ourText.chars
    gsap.fromTo(
        // chars,
        // {
        //     opacity: 0, y: 50
        // },
        // {
        //     opacity: 1, y: 0, duration: 1, delay: 5
        // }
        chars,
        {
            y: 100,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            duration: 2,
            ease: 'power4.out',
        }

    )



    return (

        <div className="hero min-h-screen">
            <img className='w-full' src={background4}></img>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md container">
                    <h1 className=" mb-5 text-5xl font-bold">Eat fresh fruit daily & stay healthy</h1>
                    <p className="our-text mb-5">We ensure fresh fuits which are totally bad chemical free. Your health safety our responsibility. Stay tuned with azad fruit shop for fresh and healthy varities fruits. Thank you so much.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>



    );
};

export default Banner;