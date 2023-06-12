import React, { useState } from 'react';

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
            <div className='flex py-8'>

                <form onSubmit={handleSubmit}>
                    <input className="my-8 " type="file" accept="image/*" onChange={handleImageUpload} />
                    {previewImage && (
                        <img className='w-96' src={previewImage} alt="Preview" />
                    )}
                    <button type="submit" className="my-8 btn btn-outline">upload</button>
                </form>
            </div>

        </div>
    );
};

export default Post;