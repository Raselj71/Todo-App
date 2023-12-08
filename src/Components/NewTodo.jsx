import React, { useState } from 'react'

function newTodo(props) {

    const [todo, setTodo]=useState('')

    const handleChange=(event)=>{
         setTodo(event.target.value)

    }
    const handleSubmit=(event)=>{
        event.preventDefault();
          props.onTodo(todo)

    }
    

  return (
    <form onSubmit={handleSubmit} className='form' >

        <input className='add' type='text' name='text' value={todo} onChange={handleChange} required></input>
        <button className='btn'>Add</button>



    </form>
  )
}

export default newTodo