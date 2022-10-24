import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Task from './components/Task';

function App() {
  
  const name = 'user :)';

  return (
    <div className="App">
      <h1>React Todo Tracker !</h1>
      <Header myCity = "Lahore" />
      <h3>Welcome {name}</h3>  
      <Task />
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
