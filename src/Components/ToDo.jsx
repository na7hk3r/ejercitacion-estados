import React from 'react'
import Button from './Button'

const ToDo = (props) => {
  return (
    <div className="todo-container">
      <Button props="ejemplo" onClick={() => setTareas([...tareas, listaTareas])} />
      <Button />
      <Button />
    </div>
  )
}

export default ToDo