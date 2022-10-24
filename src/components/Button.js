

function Button(props) {
    return (
        <button style={{color : 'white', backgroundColor: props.color }} className='btn'>{props.text}</button>
    );
}


//Default props
Button.defaultProps = {
    text : 'A Button',
    color : 'blue'
}

export default Button;