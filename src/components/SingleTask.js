import { FaTimes } from 'react-icons/fa'

const SingleTask = (props) => {
    console.log(props.data)

    return(
        <div className="task">
            <h3>{props.task}</h3>
            <FaTimes style={{ color: 'red', cursor: 'pointer', margin:0 }} onClick={ () => props.onDelete(props.data.id)} />
            <h3>Date : </h3>
        </div>
    )

}

export default SingleTask;
