import React from 'react'

function Todo(props) {
  return (
    <p className='todo'>
            {props.todo}
    </p>
   
  )
}

export default Todo