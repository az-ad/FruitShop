import React, { useState } from 'react';
import { Rating } from '@mui/material';

const RatingApp = () => {
    const [rating, setRating] = useState(1);
    const [ratings, setRatings] = useState([]);
    // console.log(rating);

    // fetch('http://localhost:5000/rating', {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(rating)
    // })
    //     .then(res => res.json())
    //     .then(data => {
    //         const newRatings = [...ratings, data];
    //         setRatings(newRatings);
    //         console.log(data);

    //     })
    //     .catch(err => console.error(err))
    // event.target.reset();
    const submitRating = rating => {
        // event.preventDefault();
        // const name = event.target.name.value;
        // const comment = event.target.comment.value;
        // const user = { name, comment };
        // console.log(user);

        const rate = rating;
        console.log(rate);
        // fetch('http://localhost:5000/rating', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(rate)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         const newRatings = [...rating, data];
        //         setRating(newRatings);
        //         console.log(data);

        //     })
        //     .catch(err => console.error(err))
        // event.target.reset();


    }
    return (
        <div>
            <Rating onClick={() => submitRating(rating)}
                name="simple-controlled"
                value={rating}
                onChange={(event, newValue) => {
                    setRating(newValue);
                }} />
        </div>
    );
};

export default RatingApp;