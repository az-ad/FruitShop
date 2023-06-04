import React from 'react';

const About = () => {
    return (
        <div>
            {/* <div className='content-center ml-2.5 my-2 flex justify-center '>
                <iframe width="760" height="415" src="https://www.youtube.com/embed/Ap2jQxrrMhc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div> */}

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <iframe width="760" height="415" src="https://www.youtube.com/embed/Ap2jQxrrMhc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className='w-1/2'>
                        <h1 className="text-5xl font-bold">Everyday A Better Life</h1>
                        <h3 className="font-bold py-6">Discover a world of freshness, warm service and value</h3>
                        <p className="py-6">Azad fruit shop is the largest fruit shop in Bangladesh . As part of the Azad family, your satisfaction and wellbeing are what we work diligently to ensure. Most of all, we want to always leave you with a smile, whether you visit our stores or order online, and we are happy to serve you in whatever way we can.</p>

                        <h3>So expect more. Come and discover a different shopping experience. Welcome to Shwapno!</h3>
                    </div>
                </div>
            </div>
            <div className="join">
                <button className="join-item btn">1</button>
                <button className="join-item btn btn-active">2</button>
                <button className="join-item btn">3</button>
                <button className="join-item btn">4</button>
            </div>
        </div>
    );
};

export default About;