import React from 'react';
import banner from '../../images/banner.jpg'
import background1 from '../../images/home_background.jpg'
import background from '../../images/background.jpg'

import appleCartoon from '../../images/cartoon-character-food-removebg-preview.png'
const Banner = () => {
    return (
        // <div class="hero min-h-screen bg-red-50 px-12">
        //     {/* <img className='w-full' src={background}></img> */}
        //     <div class="hero-content flex-col lg:flex-row-reverse ">
        //         <img src={banner} class="max-w-md rounded-lg shadow-2xl " />
        //         <div>
        //             <h1 class="text-5xl font-bold">Eat fresh fruit daily & stay healthy</h1>
        //             <p class="py-6 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        //             <button class="btn btn-primary">Get Started</button>
        //         </div>
        //     </div>
        // </div>
        // <div className="hero min-h-screen" style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRztzGsvt8xrKcQbwtUFnhumHoW2RSjRqGxFw&usqp=CAU")` }}>
        //     <img className='w-full' src={background}></img>
        //     <div className="hero-overlay bg-opacity-60"></div>
        //     <div className="hero-content text-center text-neutral-content">
        //         <div className="max-w-md">
        //             <h1 className="mb-5 text-5xl font-bold">Eat fresh fruit daily & stay healthy</h1>
        //             <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        //             <button className="btn btn-primary">Get Started</button>
        //         </div>
        //     </div>
        <div className="hero min-h-screen">
            <img className='w-full' src={background}></img>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Eat fresh fruit daily & stay healthy</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>



    );
};

export default Banner;