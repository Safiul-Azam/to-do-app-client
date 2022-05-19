import React, { useState } from 'react';

const SingleTask = ({todoTask,index,refetch}) => {
    const [complete,setComplete]=useState(false)
    const {task, taskDescription,_id} = todoTask

    const handleDelete = id =>{
        fetch(`https://guarded-badlands-88424.herokuapp.com/todo/${id}`,{
            method:"DELETE"
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data)
        })
    }
    refetch()
    return (
            <tr>
                <th>{index + 1}</th>
                <td className={complete ? 'line-through': ''}>{task}</td>
                <td className={complete ? 'line-through': ''}>{taskDescription}</td>
                <td><button onClick={()=> setComplete(!complete)} className="btn btn-xs btn-success text-white">Complete</button></td>
                <td><button onClick={()=>handleDelete(_id)} className="btn btn-xs btn-error text-white">Delete</button></td>
            </tr>

    );
};

export default SingleTask;