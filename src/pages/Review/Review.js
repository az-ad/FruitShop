import React, { useEffect, useState } from 'react';

const Review = () => {
    const [users, setusers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/comment')
            .then(res => res.json())
            .then(data => setusers(data));

    }, [])

    const handleAddComment = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const comment = event.target.comment.value;
        const user = { name, comment };
        console.log(user);
        fetch('http://localhost:5000/comment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                const newUsers = [...users, data];
                setusers(newUsers);
                console.log(data);

            })
            .catch(err => console.error(err))
        event.target.reset();


    }

    return (
        <div className='flex'>
            {/* <input type="text" placeholder="Type here" className="my-8 w-96 h-32 input input-bordered " /> */}
            <form onSubmit={handleAddComment}>
                <div className="m-8 mx-8 form-control w-full max-w-xs flex-1 w-64 ">
                    <label className="label">
                        <h6 className="label-text">Enter your name</h6>
                    </label>
                    <input type="text" name='name' placeholder="Type here" className="my-8 w-96 input input-bordered " />
                    <label className="label">
                        <h6 className="label-text">Leave your feedback here</h6>
                    </label>
                    <input type="text" name='comment' placeholder="Type here" className="my-8 w-96 h-32 input input-bordered " />
                    <button type="submit" className="btn btn-outline">Submit</button>
                </div>

            </form>


            <div className='flex-1 w-64'>
                <h2>Total Comment {users.length}</h2>
                {
                    users.map(user => <div className='place-content-center'> <p className='text-yellow-300'>{user.name} </p> <p className='text-pink-500'>{user.comment}</p>   </div>)
                    // users.map(user => <p></p>> <p className='text-yellow-300'>{user.name} </p> <p className='text-pink-500'>{user.comment}</p>   </div>)
                }
            </div>
            {/* <div className="mx-8 form-control w-full max-w-xs justify-center">
                <label className="label">
                    <h6 className="label-text">Leave your feedback here</h6>
                </label>
                <input type="text" placeholder="Type here" className="my-8 w-96 h-32 input input-bordered " />

                <button class="btn btn-outline">Submit</button>
            </div> */}



        </div>

    );
};

export default Review;