import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import SingleTask from './SingleTask';

const ShowTask = () => {
    const { data: todoTasks, isLoading, refetch } = useQuery('todo', () => fetch('http://localhost:5002/todo').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Task Name</th>
                            <th>date</th>
                            <th>Task Description</th>
                            <th>Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todoTasks.map((todoTask,index) => <SingleTask
                                key={todoTask._id}
                                todoTask={todoTask}
                                index={index}
                                refetch={refetch}
                            ></SingleTask>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ShowTask;