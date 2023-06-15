import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AverageRating = () => {
    const [averageRating, setAverageRating] = useState(0);
    useEffect(() => {
        const fetchAverageRating = async () => {
            try {
                // Fetch the ratings from the backend server
                const response = await axios.get('http://localhost:5000/rating');
                const ratings = response.data;

                // Calculate the average rating
                if (ratings.length > 0) {
                    const sum = ratings.reduce((acc, rating) => acc + rating.rating, 0);
                    const average = sum / ratings.length;
                    setAverageRating(average);
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchAverageRating();
    }, []);

    return (
        <div>
            <h2>Average Rating: {averageRating}</h2>
        </div>
    );
};

export default AverageRating;