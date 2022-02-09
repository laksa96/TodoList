import React, {useState} from 'react'

import Form from './components/Form'
import Todo from './components/Todo'

const App = () => {

    const [todoList, setTodoList] = useState([])
    const [todoInput, setTodoInput] = useState('')
    const [lastId, setLastId] = useState(1)

    // Add new item to todo list
    const addItem = (event) => {
        event.preventDefault()
        if (todoInput.length > 0) {
            setTodoList(prevState => [
                ...prevState,
                {
                    id: lastId,
                    text: todoInput,
                    completed: false
                }
            ])
            setLastId(prevId => prevId + 1)
            setTodoInput('')
        }
    }

    // Remove item from todo list
    const removeItem = (id) => {
        setTodoList(prevState => {
            return (
                prevState.filter((item) => {
                    return item.id !== id
                })
            )
        })
    }

    // Toggle if item is completed or not
    const toggleItem = (id) => {
        setTodoList(prevState => {
            return (
                prevState.map(item => {
                    return (
                        item.id === id
                        ? {...item, completed: !item.completed}
                        : item
                    )
                    
                })
            )
        })
    }

    // Update state for input
    const updateInput = (event) => {
        setTodoInput(event.target.value)
    }

    return (
        <main className='app p-5'>
            <h1 className='text-white display-3'>Simple Todo App in React</h1>
            <Form 
                inputData={todoInput} 
                handleInput = {(e) => updateInput(e)} 
                handleClick={(e) => addItem(e)} 
            />
            <Todo 
                items={todoList}
                handleRemove = {(id) => removeItem(id)}
                handleComplete = {(id) => toggleItem(id)} 
            />
        </main>
    )
}

export default App