import React from 'react';
import TodoItem from './Todo_Item';

const TodoList = () => {
    return (
        <div className='todo-list'>
            <ul>
                <TodoItem text={'Clean up bedroom'}/>
                <TodoItem text={'Buy some milk'}/>
                <TodoItem text={'Jogging'}/>
                <TodoItem text={'Learn React'}/>
                <TodoItem text={'Doing Exercises'}/>
              
            </ul>
        </div>
    )
}

export default TodoList