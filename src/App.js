import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Task from './components/Task';
import { useState } from "react"


function App() {

  // State
  const [tasks, setTasks] = useState([
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
    },
    {
        id:4,
        text: 'Go To Office'
    },
    {
      id:5,
      text: 'Work Hard'
  }

    ]);

  
  const deleteTask = (id) =>{
    console.log('delete : ' + id);
    setTasks(tasks.filter((task) => task.id !== id))
  }  

  ////////
  // OR //
 //////////

  // function deleteTask(id){
  //   console.log('delete this Id : ' + id);
  // }
  
  const name = 'user :)';

  return (
    <div className="App">
      <h1>React Todo Tracker !</h1>
      <Header myCity = "Lahore" />
      <h3>Welcome {name}</h3>  
      {tasks.length > 0 ?  <Task tasks={tasks} onDelete={deleteTask} /> : 'No Task Found !'}
     
    </div>
  );

}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>
//           Let's start React
//         </h1>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
