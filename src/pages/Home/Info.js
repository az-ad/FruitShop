import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../images/icons/clock.svg'
import phone from '../../images/icons/phone.svg'
import marker from '../../images/icons/marker.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 py-8'>
            <InfoCard bgClass="bg-cyan-300" cardTitle="Opening hours" img={clock} cardDescription="10:00 am to 8 PM"></InfoCard>
            <InfoCard bgClass="bg-blue-300" cardTitle="Contact us" img={phone} cardDescription="+88017234999999"></InfoCard>
            <InfoCard bgClass="bg-violet-300" cardTitle="Our location" img={marker} cardDescription="Banani, Dhaka"></InfoCard>
        </div>
    );
};

export default Info;