import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import Pagination from '../Pagination/Pagination';

const Services = () => {
    const [services, setServices] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(4);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = services.slice(firstPostIndex, lastPostIndex);
    return (
        <div className='my-10'>
            <div>
                <p className='my-8 text-5xl font-bolds text-yellow-400'>Our service area</p>
            </div>
            <div className='grid gap-6 grid-cols-1 mid:grid-cols-2 lg:grid-cols-3'>
                {/* <h2>services: {services.length}</h2> */}
                {
                    currentPosts.map(currentPosts => <ServiceCard
                        key={currentPosts._id}
                        service={currentPosts}>

                    </ServiceCard>)
                }
                {/* services={currentPosts} */}
                {/* {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}>

                    </ServiceCard>)

                } */}
                {/* <ServiceCard service={currentPosts}></ServiceCard>
                <Pagination
                    totalPosts={services.length}
                    postsPerPage={postsPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                /> */}

            </div>
            <div>
                <Pagination
                    totalPosts={services.length}
                    postsPerPage={postsPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
            </div>
        </div>
    );
};

export default Services;