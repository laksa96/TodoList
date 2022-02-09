import React from 'react'

const Todo = (props) => {

    const items = props.items

    const todoElements = items.map(item => {
        return (
            <div className={`todo d-flex align-items-center p-2 mt-2 bg-light rounded ${item.completed && 'todo--completed opacity-75'}`} key={item.id}>
                <div className='todo--text me-auto'>{item.text}</div>
                <div className='d-flex align-items-center justify-content-center'>
                    <button onClick={() => props.handleComplete(item.id)} className='btn p-2'><img src='images/check-icon.svg' alt='Check' /></button>
                    <button onClick={() => props.handleRemove(item.id)} className='btn p-2 ms-1'><img src='images/delete-icon.svg' alt='Delete' /></button>
                </div>
            </div>
        )
    })

    return (
        <div className='mt-5 d-flex flex-column'>
            {todoElements}
        </div>
    )
}

export default Todo