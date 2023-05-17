
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from '../../Contexts/AuthProvider';
// import { Dayjs } from 'dayjs';
// import TextField from '@mui/material/TextField';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const SignUp = () => {

    //const [value, setValue] = React.useState < Dayjs | null > (null);
    //const [startDate, setStartDate] = useState(new Date());
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser } = useContext(AuthContext);

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error));
    }
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
                            <input type="text" placeholder="Enter your username" class="input input-bordered w-full max-w-xs"
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
                            <input type="email" placeholder="Enter your email" class="input input-bordered w-full max-w-xs"
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
                            <input type="password" placeholder="Enter your password" class="input input-bordered w-full max-w-xs"
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
                            <input type="date" placeholder="Enter your Birth Day" class="input input-bordered w-full max-w-xs"

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