import React, { useState } from 'react';
import { useForm } from "react-hook-form";
const Post = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);

        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewImage(reader.result);
        };
        reader.readAsDataURL(file);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div>
            {/* <div className='flex py-8'>

                <form onSubmit={handleSubmit}>
                    <input className="my-8 " type="file" accept="image/*" onChange={handleImageUpload} />
                    {previewImage && (
                        <img className='w-96' src={previewImage} alt="Preview" />
                    )}
                    <button type="submit" className="my-8 btn btn-outline">upload</button>
                </form>
            </div> */}
            <div className='ml-2 flex h-screen justify-left items-center  '>
                <div class="card w-96 bg-base-100 shadow-2xl border border-indigo-600">
                    <div class="card-body">
                        <h2 class="text-center text-2xl font-bold">Post something</h2>

                        <form className='form' >

                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">User name</span>

                                </label>
                                <input type="text" id="userNameInput" name='userName' placeholder="Enter your username" class="input input-bordered w-full max-w-xs"
                                />

                            </div>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Add Image</span>

                                </label>
                                <input className="my-8 " type="file" accept="image/*" onChange={handleImageUpload} />
                                {previewImage && (
                                    <img className='w-96' src={previewImage} alt="Preview" />
                                )}

                            </div>


                            <input className='btn w-full max-w-xs text-white ' type="Submit" value="Upload" />
                        </form>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Post;