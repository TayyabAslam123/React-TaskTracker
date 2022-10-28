import { FaKissWinkHeart } from "react-icons/fa"
import { useState } from "react"

const AddTask = ({onAdd}) => {

    const [task, setTask] = useState('');
    const [day, setDay] = useState('');
    //
    const submitMe =(e)=>{
      e.preventDefault();
      onAdd({task, day});

      setTask('');
      setDay('');
      
      alert('New Task added');
    }

    return (
       <div style={{color : 'red', backgroundColor: 'black' }}>
        <form className='add-form' onSubmit={submitMe}>
          <div className='form-control'>
            <label>Task</label>
            <input
              type='text'
              placeholder='Add Task'
              value={task}
              onChange = {(e) => setTask(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label>Day & Time</label>
            <input
              type='text'
              placeholder='Add Day & Time'
              value={day}
              onChange = {(e) => setDay(e.target.value)}
            />
          </div>
          <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
      </div>
      )
      
}


export default AddTask