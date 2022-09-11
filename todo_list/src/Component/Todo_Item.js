import React from 'react';
const TodoItem = (props) => {
    return (
        <li className='todo-item'>
            <div className='row'>
                <div className='choose'></div>
            <p> {props.text}</p>
            </div>
            <button>Remove</button>
        </li>
    )
}

export default TodoItem