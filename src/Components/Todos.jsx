import React from 'react'
import Todo from './Todo'


function Todos(props) {

   
   
   
  return (
    <div className='todo_container'>
         {props.data.map((todo, index)=> <Todo key={index} todo={todo} />)}
          
    </div>
  )
}

export default Todos