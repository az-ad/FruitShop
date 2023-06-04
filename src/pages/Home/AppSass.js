import React from 'react';
import sassImage from "../../images/Group 8449.jpg"
import './AppSass.scss'
const AppSass = () => {
    return (
        <section className='flex-container-sass'>
            <div className='half-width'>
                <h1 className='h1class'><span className='orange-color'>Skip</span>The Diet, Just eat Healthy
                </h1> <b></b>
                <p>Imagine you don't need a diet because we provide healthy and delicious food for you!</p>


            </div>
            <div className='half-width'>
                <img src={sassImage} alt=''></img>
            </div>
        </section>
    );
};

export default AppSass;