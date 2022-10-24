
const tasks = [
    {
        id:1,
        text: 'wake up'
    },
    {
        id:2,
        text: 'Brush Teeth'
    },
    {
        id:3,
        text: 'Do breakfast'
    }

]


function Task(props) {
    return (
        <>
        <hr></hr>
        {tasks.
            map( 
                (task) => (<h3 key={task.id}>{task.text}</h3>)
            )
        }
        </>
    );
}


export default Task;