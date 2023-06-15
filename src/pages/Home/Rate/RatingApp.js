import React, { useEffect, useState } from 'react';
import { Rating } from '@mui/material';
import axios from 'axios';
import AverageRating from './AverageRating';
import Footer from '../../Footer/Footer';

const RatingApp = () => {
    // const [rating, setRating] = useState(1);

    const [averageRating, setAverageRating] = useState(0);
    const [rating, setRating] = useState(0);
    const [rates, setRates] = useState(0);
    const [ratings, setRatings] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:5000/rating')
    //         .then(res => res.json())
    //         .then(data => {
    //             setRatings(data)
    //             console.log(data)
    //         })
    // }, [])

    useEffect(() => {
        const fetchAverageRating = async () => {
            const response = await axios.get('http://localhost:5000/rating');
            const ratings = response.data;
            setRatings(ratings)
            console.log(ratings)
            if (ratings.length > 0) {
                const sum = ratings.reduce((acc, rating) => acc + rating.rating, 0);
                const average = sum / ratings.length;
                console.log(average)
                setAverageRating(average);
            }
            // try {
            //     // Fetch the ratings from the backend server
            //     const response = await axios.get('http://localhost:5000/rating');
            //     const ratings = response.data;
            //     setRatings(ratings)
            //     console.log(ratings)

            //     // Calculate the average rating
            // if (ratings.length > 0) {
            //     const sum = ratings.reduce((acc, rating) => acc + rating.rating, 0);
            //     const average = sum / ratings.length;
            //     console.log(average)
            //     setAverageRating(average);
            // }
            // } catch (error) {
            //     console.error(error);
            // }
        };

        fetchAverageRating();
    }, []);
    const handleRatingChange = (event, value) => {
        const rate = event.target.value;
        setRates(rate);
        // console.log(rates)
        console.log(rate);
        setRating(value);
        // console.log(rating);
    };

    const submit = async (event) => {
        event.preventDefault();
        console.log(rating);


        // try {
        //     // Send the rating to the backend server
        //     await axios.post('http://localhost:5000/rating', { rating });
        //     // Clear the rating form
        //     setRating(0);
        // } catch (error) {
        //     console.error(error);
        // }

        // Calculate the average rating
        // if (ratings.length > 0) {
        //     const sum = ratings.reduce((acc, rating) => acc + rating.rating, 0);
        //     const average = sum / ratings.length;
        //     console.log(average)
        //     setAverageRating(average);
        // }

        try {
            const response = await fetch('http://localhost:5000/rating', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ rating }),
            });

            if (response.ok) {
                // Clear the rating form
                setRating(0);
            } else {
                throw new Error('Failed to submit rating');
            }
        } catch (error) {
            console.error(error);
        }

    }



    return (
        <div className='m-8'>

            <Rating name="website-rating" value={rating} onChange={handleRatingChange} />
            <p>Your Rating: {rating}</p>
            <button onClick={submit} className="btn btn-outline btn-warning">
                Submit
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </button>
            <div>
                <h2>Total Ratings {ratings.length}</h2>
                <h2>Average Rating: {averageRating.toFixed(2)}</h2>
                {/* <AverageRating /> */}
            </div>


        </div>

    );
};

export default RatingApp;