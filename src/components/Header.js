import PropTypes from 'prop-types'
import Button from './Button';

function Header({myCity}) {
    // Event
    const myEvent = () => {
      alert('Today is '+ new Date().toLocaleString("en-US", { day : '2-digit' ,month: "long" }));
    }
    // End Event

    return (
      <header className='header'>
        <h1 style={{color : 'red', backgroundColor: 'black' }}>___ TASK TRACKER ___</h1>
        <p style={cityStyle}>I am living in  <b>{myCity}</b></p>
        <Button text = "Add Task" color = "green"/>
        <button onClick={myEvent}  className='btn' style={{color : 'white', backgroundColor: 'blue'}}>Show Date</button>

      </header>
    );
}
  
//Default props
Header.defaultProps = {
    myCity : ' Not Available :[ '
}

// Set type of props
Header.prototype = {
  myCity : PropTypes.bool.isRequired,
}

// Set style in file
const cityStyle = {
    color : 'red', 
    backgroundColor: 'black'
}

export default Header;  