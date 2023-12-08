import React, { useState } from 'react'
import Todos from './Components/Todos'
import NewTodo from './Components/NewTodo'






function App() {

const todolist=["todo 1", "todo 2", "todo 3"];

const [todos, setTodos]=useState(todolist)

 const addnewtodo=(newtodo)=>{
    setTodos([...todos, newtodo])
   console.log(newtodo)

 }

  return (
     
    <div className='container'>

          <NewTodo  onTodo={addnewtodo}/>
         <Todos data={todos}/>
    
      </div>
  )
}

export default App
