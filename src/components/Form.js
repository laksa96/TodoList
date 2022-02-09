import React from 'react'

const Form = (props) => {
    return (
        <div>
            <form onSubmit={(e) => props.handleClick(e)} className='d-flex mt-5'>
                <input value={props.inputData} onChange={(e) => props.handleInput(e)} className='p-2 border-0 rounded' name='newTodo' type='text' placeholder='New Todo item' />
                <button onClick={(e) => props.handleClick(e)} className='btn btn-light d-flex align-items-center justify-content-center ms-3' type='button'><img src='images/plus-icon.svg' alt='Plus icon' /></button>
            </form>
        </div>
    )
}

export default Form