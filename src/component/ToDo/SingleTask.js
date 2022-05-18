import React from 'react';

const SingleTask = ({todoTask,index,refetch}) => {
    const {task, taskDescription,_id} = todoTask

    const handleDelete = () =>{
        
    }
    refetch()
    return (
            <tr>
                <th>{index}</th>
                <td>{task}</td>
                <td>date</td>
                <td>{taskDescription}</td>
                <td><button class="btn btn-xs">Complete</button></td>
                <td><button onClick={handleDelete} class="btn btn-xs">Delete</button></td>
            </tr>

    );
};

export default SingleTask;