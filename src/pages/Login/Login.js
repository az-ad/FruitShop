import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');

    const onSubmit = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
    }
    return (
        <div className='flex h-screen justify-center items-center  '>
            <div class="card w-96 bg-base-100 shadow-2xl border border-indigo-600">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold">Login</h2>



                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* /* -----------------------------username part----------------------------------- */}
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
                                    minLength: {
                                        value: 6,
                                        message: 'must be 6 characters or longer' // JS only: <p>error message</p> TS only support string
                                    }
                                })} />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}

                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>

                        <input className='btn w-full max-w-xs text-white ' type="Submit" value="Login" />
                        <div>
                            {loginError && <p className='text-red-600'>{loginError}</p>}
                        </div>
                    </form>

                    <p><small>New here? <Link className='text-cyan-300' to='/signup'> Create New Account</Link></small></p>

                    <div class="divider">OR</div>
                    <button class="btn btn-outline">Continue with google</button>
                </div>

            </div>

        </div>
    );
};

export default Login;