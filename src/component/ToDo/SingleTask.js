import React from 'react';

const SingleTask = ({todoTask,index,refetch}) => {
    const {task, taskDescription,_id} = todoTask

    const handleDelete = id =>{
        fetch(`http://localhost:5002/todo/${id}`,{
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
                <th>{index}</th>
                <td>{task}</td>
                <td>date</td>
                <td>{taskDescription}</td>
                <td><button className="btn btn-xs btn-success text-white">Complete</button></td>
                <td><button onClick={()=>handleDelete(_id)} className="btn btn-xs btn-error text-white">Delete</button></td>
            </tr>

    );
};

export default SingleTask;