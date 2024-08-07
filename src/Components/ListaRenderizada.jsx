import '../App.css';
const ListaRenderizada = ({ tareas }) => {
    
  return (
    <div className="lista-container">
        <h1>Lista de Tareas</h1>
        <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>{tarea}</li>
        ))}
      </ul>
    </div>

  )
}

export default ListaRenderizada