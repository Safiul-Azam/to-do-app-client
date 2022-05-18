import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const Login = () => {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      if(user){
        navigate('/todo')
        console.log(user)
    }
    if(loading){
        return <Loading></Loading>
    }
    let errorMessage;
    if(error){
        errorMessage = <p className='text-error'>{error.message}</p>
    }
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
        console.log(data)};

    return (
        <div className='lg:w-1/2 w-full md:w-1/3 p-8 mx-auto my-14 mt-24 shadow-lg'>
             <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("email", { required: true })}
                    type="email" placeholder="Your Email"
                    className="input input-bordered w-full text-lg mt-4" />
                <input
                    {...register("password", { required: true })}
                    type="password" placeholder="Your Password"
                    className="input input-bordered w-full text-lg mt-5" />
                {errorMessage}
                <input className='btn btn-primary text-white my-5' type="submit" value='Login' />
                <p className='text-accent'>New to To Do Task? <Link className='text-secondary' to='/signup'>Create new account</Link></p>
             
            </form>
        </div>
    );
};

export default Login;