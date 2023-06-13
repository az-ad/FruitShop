import React from 'react';
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

const Classify = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

    const [src, setSrc] = useState("");
    const [file, setFile] = useState("");
    const [img, setImg] = useState([]);
    const [imgBB, setImgBB] = useState({});
    const [showClass, setShowClass] = useState(false);
    const [showImg, setShowImg] = useState(false);
    //   const handleUpload = (e) => {
    //     e.preventDefault();
    //     console.log(file);
    //     updateFunction(file);
    //   };


    const handleChange = (e) => {
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            // console.log(reader.result);
            setSelectedImage(reader.result);
            setPreviewImage(reader.result);
        }

        let files = [];

        if (e.target.files.length !== 0) {
            const url = URL.createObjectURL(e.target.files[0]);

            setSrc(url);

            setFile(e.target.files[0]);
        }
        //------------------------//

    };

    const updateFunction = (img) => {
        const imgData = new FormData();
        imgData.set("key", "093661671de099bd3603fff021dd0053");
        imgData.append("image", img);
        //-----------hosting image to imgbb-------------//
        fetch("https://api.imgbb.com/1/upload", {
            method: "POST",
            body: imgData,
        })
            .then((res) => res.json())
            .then((data) => setImgBB(data));
    };

    const handleUpload = e => {

        e.preventDefault();
        console.log(file);
        updateFunction(file);
    }
    console.log(imgBB);
    // const handleImageUpload = (event) => {

    //     let reader = new FileReader();
    //     reader.readAsDataURL(event.target.files[0]);
    //     reader.onload = () => {
    //         // console.log(reader.result);
    //         setSelectedImage(reader.result);
    //         setPreviewImage(reader.result);
    //     }
    //     reader.onerror = (event) => {
    //         // console.log("error", event);
    //     }

    // };
    // console.log(imgBB);

    const handleClassification = () => {
        console.log(imgBB);
        const ourUrl = imgBB?.data?.url;

        console.log(ourUrl);

        let imgData = {
            url: ourUrl,
        };
        console.log(imgData);
        fetch(`http://localhost:5000/classification`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(imgData),
        })
            .then((res) => res.json())
            .then((data) => {
                setImg(data)
                console.log(data);
            });

    }
    const predediction = img[0];
    console.log(predediction)

    return (
        <div className='flex justify-around'>
            <div>
                <div class="ml-2 form-control w-full max-w-xs">
                    <form className='form' onSubmit={handleUpload} >
                        <label class="label">
                            <span class="label-text">Add Image</span>

                        </label>
                        <input className="my-8 " name='image' type="file" accept="image/*" onChange={handleChange} />
                        {previewImage && (
                            <img className='w-96' src={previewImage} alt="Preview" />
                        )}
                        <input className='my-2 btn w-full max-w-xs text-white ' type="Submit" value="Upload" />
                    </form>
                </div>
                <div>
                    <button onClick={handleClassification} className='ml-2 my-2 btn w-full max-w-xs text-white grid justify-items-stretch'>Classify</button>
                </div>
            </div>
            <div>
                <div className="card w-96 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{predediction.class}</h2>
                        {/* <p text-2xl>{predediction.score}</p>  */}
                        {/* <div className="card-actions justify-end">
                            <button className="btn btn-primary">Accept</button>
                            <button className="btn btn-ghost">Deny</button>
                        </div> */}
                    </div>
                </div>
                {/* <h1>{predediction.class}</h1> */}
            </div>
        </div>
    );
};

export default Classify;