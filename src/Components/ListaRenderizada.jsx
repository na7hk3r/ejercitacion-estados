import { useState } from 'react'

const ListaRenderizada = () => {
    const [tareas, setTareas] = useState([]);
  return (
    <div>
        <h1>Lista de Tareas</h1>
        <p>{tareas}</p>
    </div>

  )
}

export default ListaRenderizada