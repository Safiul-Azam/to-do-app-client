import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='lg:w-1/2 w-full md:w-1/3 p-8 mx-auto my-14 mt-24 shadow-lg'>
             <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("email", { required: true })}
                    type="email" placeholder="Your Email"
                    class="input input-bordered w-full text-lg mt-4" />
                <input
                    {...register("password", { required: true })}
                    type="password" placeholder="Your Password"
                    class="input input-bordered w-full text-lg mt-5" />

                <input className='btn btn-primary text-white my-5' type="submit" value='Login' />
                <p className='text-accent'>New to To Do Task? <Link className='text-secondary' to='/signup'>Create new account</Link></p>
             
            </form>
        </div>
    );
};

export default Login;