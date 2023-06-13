import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faMessage, faThumbsDown, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const PostCard = ({ post }) => {
    const { description, img } = post;
    return (
        <div>
            <div className="my-8 card w-96 bg-base-100 shadow-xl justify-items-end">
                <figure><img className='h-32' src={img} alt="Shoes" /></figure>
                <div className="card-body">

                    <p>{description}</p>

                    {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div> */}
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
            {/* <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
                <figure><img className='h-32' src="" alt="Shoes" /></figure>
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
            </div> */}
        </div>
    );
};

export default PostCard;