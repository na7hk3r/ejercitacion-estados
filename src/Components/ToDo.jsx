import Button from './Button'

const ToDo = ({ addTarea }) => {
  return (
    <div className="todo-container">
      <Button onClick={() => addTarea('Pasear los perros! 🐶🐶')}>Pasear los perros! 🐶🐶</Button>
      <Button onClick={() => addTarea('Cocinar 🍳')}>Cocinar 🍳</Button>
      <Button onClick={() => addTarea('Hacer alguna tarea de React 🧪')}>Hacer alguna tarea de React 🧪</Button>
    </div>
  )
}

export default ToDo