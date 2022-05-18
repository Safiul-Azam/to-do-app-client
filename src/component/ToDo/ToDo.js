import React from 'react';
import { useForm } from 'react-hook-form';

const ToDo = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='lg:w-1/2 w-full md:w-1/3 p-8 mx-auto my-14 mt-24 shadow-lg'>
            <h3 className="text-2xl text-secondary mb-4">welcome to your Todo Task list</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("task", { required: true })}
                    type="text" placeholder="Your Task Name"
                    class="input input-bordered w-full text-lg mt-4" />
                <input
                    {...register("taskDescription", { required: true })}
                    type="text" placeholder="Your Task Description"
                    class="input input-bordered w-full text-lg mt-5" />

                <input className='btn mt-5' type="submit" value='Add Task' />
            </form>
        </div>
    );
};

export default ToDo;