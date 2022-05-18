import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const SignUp = () => {
    const navigate= useNavigate(auth)
    const location = useLocation()
    const from = location?.status?.from?.pathname || '/'
    const { register, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);
    if(user || googleUser){
        navigate(from, {replace:true})
        console.log(user)
    }
    if(loading || updating || googleLoading){
        return <Loading></Loading>
    }
    let errorMessage;
    if(error || UpdateError || googleError){
        errorMessage = <p className='text-error'>{error.message || UpdateError.message || googleError.message}</p>
    }


    const onSubmit = async data => {
        const name = data.name
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName:name });
        alert('Updated profile');
        console.log(data)
    };
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
                    {...register("password", { required: true, minLength: 6 })}
                    type="password" placeholder="Your Password"
                    className="input input-bordered w-full text-lg my-5" />
                    {errorMessage}
                <input className='btn mt-5 btn-primary text-white' type="submit" value='Sign Up' />
                <p>Already have an account? <Link className='text-secondary' to='/login'>Please Login</Link></p>
            </form>
            <button onClick={()=>signInWithGoogle()} className='btn btn-secondary w-3/2 mt-4'>Google Sign In</button>
        </div>
    );
};

export default SignUp;