import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faThumbsUp, faMessage, faThumbsDown, faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const ServiceCard = ({ service }) => {
    const { img, price, title } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='h-32' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                <div className="card-actions justify-end">
                    <div className=""><p>{price} Tk</p> </div>
                    {/* <div className="badge badge-outline">Products</div> */}
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
                <div className="card-actions justify-end">
                    <div className=""><FontAwesomeIcon icon={faMessage} /></div>
                    <div className="badge badge-outline">Comments</div>
                </div>
                <div className="card-actions justify-start">
                    <div className="">
                        <FontAwesomeIcon icon={faThumbsUp} />
                    </div>
                    <div><p>0</p></div>
                    <div className="">
                        <FontAwesomeIcon icon={faThumbsDown} />
                    </div>
                    <div><p>0</p></div>

                </div>
            </div>
        </div>
    );
};

export default ServiceCard;

// <div className="card card-compact w-96 bg-base-100 shadow-xl">
//   <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
//   <div className="card-body">
//     <h2 className="card-title">Shoes!</h2>
//     <p>If a dog chews shoes whose shoes does he choose?</p>
//     <div className="card-actions justify-end">
//       <button className="btn btn-primary">Buy Now</button>
//     </div>
//   </div>
// </div>