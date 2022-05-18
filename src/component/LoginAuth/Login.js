import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.status?.from?.pathname || '/'
    const { register, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
      if(user || googleUser){
         navigate(from, {replace:true})
        console.log(user)
    }
    if(loading ||googleLoading){
        return <Loading></Loading>
    }
    let errorMessage;
    if(error || googleError){
        errorMessage = <p className='text-error'>{error?.message || googleError?.message}</p>
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
              <button onClick={()=>signInWithGoogle()} className='btn btn-secondary mt-4 w-3/2'>Google Sign In</button>
        </div>
    );
};

export default Login;