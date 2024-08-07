import './App.css'
import ToDo from './Components/ToDo'
import ListaRenderizada from './Components/ListaRenderizada'
import { useState } from 'react'

function App() {
  const [tareas, setTareas] = useState([]);

  const addTarea = (tarea) => {
    setTareas([...tareas, tarea]);
  }

  return (
    <div className="main">
      <ToDo addTarea={addTarea}/>
      <ListaRenderizada tareas={tareas}/>
    </div>
  )
}

export default App
