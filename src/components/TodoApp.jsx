import { useState } from "react";
const TodoApp = () => {
    const [tareas, setTareas] = useState([]);
    const [nuevaTarea, setNuevaTarea] = useState("");
    const pendientes = tareas.filter(tarea => !tarea.completada).length;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nuevaTarea.trim() !== "") {
            const nuevaTareaObj = {
                texto: nuevaTarea,
                completada: false
            };
            setTareas([...tareas, nuevaTareaObj]);
            setNuevaTarea("");
        }
    };

    const toggleCompletada = (index) => {
        const nuevasTareas = [...tareas];
        nuevasTareas[index].completada = !nuevasTareas[index].completada;
        setTareas(nuevasTareas);
    }

    const eliminarTarea = (index) => {
        const nuevasTareas = [...tareas];
        /* nuevasTareas.splice(index, 1); */
        setTareas(nuevasTareas.filter((_, i) => i !== index));
    }

    return(
        <div className="container">
            <h2>Todo App</h2>
            <form onSubmit={handleSubmit} className="form-tarea">
                <input type="text" placeholder="Agregar tarea..." value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)} />
                <button type="submit">Agregar</button>
            </form>
            <div>
                <p>Pendientes: {pendientes}</p>
            </div>
            <div>
                {tareas.length>0?(tareas.map((tarea, index) => (
                    <div key={index} onClick={() => toggleCompletada(index)} className={`tarea ${tarea.completada ? 'completada' : ''}`}>
                        <p>
                            {tarea.texto}
                        </p>
                        <button onClick={(e) => {
                            e.stopPropagation();
                            eliminarTarea(index);
                        }}>
                            X
                        </button>
                    </div>
                ))):(<p>No hay tareas agregadas</p>)}
            </div>
        </div>
    );
}
export default TodoApp;