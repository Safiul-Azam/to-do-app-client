import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='lg:w-1/2 w-full md:w-1/3 p-8 mx-auto my-14 mt-24 shadow-lg'>
            <h3>Sing Up</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("name", { required: true })}
                    type="text" placeholder="Your Name"
                    className="input input-bordered w-full text-lg mt-4" />
                <input
                    {...register("email", { required: true })}
                    type="email" placeholder="Your Email"
                    className="input input-bordered w-full text-lg mt-5" />
                <input
                    {...register("password", { required: true, minLength:6 })}
                    type="password" placeholder="Your Password"
                    className="input input-bordered w-full text-lg my-5" />

                <input className='btn mt-5 btn-primary text-white' type="submit" value='Sign Up' />
                <p>Already have an account? <Link className='text-secondary' to='/login'>Please Login</Link></p>
            </form>
        </div>
    );
};

export default SignUp;