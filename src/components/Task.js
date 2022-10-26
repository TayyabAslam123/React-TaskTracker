
import { useState } from "react"
import SingleTask from './SingleTask'

// const tasks = [
//     {
//         id:1,
//         text: 'wake up'
//     },
//     {
//         id:2,
//         text: 'Brush Teeth'
//     },
//     {
//         id:3,
//         text: 'Do breakfast'
//     },
//     {
//         id:4,
//         text: 'Go To Office'
//     }

// ]

function Task(props) {

    // // State
    // const [tasks, setTasks] = useState([
    //     {
    //         id:1,
    //         text: 'wake up'
    //     },
    //     {
    //         id:2,
    //         text: 'Brush Teeth'
    //     },
    //     {
    //         id:3,
    //         text: 'Do breakfast'
    //     },
    //     {
    //         id:4,
    //         text: 'Go To Office'
    //     }
    //     ]);


    return (
        <>
        <hr></hr>
        {props.tasks.
            map( 
                // (task) => (<div className="task" key={task.id}>
                //            <h3>{task.text}</h3> 
                //            <p>Due Date : N/A</p>
                //            </div>)

                (task) => ( <SingleTask key={task.id} task={task.text} data={task} onDelete ={props.onDelete} /> )
            )
        }
        </>
    );
    
}


export default Task;