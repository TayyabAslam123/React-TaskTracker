import PropTypes from 'prop-types'

function Header({myCity}) {
    return (
      <header>
        <h1 style={{color : 'red', backgroundColor: 'black' }}>___ TASK TRACKER ___</h1>
        <p style={cityStyle}>I am living in  <b>{myCity}</b></p>
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