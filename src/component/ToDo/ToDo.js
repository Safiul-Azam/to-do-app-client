import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import ShowTask from './ShowTask';

const ToDo = () => {
    const MySwal = withReactContent(Swal)
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const todo = {
            task: data.task,
            taskDescription: data.taskDescription
        }

        fetch('http://localhost:5002/todo', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(todo)
        })
            .then(res => res.json())
            .then(todo => {
                if (todo.insertedId) {
                    MySwal.fire({
                        title: <strong>Added a new todo Task</strong>,
                        html: <p>{todo.task}</p>,
                        icon: 'success'
                    })
                    reset()
                }
            })

    };

    return (
        <div>
            <div className='lg:w-1/2 w-full md:w-1/3 p-8 mx-auto my-14 mt-24 shadow-lg'>
                <h3 className="text-2xl text-secondary mb-4">welcome to your Todo Task list</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("task", { required: true })}
                        type="text" placeholder="Your Task Name"
                        className="input input-bordered w-full text-lg mt-4" />
                    <input
                        {...register("taskDescription", { required: true })}
                        type="text" placeholder="Your Task Description"
                        className="input input-bordered w-full text-lg mt-5" />

                    <input className='btn mt-5' type="submit" value='Add Task' />
                </form>
            </div>
            <div className='lg:w-3/4 mx-auto w-1/2 shadow-lg mb-20'>
                <ShowTask></ShowTask>
            </div>
        </div>
    );
};

export default ToDo;