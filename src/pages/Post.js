import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import PostCard from './PostCard';
const Post = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [description1, setDescription] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/post')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };
    const handleImageUpload = (event) => {
        // const file = event.target.files[0];
        // setSelectedImage(file);
        // console.log(selectedImage)
        // const reader = new FileReader();
        // reader.onloadend = () => {
        //     setPreviewImage(reader.result);
        // };
        // reader.readAsDataURL(file);
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = () => {
            console.log(reader.result);
            setSelectedImage(reader.result);
            setPreviewImage(reader.result);
        }
        reader.onerror = (event) => {
            console.log("error", event);
        }
    };
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    // }

    const handlePost = event => {
        event.preventDefault();

        //     const formData = new FormData();
        //     formData.append('image', selectedImage);
        //     formData.append('description', description1);
        //     console.log(formData);
        //     try {
        //         const response = async () => await axios.post('http://localhost:5000/post', formData);
        //         console.log('Image uploaded successfully:', response.data);
        //         // Reset the form or perform any other necessary actions
        //     } catch (error) {
        //         console.error('Error uploading image:', error);
        //         // Handle error state or display an error message to the user
        //     }
        // };

        const description = event.target.description.value;
        // const img = event.target.image.value;
        const img = selectedImage;
        const post = { description, img }
        // console.log(selectedImage)
        console.log(post)
        // axios.post(`http://localhost:4000/post`, post)
        //     .then(res => {
        //         console.log(res);
        //         
        //     });

        fetch('http://localhost:5000/post', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
            .then(res => res.json())
            .then(data => {
                const newPosts = [...posts, data];
                setPosts(newPosts);
                console.log(data);

            })
            .catch(err => console.error(err))
        event.target.reset();

        // setDescription = '';
        // setSelectedImage = '';

    }
    return (
        <div className='flex justify-around'>
            <div className='ml-2 flex h-screen justify-left items-center  '>
                <div class="card w-96 bg-base-100 shadow-2xl border border-indigo-600">
                    <div class="card-body">
                        <h2 class="text-center text-2xl font-bold">Post something</h2>

                        <form className='form' onSubmit={handlePost} >

                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Caption</span>

                                </label>
                                <input type="text" name='description' value={description1} onChange={handleDescriptionChange} placeholder="Write something " class="input input-bordered w-full max-w-xs"
                                />

                            </div>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Add Image</span>

                                </label>
                                <input className="my-8 " name='image' type="file" accept="image/*" onChange={handleImageUpload} />
                                {previewImage && (
                                    <img className='w-96' src={previewImage} alt="Preview" />
                                )}

                            </div>


                            <input className='my-2 btn w-full max-w-xs text-white ' type="Submit" value="Upload" />
                        </form>

                    </div>

                </div>

            </div>
            <div className='my-16'>
                {/* <PostCard></PostCard> */}
                {
                    posts.map(posts => <PostCard
                        key={posts._id}
                        post={posts}>

                    </PostCard>)
                }
            </div>
        </div>
    );
};

export default Post;