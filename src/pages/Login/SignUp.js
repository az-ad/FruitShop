
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from '../../Contexts/AuthProvider';


const SignUp = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser } = useContext(AuthContext);
    const [users, setusers] = useState([]);

    const [existingUsers, setExistingUsers] = useState([]);

    const [userExists, setUserExits] = useState(false);


    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error));

        //------------for post data to database-----------//
        const userName = data.userName;
        const email = data.email;
        const password = data.password;
        const dateOfBirth = data.birthday;

        const user = { userName, email, password, dateOfBirth };
        console.log(user);
        fetch('http://localhost:5000/user', {
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

    }

    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setExistingUsers(data));

    }, [])
    const handleUserName = (e) => {
        const typedUserName = e.target.value;
        console.log(typedUserName)

        for (const user of existingUsers) {
            const userName = user.userName;
            console.log(userName);
            if (userName == typedUserName) {


                e.target.style.border = "0.5px solid red";
                e.target.style.outline = "0px solid red";



            }
        }



    };

    return (
        <div className='flex h-screen justify-center items-center  '>
            <div class="card w-96 bg-base-100 shadow-2xl border border-indigo-600">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold">Sign Up</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">User name</span>

                            </label>
                            <input type="text" id="userNameInput" onChange={handleUserName} name='userName' placeholder="Enter your username" class="input input-bordered w-full max-w-xs"
                                {...register("userName", {
                                    required: {
                                        value: true,
                                        message: 'User name is required'
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z0-9]+$/,
                                        message: 'Enter a valid user name' // JS only: <p>error message</p> TS only support string
                                    }
                                })} />
                            <label class="label">
                                {errors.userName?.type === 'required' && <span class="label-text-alt text-red-500">{errors.userName.message}</span>}

                                {errors.userName?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.userName.message}</span>}
                            </label>
                        </div>

                        {/* ---------------------------------Email part--------------------------------------- */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>

                            </label>
                            <input type="email" name='email' placeholder="Enter your email" class="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid email' // JS only: <p>error message</p> TS only support string
                                    }
                                })} />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}

                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        {/* -------------------------- password field--------------------------------------------- */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>

                            </label>
                            <input type="password" name='password' placeholder="Enter your password" class="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    pattern: {
                                        value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                                        message: 'Password must be strong, must contain at least one upper case letter, special charecter and digit '

                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'must be 6 characters or longer' // JS only: <p>error message</p> TS only support string
                                    }
                                })} />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}

                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {/* ----------------------phn number field------------------------------------- */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Phone Number</span>

                            </label>
                            <input type="phoneNumber" name='phoneNumber' placeholder="Enter your Phone Number" class="input input-bordered w-full max-w-xs"
                                {...register("phoneNumber", {
                                    required: {
                                        value: true,
                                        message: 'Phone number is required'
                                    },
                                    pattern: {
                                        value: /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/,
                                        message: 'Provide a valid phone number' // JS only: <p>error message</p> TS only support string
                                    }
                                })} />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.phoneNumber.message}</span>}

                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.phoneNumber.message}</span>}
                            </label>
                        </div>
                        {/* ----------------------Date of birth------------------------------------------ */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Date of Birth</span>

                            </label>

                            {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Basic example"
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider> */}
                            <input type="date" name='dateOfBirth' placeholder="Enter your Birth Day" class="input input-bordered w-full max-w-xs"

                                {...register("birthday", {
                                    required: {
                                        value: true,
                                        message: 'Birth Day is required'
                                    }
                                })} ></input>
                            <label class="label">
                                {errors.birthday?.type === 'required' && <span class="label-text-alt text-red-500">{errors.birthday.message}</span>}

                                {/* {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>} */}
                            </label>
                        </div>

                        <input className='btn w-full max-w-xs text-white ' type="Submit" value="Sign Up" />
                    </form>

                    <p><small>Already have an account? <Link className='text-cyan-300' to='/login'> Please login</Link></small></p>

                    <div class="divider">OR</div>
                    <button class="btn btn-outline">Continue with google</button>
                </div>

            </div>

        </div>
    );
};

export default SignUp;