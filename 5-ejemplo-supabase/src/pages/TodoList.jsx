import { useState, useEffect } from "react";
import { supabase } from "../client/supabase";

// Lista de tareas

const TodoList = () => {
  // Este estado es para manejar el valor del formulario.
  const [task, setTask] = useState("");

  // Este estado va a contener todas los valores de la tabla que cree dentro de supabase.
  const [tasks, setTasks] = useState([]);

  // Manejo el cambio de valor del input.
  const handleChange = (e) => setTask(e.target.value);

  // Este metodo es para controlar el envio de datos del formulario.
  const handleSubmit = async (e) => {
    
    // Con esto detengo que la pagina se recargue.
    e.preventDefault();

    // Hago la consulta sql (insert into todo (task) values (task))
    const { data, error } = await supabase.from("todo").insert({ task: task });

    // Al haber finalizado limpiamos el estado
    setTask("");

    // Este if previene a que se setee nulo dentro de algun estado.
    if (!error) {
      fetchData();
    }
  };

  // Este metodo me permite obtener los datos de la tabla todo de la base de datos.
  const fetchData = async () => {
    // Hago la consulta sql (select * from todo)
    const { data, error } = await supabase.from("todo").select("*");

    // Se hace para prevenir que el estado del listado de tareas no se setee con un valor de nulo.
    if (!error) {
      // Seteo la data
      setTasks(data);
    }

    console.log(data);
    console.log(error);
  };

  // Cargo la lista de tareas al primer render del componente
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1 className="my-2 text-4xl font-semibold">Lista de tareas</h1>
      <form className="mb-2" onSubmit={handleSubmit}>
        <input
          className="outline rounded px-2 py-1 mr-2 outline-1"
          type="text"
          name="task"
          placeholder="Ingrese una tarea"
          onChange={handleChange}
          value={task}
        />
        <button className="outline rounded px-4 py-2 outline-1" type="submit">
          Agregar
        </button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.task}</li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
